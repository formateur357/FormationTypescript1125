// src/userDataStore.ts

import { BehaviorSubject } from "rxjs";
import { fetchUserData } from "./api";
import { AuthStore } from "./authStore";

export interface UserDataState {
  data: string[] | null;
  loading: boolean;
}

/**
 * Store des données utilisateur (hobbies)
 */
class UserDataStore {
  private store = new BehaviorSubject<UserDataState>({
    data: null,
    loading: false,
  });

  /** Récupère l’état courant */
  getUserDataState(): UserDataState {
    return this.store.getValue();
  }

  /** Permet de s'abonner aux changements */
  userDataSubscribe(fn: (state: UserDataState) => void) {
    return this.store.subscribe(fn);
  }

  /** Met à jour l’état (immutabilité) */
  private setState(partial: Partial<UserDataState>) {
    const current = this.getUserDataState();
    this.store.next({ ...current, ...partial });
  }

  /**
   * Charge les données utilisateurs :
   * - récupère l’utilisateur connecté
   * - si absent => erreur + stop
   * - sinon loading true, fetch, loading false, data remplie
   */
  async loadUserData() {
    const authState = authStore.getAuthState();
    const user = authState.user;

    if (!user) {
      console.error("Impossible de charger les données : pas connecté.");
      return;
    }

    this.setState({ loading: true });

    try {
      const result = await fetchUserData(user.id);

      this.setState({
        data: result.hobbies,
        loading: false,
      });
    } catch (err) {
      console.error("Erreur lors du chargement des données :", err);
      this.setState({ loading: false });
    }
  }

  /** Reset des données (utile au logout) */
  clear() {
    this.setState({ data: null });
  }
}

export const userDataStore = new UserDataStore();
