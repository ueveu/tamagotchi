// Globale Variablen
let health = 100;
let hunger = 0;
let energy = 100;
let age = 0;

// Funktion zum Aktualisieren der Gesundheit
function updateHealth(value) {
    health += value;
    health = Math.max(0, Math.min(100, health));
    document.getElementById('health-value').textContent = health;
    checkHealth();
}

// Funktion zum Überprüfen des Gesundheitszustands
function checkHealth() {
    if (health <= 0) {
        alert('Game Over! Dein Tamagotchi ist gestorben.');
        // Hier können wir später eine Funktion zum Neustarten des Spiels aufrufen
    } else if (health < 30 || energy < 30) {
        document.getElementById('tamagotchi-display').className = 'tired';
    } else if (hunger > 70) {
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

// Funktion zum Aktualisieren der Energie
function updateEnergy(value) {
    energy += value;
    energy = Math.max(0, Math.min(100, energy));
    document.getElementById('energy-value').textContent = energy;
    if (energy <= 0) {
        updateHealth(-5);  // Reduziere Gesundheit, wenn keine Energie
    }
    checkHealth();  // Überprüfe Gesundheitszustand nach Energieänderung
}

// Funktion zum Aktualisieren des Alters
function updateAge() {
    age++;
    document.getElementById('age-value').textContent = age;
    checkAgeMilestones();
}

// Funktion zum Überprüfen von Altersmeilensteinen
function checkAgeMilestones() {
    if (age === 5) {
        alert('Dein Tamagotchi ist nun ein Teenager!');
        // Hier könnten wir das Aussehen ändern
    } else if (age === 10) {
        alert('Dein Tamagotchi ist nun erwachsen!');
        // Hier könnten wir das Aussehen erneut ändern
    } else if (age === 15) {
        alert('Dein Tamagotchi ist nun ein Senior!');
        // Hier könnten wir das Verhalten anpassen (z.B. schnellerer Energieverlust)
    }
}

// Funktion zum Füttern
function feed() {
    if (hunger > 0) {
        updateHunger(-20);
        updateHealth(5);
        updateEnergy(-10);  // Füttern verbraucht etwas Energie
    }
}

// Funktion zum Schlafen
function sleep() {
    if (energy < 100) {
        updateEnergy(30);
        updateHunger(10);  // Schlafen macht hungrig
    }
}

// Timer für zunehmenden Hunger, abnehmende Energie und Altern
setInterval(function() {
    updateHunger(5);
    updateEnergy(-5);
    updateAge();
}, 10000);  // Alle 10 Sekunden

// Event Listener für die Buttons
document.getElementById('feed-btn').addEventListener('click', feed);
document.getElementById('sleep-btn').addEventListener('click', sleep);

// Initialisierung
updateHealth(0);  // Setzt die anfängliche Gesundheitsanzeige
updateHunger(0);  // Setzt die anfängliche Hungeranzeige
updateEnergy(0);  // Setzt die anfängliche Energieanzeige
updateAge();      // Setzt die anfängliche Altersanzeige