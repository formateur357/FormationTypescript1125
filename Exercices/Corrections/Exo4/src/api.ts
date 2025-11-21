export interface User {
  id: number;
  name: string;
}

/**
 * Simule un login asynchrone :
 * - attend 1 seconde
 * - renvoie un User
 */
export function login(name: string): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: Math.floor(Math.random() * 10000),
                name
            })
        }, 1000)
    })
}

/**
 * Simule un logout asynchrone :
 * - attend 500 ms
 * - ne renvoie rien
 */
export function logout(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 500)
    })
}

/**
 * Simule une API qui renvoie des données utilisateur :
 * - attend 1.2 seconde
 * - renvoie une liste de hobbies
 */
export function fetchUserData(
    userId: number
): Promise<{hobbies: string[] }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                hobbies: ["sport", "jeux", "musique"]
            })
        }, 1500)
    })
}