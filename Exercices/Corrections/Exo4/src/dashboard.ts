import { AuthStore } from "./authStore";
import { userDataStore } from "./userDataStore";

/**
 * Affiche un tableau de bord complet,
 * en lisant les deux stores au moment de l'appel.
 */
export function printDashboard() {
  const auth = authStore.getAuthState();
  const userData = userDataStore.getUserDataState();

  console.log("\n--- Dashboard ---");
  console.log("Auth loading:", auth.loading);
  console.log("User:", auth.user ? auth.user.name : "(aucun)");

  console.log("Data loading:", userData.loading);
  console.log(
    "Hobbies:",
    userData.data ? userData.data.join(", ") : "(aucune donnée)"
  );
}
