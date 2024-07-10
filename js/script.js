// Globale Variablen
let health = 100;
let hunger = 0;
let energy = 100;
let age = 0;
let happiness = 50;


// Funktion zum Aktualisieren der Gesundheit
function updateHealth(value) {
    health += value;
    if (health < 0) {
        health = 0;
    } else if (health > 100) {
        health = 100;
    }
    document.getElementById('health-value').textContent = health;
    checkHealth();
}


// Funktion zum Überprüfen des Gesundheitszustands
function checkHealth() {
    if (health <= 0) {
        alert('Game Over! Karl Heinz ist gestorben.');
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
    if (age === 13) {
        alert('Karl Heinz ist nun ein Teenager!');
        // Hier könnten wir das Aussehen ändern
    } else if (age === 18) {
        alert('Karl Heinz ist nun erwachsen!');
        // Hier könnten wir das Aussehen erneut ändern
    } else if (age === 35) {
        alert('Karl Heinz ist nun in der Midlife-Crisis!');    
    } else if (age === 50) {
        alert('Karl Heinz ist nun ein Senior!');
        // Hier könnten wir das Verhalten anpassen (z.B. schnellerer Energieverlust)
    }
    else if (age === 70) {
        alert('Karl Heinz ist nun ein alter!');
        // Hier können wir das Aussehen zurückfüchen
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

// Funktion zum Aktualisieren des Infofelds
function updateInfo(message) {
    document.getElementById('info-display').textContent = message;
}

// Funktion für visuelle Feedback-Effekte
function visualFeedback(action) {
    const tamagotchi = document.getElementById('tamagotchi-display');
    tamagotchi.classList.add(action);
    setTimeout(() => {
        tamagotchi.classList.remove(action);
    }, 500);
}


// Aktualisierte Funktionen mit visuellen Effekten und Info-Updates
function feed() {
    if (hunger > 0) {
        updateHunger(-20);
        updateHealth(5);
        updateEnergy(-10);
        visualFeedback('feed');
        updateInfo('Karl Heinz wurde gefüttert!');
    } else {
        updateInfo('Karl Heinz ist nicht hungrig.');
    }
}

function sleep() {
    if (energy < 100) {
        updateEnergy(30);
        updateHunger(10);
        visualFeedback('sleep');
        updateInfo('Karl Heinz hat geschlafen und Energie getankt!');
    } else {
        updateInfo('Karl Heinz ist nicht müde.');
    }
}

// Aktualisierte checkHealth Funktion
function checkHealth() {
    if (health <= 0) {
        alert('Game Over! Karl Heinz ist gestorben.');
        // Hier können wir später eine Funktion zum Neustarten des Spiels aufrufen
    } else if (health < 30 || energy < 30) {
        document.getElementById('tamagotchi-display').className = 'tired';
        updateInfo('Karl Heinz ist müde und braucht Schlaf!');
    } else if (hunger > 70) {
        document.getElementById('tamagotchi-display').className = 'hungry';
        updateInfo('Karl Heinz hat Hunger!');
    } else {
        document.getElementById('tamagotchi-display').className = 'happy';
        updateInfo('Karl Heinz ist glücklich!');
    }
}

// Array mit verschiedenen Spielaktivitäten
const playActivities = ['Ball spielen', 'Spazieren gehen', 'Tanzen', 'Verstecken spielen'];

// Funktion zum Aktualisieren der Zufriedenheit
function updateHappiness(value) {
    happiness += value;
    happiness = Math.max(0, Math.min(100, happiness));
    document.getElementById('happiness-value').textContent = happiness;
    checkHealth();
}

// Funktion zum Spielen
function play() {
    if (energy >= 20) {
        const activity = getRandomActivity();
        updateEnergy(-20);
        updateHappiness(15);
        updateHunger(10);
        visualFeedback('play');
        updateInfo(`Karl Heinz hat ${activity} gespielt und ist jetzt glücklicher!`);
        checkPlayReward();
    } else {
        updateInfo('Karl Heinz ist zu müde zum Spielen.');
    }
}

// Funktion zur zufälligen Auswahl einer Spielaktivität
function getRandomActivity() {
    return playActivities[Math.floor(Math.random() * playActivities.length)];
}

// Zähler für die Anzahl der Spiele
let playCount = 0;

// Funktion zur Überprüfung von Spielbelohnungen
function checkPlayReward() {
    playCount++;
    if (playCount % 5 === 0) {  // Belohnung nach jedem 5. Spiel
        updateHealth(10);
        updateInfo('Bonus! Karl Heinz erhält 10 zusätzliche Gesundheitspunkte für regelmäßiges Spielen!');
    }
}

// Aktualisierte checkHealth Funktion
function checkHealth() {
    if (health <= 0) {
        alert('Game Over! Karl Heinz ist gestorben.');
        // Hier können wir später eine Funktion zum Neustarten des Spiels aufrufen
    } else if (health < 30 || energy < 30) {
        document.getElementById('tamagotchi-display').className = 'tired';
        updateInfo('Karl Heinz ist müde und braucht Schlaf!');
    } else if (hunger > 70) {
        document.getElementById('tamagotchi-display').className = 'hungry';
        updateInfo('Karl Heinz hat Hunger!');
    } else if (happiness < 30) {
        document.getElementById('tamagotchi-display').className = 'sad';
        updateInfo('Karl Heinz ist traurig und möchte spielen!');
    } else {
        document.getElementById('tamagotchi-display').className = 'happy';
        updateInfo('Karl Heinz ist glücklich!');
    }
}

// Event Listener für den Spielen-Button
document.getElementById('play-btn').addEventListener('click', play);

// Aktualisierter Timer
setInterval(function() {
    updateHunger(5);
    updateEnergy(-5);
    updateAge();
    updateHappiness(-2);  // Zufriedenheit sinkt langsam mit der Zeit
}, 10000);  // Alle 10 Sekunden

// Initialisierung
updateHealth(0);
updateHunger(0);
updateEnergy(0);
updateAge();
updateHappiness(0);