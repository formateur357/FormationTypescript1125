// src/main.ts

import { authStore } from "./src/authStore";
import { userDataStore } from "./src/userDataStore";
import { printDashboard } from "./src/dashboard";

/** Sleep utilitaire */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 1) Subscribe aux deux stores => à chaque changement on réaffiche
authStore.authSubscribe(() => printDashboard());
userDataStore.userDataSubscribe(() => printDashboard());

async function main() {
  // Connexion
  await authStore.performLogin("Alice");

  // Chargement de données
  await userDataStore.loadUserData();

  // Pause
  await sleep(1500);

  // Déconnexion
  await authStore.performLogout();

  // Nettoyage des données après logout
  userDataStore.clear();
}

main();
