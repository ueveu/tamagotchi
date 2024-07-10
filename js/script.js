// Globale Variablen zur Verwaltung der Tamagotchi-Statuswerte
let health = 100;       // Gesundheit von Karl Heinz
let hunger = 0;         // Hungergefühl von Karl Heinz
let energy = 100;       // Energielevel von Karl Heinz
let happiness = 50;     // Zufriedenheit von Karl Heinz
let age = 0;            // Alter von Karl Heinz

// Funktion zum Aktualisieren der Gesundheit
function updateHealth(value) {
  health += value;      // Gesundheitswert anpassen
  if (health < 0) {     // Überprüfen, ob Gesundheit unter 0 liegt
    health = 0;         // Gesundheit auf Minimum setzen
  } else if (health > 100) {  // Überprüfen, ob Gesundheit über 100 liegt
    health = 100;       // Gesundheit auf Maximum setzen
  }
  document.getElementById("health-value").textContent = health; // Aktualisieren der Anzeige
  checkHealth();        // Gesundheitszustand überprüfen
}

// Funktion zur Überprüfung des Gesundheitszustands
function checkHealth() {
  if (health <= 0) {    // Überprüfen, ob Gesundheit auf 0 gefallen ist
    alert("Game Over! Karl Heinz ist gestorben."); // Game Over Nachricht anzeigen
  } else if (health < 30 || energy < 30) { // Überprüfen, ob Gesundheit oder Energie niedrig ist
    document.getElementById("tamagotchi-display").className = "tired"; // Visuelles Feedback
    updateInfo("Karl Heinz ist müde und braucht Schlaf!"); // Info-Update
  } else if (hunger > 70) { // Überprüfen, ob Hunger hoch ist
    document.getElementById("tamagotchi-display").className = "hungry"; // Visuelles Feedback
    updateInfo("Karl Heinz hat Hunger!"); // Info-Update
  } else if (happiness < 30) { // Überprüfen, ob Zufriedenheit niedrig ist
    document.getElementById("tamagotchi-display").className = "sad"; // Visuelles Feedback
    updateInfo("Karl Heinz ist traurig und möchte spielen!"); // Info-Update
  } else { // Wenn keine der obigen Bedingungen erfüllt ist
    document.getElementById("tamagotchi-display").className = "happy"; // Visuelles Feedback
    updateInfo("Karl Heinz ist glücklich!"); // Info-Update
  }
}

// Funktion zum Aktualisieren des Hungers
function updateHunger(value) {
  hunger += value;      // Hungergefühl anpassen
  if (hunger < 0) {     // Überprüfen, ob Hunger unter 0 liegt
    hunger = 0;         // Hunger auf Minimum setzen
  } else if (hunger > 100) {  // Überprüfen, ob Hunger über 100 liegt
    hunger = 100;       // Hunger auf Maximum setzen
  }
  document.getElementById("hunger-value").textContent = hunger; // Aktualisieren der Anzeige
  if (hunger >= 100) {  // Überprüfen, ob Hunger 100 erreicht hat
    updateHealth(-10);  // Gesundheit reduzieren
  }
}

// Funktion zum Aktualisieren der Energie
function updateEnergy(value) {
  energy += value;      // Energielevel anpassen
  if (energy < 0) {     // Überprüfen, ob Energie unter 0 liegt
    energy = 0;         // Energie auf Minimum setzen
  } else if (energy > 100) {  // Überprüfen, ob Energie über 100 liegt
    energy = 100;       // Energie auf Maximum setzen
  }
  document.getElementById("energy-value").textContent = energy; // Aktualisieren der Anzeige
  if (energy <= 0) {    // Überprüfen, ob Energie auf 0 gefallen ist
    updateHealth(-5);   // Gesundheit reduzieren
  }
  checkHealth();        // Gesundheitszustand überprüfen
}

// Funktion zum Füttern von Karl Heinz
function feed() {
  if (hunger > 0) {     // Überprüfen, ob Karl Heinz hungrig ist
    updateHunger(-10);  // Hungergefühl reduzieren
    updateHealth(5);    // Gesundheit erhöhen
    updateEnergy(-10);  // Energie reduzieren
    updateInfo("Karl Heinz wurde gefüttert!"); // Info-Update
  } else {
    updateInfo("Karl Heinz ist nicht hungrig."); // Info-Update, wenn nicht hungrig
  }
}

// Funktion zum Schlafen von Karl Heinz
function sleep() {
  if (energy < 100) {   // Überprüfen, ob Karl Heinz müde ist
    updateEnergy(20);   // Energie erhöhen
    updateHunger(10);   // Hungergefühl erhöhen
    updateHappiness(-5); // Zufriedenheit reduzieren
    updateInfo("Karl Heinz hat geschlafen und Energie getankt!"); // Info-Update
  } else {
    updateInfo("Karl Heinz ist nicht müde."); // Info-Update, wenn nicht müde
  }
}

// Funktion zum Aktualisieren der Zufriedenheit
function updateHappiness(value) {
  happiness += value;   // Zufriedenheit anpassen
  if (happiness < 0) {  // Überprüfen, ob Zufriedenheit unter 0 liegt
    happiness = 0;      // Zufriedenheit auf Minimum setzen
  } else if (happiness > 100) {  // Überprüfen, ob Zufriedenheit über 100 liegt
    happiness = 100;    // Zufriedenheit auf Maximum setzen
  }
  document.getElementById("happiness-value").textContent = happiness; // Aktualisieren der Anzeige
  checkHealth();        // Gesundheitszustand überprüfen
}

// Funktion zum Spielen mit Karl Heinz
function play() {
  if (energy >= 20) {   // Überprüfen, ob Karl Heinz genug Energie hat
    const activity = getRandomActivity(); // Zufällige Aktivität auswählen
    updateEnergy(-10);  // Energie reduzieren
    updateHappiness(10); // Zufriedenheit erhöhen
    updateHunger(10);   // Hungergefühl erhöhen
    updateInfo(`Karl Heinz hat ${activity} gespielt und ist jetzt glücklicher!`); // Info-Update
  } else {
    updateInfo("Karl Heinz ist zu müde zum Spielen."); // Info-Update, wenn müde
  }
}

// Funktion zum Aktualisieren des Alters
function updateAge() {
  age++;                // Alter erhöhen
  document.getElementById("age-value").textContent = age; // Aktualisieren der Anzeige
  checkAgeMilestones(); // Altersmeilensteine überprüfen
}

// Funktion zur Überprüfung von Altersmeilensteinen
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
  updateHunger(5);      // Hungergefühl alle 5 Sekunden erhöhen
  updateEnergy(-5);     // Energie alle 5 Sekunden reduzieren
  updateAge();          // Alter um 1 erhöhen
}, 5000);

// Initialisierung der Werte bei Start
updateHealth(0);        // Initialisieren des Gesundheitswerts
updateHunger(0);        // Initialisieren des Hungergefühls
updateEnergy(0);        // Initialisieren des Energielevels
updateAge();            // Initialisieren des Alters
updateHappiness(0);     // Initialisieren der Zufriedenheit
