import { BehaviorSubject } from "rxjs";
import { login, logout, User } from "./api";

export interface AuthState {
  user: User | null;
  loading: boolean;
}

/**
 * Store global d'authentification
 */
class AuthStore {
    private store = new BehaviorSubject<AuthState>({
        user: null,
        loading: false
    })

    getAuthState(): AuthState {
        return this.store.getValue()
    }

    private setState(authState: AuthState) {
        const current = this.getAuthState()
        this.store.next({...current, ...authState})
    }
    
    authSubscribe(fn: (state: AuthState) => void) {
        return this.store.subscribe(fn);
    }

    /** Connexion complète */
    async performLogin(name: string) {
        this.setState({ user:  {id: 1, name}, loading: true });

        const user = await login(name);

        this.setState({
        user,
        loading: false,
        });
    }

    /** Déconnexion complète */
    async performLogout() {
        this.setState({ user: null, loading: true });

        await logout();

        this.setState({
        user: null,
        loading: false,
        });
    }
}

export const authStore = new AuthStore();
