// Globale Variablen
let health = 100;
let hunger = 0;
let energy = 100;
let happiness = 50;
let age = 0;

// Funktion zum Aktualisieren der Gesundheit
function updateHealth(value) {
  health += value;
  if (health < 0) {
    health = 0;
  } else if (health > 100) {
    health = 100;
  }
  document.getElementById("health-value").textContent = health;
  checkHealth();
}

// Aktualisierte checkHealth Funktion
function checkHealth() {
  if (health <= 0) {
    alert("Game Over! Karl Heinz ist gestorben.");
  } else if (health < 30 || energy < 30) {
    document.getElementById("tamagotchi-display").className = "tired";
    updateInfo("Karl Heinz ist müde und braucht Schlaf!");
  } else if (hunger > 70) {
    document.getElementById("tamagotchi-display").className = "hungry";
    updateInfo("Karl Heinz hat Hunger!");
  } else if (happiness < 30) {
    document.getElementById("tamagotchi-display").className = "sad";
    updateInfo("Karl Heinz ist traurig und möchte spielen!");
  } else {
    document.getElementById("tamagotchi-display").className = "happy";
    updateInfo("Karl Heinz ist glücklich!");
  }
}

// Funktion zum Aktualisieren des Hungers
function updateHunger(value) {
  hunger += value;
  if (hunger < 0) {
    hunger = 0;
  } else if (hunger > 100) {
    hunger = 100;
  }
  document.getElementById("hunger-value").textContent = hunger;
  if (hunger >= 100) {
    updateHealth(-10); // Reduziere Gesundheit, wenn sehr hungrig
  }
}

// Funktion zum Aktualisieren der Energie
function updateEnergy(value) {
  energy += value;
  if (energy < 0) {
    energy = 0;
  } else if (energy > 100) {
    energy = 100;
  }
  document.getElementById("energy-value").textContent = energy;
  if (energy <= 0) {
    updateHealth(-5); // Reduziere Gesundheit, wenn keine Energie
  }
  checkHealth(); // Überprüfe Gesundheitszustand nach Energieänderung
}

// Aktualisierte Funktionen mit visuellen Effekten und Info-Updates
function feed() {
  if (hunger > 0) {
    updateHunger(-10);
    updateHealth(5);
    updateEnergy(-10);
    updateInfo("Karl Heinz wurde gefüttert!");
  } else {
    updateInfo("Karl Heinz ist nicht hungrig.");
  }
}

function sleep() {
  if (energy < 100) {
    updateEnergy(20);
    updateHunger(10);
    updateHappiness(-5);
    updateInfo("Karl Heinz hat geschlafen und Energie getankt!");
  } else {
    updateInfo("Karl Heinz ist nicht müde.");
  }
}

// Funktion zum Aktualisieren der Zufriedenheit
function updateHappiness(value) {
  happiness += value;
  if (happiness < 0) {
    happiness = 0;
  } else if (happiness > 100) {
    happiness = 100;
  }
  document.getElementById("happiness-value").textContent = happiness;
  checkHealth();
}

// Funktion zum Spielen
function play() {
  if (energy >= 20) {
    const activity = getRandomActivity();
    updateEnergy(-10);
    updateHappiness(10);
    updateHunger(10);
    updateInfo(
      `Karl Heinz hat ${activity} gespielt und ist jetzt glücklicher!`
    );
  } else {
    updateInfo("Karl Heinz ist zu müde zum Spielen.");
  }
}

// Funktion zum Aktualisieren des Alters
function updateAge() {
  age++;
  document.getElementById("age-value").textContent = age;
  checkAgeMilestones();
}

// Funktion zum Überprüfen von Altersmeilensteinen
function checkAgeMilestones() {
  if (age === 13) {
    alert("Karl Heinz ist nun ein Teenager!");
  } else if (age === 18) {
    alert("Karl Heinz ist nun erwachsen!");
  } else if (age === 35) {
    alert("Karl Heinz ist nun in der Midlife-Crisis!");
  } else if (age === 50) {
    alert("Karl Heinz ist nun ein Senior!");
  } else if (age === 70) {
    alert("Karl Heinz ist nun ein alter Mann!");
  }
}
// Funktion zur zufälligen Auswahl einer Spielaktivität
function getRandomActivity() {
  return playActivities[Math.floor(Math.random() * playActivities.length)];
}

// Funktion zum Aktualisieren des Infofelds
function updateInfo(message) {
  document.getElementById("info-display").textContent = message;
}

// Array mit verschiedenen Spielaktivitäten
const playActivities = [
  "Ball spielen",
  "Spazieren gehen",
  "Tanzen",
  "Verstecken spielen",
];

// Event Listener für die Buttons
document.getElementById("feed-btn").addEventListener("click", feed);
document.getElementById("sleep-btn").addEventListener("click", sleep);
document.getElementById("play-btn").addEventListener("click", play);

// Timer für zunehmenden Hunger, abnehmende Energie und Altern
setInterval(function () {
  updateHunger(5);
  updateEnergy(-5);
  updateAge();
}, 5000);

// Initialisierung
updateHealth(0);
updateHunger(0);
updateEnergy(0);
updateAge();
updateHappiness(0);
