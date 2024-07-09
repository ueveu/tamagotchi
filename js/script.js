document.getElementById('tamagotchi-display').classList.add('happy');

// Globale Variablen
let health = 100;

// Funktion zum Aktualisieren der Gesundheit
function updateHealth(value) {
    health += value;
    // Begrenze die Gesundheit auf 0-100
    health = Math.max(0, Math.min(100, health));
    document.getElementById('health-value').textContent = health;
    checkHealth();
}

// Funktion zum Überprüfen des Gesundheitszustands
function checkHealth() {
    if (health <= 0) {
        alert('Game Over! Dein Tamagotchi ist gestorben.');
        // Hier können wir später eine Funktion zum Neustarten des Spiels aufrufen
    } else if (health < 30) {
        document.getElementById('tamagotchi-display').className = 'tired';
    } else if (health < 70) {
        document.getElementById('tamagotchi-display').className = 'hungry';
    } else {
        document.getElementById('tamagotchi-display').className = 'happy';
    }
}

// Initialisierung
updateHealth(0); // Setzt die anfängliche Gesundheitsanzeige