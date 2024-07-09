document.getElementById('tamagotchi-display').classList.add('happy');

// Globale Variablen
let health = 100;
let hunger = 0;

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

// Funktion zum Aktualisieren des Hungers
function updateHunger(value) {
    hunger += value;
    hunger = Math.max(0, Math.min(100, hunger));
    document.getElementById('hunger-value').textContent = hunger;
    if (hunger >= 100) {
        updateHealth(-10);  // Reduziere Gesundheit, wenn sehr hungrig
    }
}

// Funktion zum Füttern
function feed() {
    if (hunger > 0) {
        updateHunger(-20);
        updateHealth(5);
    }
}

// Timer für zunehmenden Hunger
setInterval(function() {
    updateHunger(5);
}, 10000);  // Erhöhe Hunger alle 10 Sekunden

// Event Listener für den Füttern-Button
document.getElementById('feed-btn').addEventListener('click', feed);

// Initialisierung
updateHealth(0);  // Setzt die anfängliche Gesundheitsanzeige
updateHunger(0);  // Setzt die anfängliche Hungeranzeige

// Initialisierung