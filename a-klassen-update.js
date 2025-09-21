// ============================================================================
// A-KLASSEN UPDATE FÜR BESTEHENDE FAHRSCHUL-APP
// Diese Datei enthält alle Änderungen für die A-Klassen (A, A1, A2, AM)
// ============================================================================

// SCHRITT 1: A-Klassen Kategorien zu getTrainingCategoriesForClass hinzufügen
// Fügen Sie diesen Code in die getTrainingCategoriesForClass Funktion ein:

/*
if (className === 'A' || className === 'A1' || className === 'A2' || className === 'AM') {
  // A-Klassen (Motorrad) mit exakten Kategorien aus Ausbildungsdiagramm
  return {
    "grundstufe": {
      "name": "Grundstufe",
      "subtitle": "Balance-Übungen und Grundlagen", 
      "color": "#F59E0B",
      "sections": {
        "balance_uebungen": {
          "name": "Balance-Übungen",
          "items": ["Im Stand", "Schieben", "Schieben und dosiertes Bremsen", "Schieben einer Links- und Rechtskurve", "Rückwärtsschieben", "Auf- und Abbocken", "Seitenständer", "Auf- und Absteigen"]
        },
        "sitzposition": {
          "name": "Sitzposition",
          "items": ["Körperhaltung, Fußstellung, Handstellung, Spiegeleinstellung"]
        },
        "handhabung": {
          "name": "Handhabung",
          "items": ["Starten", "1. Gang, Spiegel, Schulterblick, Blinker"]
        },
        "anfahrt_anhalte": {
          "name": "Anfahrt- und Anhalteübungen",
          "items": ["Anfahren bis 2. Gang", "Anhalten/Leerlauf"]
        }
      }
    },
    
    "aufbaustufe": {
      "name": "Aufbaustufe",
      "subtitle": "Übungen im instabilen und eigenstabilen Bereich",
      "color": "#F97316",
      "sections": {
        "instabil_uebungen": {
          "name": "Übungen im Instabilen Bereich",
          "items": ["Schrittgeschwindigkeit (GF)", "Stop and Go (GF)", "Slalom in Schrittgeschwindigkeit (GF)", "Anfahren links/rechts mit Lenkeinschlag", "Wenden"]
        },
        "eigenstabil_uebungen": {
          "name": "Übungen im eigenstabilen Bereich",
          "items": ["Slalom Gleich (GF)", "Slalom ungleich (GF)", "Kreisfahren"]
        },
        "bremsen_30": {
          "name": "Bremsen 30 km/h",
          "items": ["Fußbremse", "Handbremse", "Hand u. Fußbremse"]
        },
        "bremsen": {
          "name": "Bremsen",
          "items": ["Zunehmende Kraft", "Hinten blockiert (30 km/h)"]
        },
        "beschleunigen_schalten": {
          "name": "Beschleunigen - Schalten",
          "items": ["Hoch/runter", "Durchschalten/Stopp", "Durchschalten/Weiterfahren"]
        },
        "vollbremsung": {
          "name": "Vollbremsung",
          "items": ["50 km/h (M) 40 km/h (GF)"]
        },
        "ausweichen": {
          "name": "Ausweichen",
          "items": ["ohne Bremsen (GF)", "nach Bremsen (GF)"]
        },
        "steigung_gefaelle": {
          "name": "Steigung und Gefälle",
          "items": ["Anfahren", "bremsen", "Wenden", "Schalten"]
        }
      }
    },
    
    "leistungsstufe": {
      "name": "Leistungsstufe",
      "subtitle": "Verkehrsverhalten und besondere Situationen",
      "color": "#EF4444",
      "sections": {
        "an_einfahren": {
          "name": "An- und Einfahren",
          "items": ["Fahrstreifenbenutzung", "Umweltschonendes Fahren"]
        },
        "geschwindigkeit_abstaende": {
          "name": "Anpassen der Geschwindigkeit",
          "items": ["Anpassen der Geschwindigkeit"]
        },
        "sicherheitsabstaende": {
          "name": "Sicherheitsabstände",
          "items": ["Sicherheitsabstände"]
        },
        "verkehrsbeobachtung": {
          "name": "Verkehrsbeobachtung",
          "items": ["Verkehrsbeobachtung"]
        },
        "fahrstreifenwechsel": {
          "name": "Fahrstreifenwechsel",
          "items": ["Fahrstreifenwechsel"]
        },
        "kreuzungen_einmuendungen": {
          "name": "Kreuzungen/Einmündungen",
          "items": ["heranfahren und überqueren"]
        },
        "einordnen_abbiegen": {
          "name": "Einordnen/Abbiegen",
          "items": ["nach rechts", "nach links", "Abknickende Vorfahrt", "Einbahnstraße"]
        },
        "besondere_situationen": {
          "name": "Besondere Verkehrssituationen",
          "items": ["Bahnübergang", "Öffentliche Verkehrsmittel", "30 - Zonen", "Fußgängerüberwege", "Kinder, Behinderte, Ältere"]
        }
      }
    },
    
    "reifestufe": {
      "name": "Reifestufe",
      "subtitle": "Testfahrt und Prüfungsvorbereitung",
      "color": "#22C55E",
      "sections": {
        "testfahrt_pruefung": {
          "name": "Testfahrt unter Prüfungsbedingungen",
          "items": ["mit Einbeziehung der Grundfahraufgaben, Autobahn und Landstraße"]
        },
        "gezielte_uebungen": {
          "name": "Gezielte Übungen und Korrekturen",
          "items": ["nach dem Ergebnis der Testfahrt"]
        },
        "beruecksichtigung_fahrweise": {
          "name": "Berücksichtigung",
          "items": ["der umweltschonenden, verantwortungsbewussten und partnerschaftlichen Fahrweise"]
        },
        "fahrtechnische_vorbereitung": {
          "name": "Fahrtechnische Vorbereitung",
          "items": ["Fahrtechnische Vorbereitung"]
        },
        "sicherheitskontrolle": {
          "name": "Sicherheitskontrolle",
          "items": ["Sicherheitskontrolle"]
        }
      }
    },
    
    "uberlandfahrten": {
      "name": "Überlandfahrt",
      "subtitle": "Besondere Ausbildungsfahrten",
      "color": "#EAB308",
      "sections": {
        "ueberlandfahrt": {
          "name": "Überlandfahrt",
          "items": ["Geschwindigkeit, Abstand, Blickschulung", "Kreuzungen/Einmündungen a.g.O.", "Kurven", "Überholen", "Steigungen", "Gefälle", "Einfahren i.g.O.", "Fahren nach Wegweiser", "Umweltschonende Fahrweise"]
        }
      },
      "psCircles": 5
    },
    
    "autobahn": {
      "name": "Autobahnfahrt",
      "subtitle": "Besondere Ausbildungsfahrten",
      "color": "#EAB308",
      "sections": {
        "autobahnfahrt": {
          "name": "Autobahnfahrt",
          "items": ["Einfahren Beschleunigungsstreifen", "Abstand", "Fahrstreifenwechsel", "Überholen", "Richtgeschwindigkeit", "Park-/Rastplätze", "Verhalten bei Unfällen/Notrufssäule", "Umweltschonendes Fahren", "Verhalten bei dichtem Verkehr", "Verlassen/Verzögerungsstreifen"]
        }
      },
      "psCircles": 4
    },
    
    "dammerung_dunkelheit": {
      "name": "Nachtfahrt",
      "subtitle": "Besondere Ausbildungsfahrten",
      "color": "#EAB308",
      "sections": {
        "nachtfahrt": {
          "name": "Nachtfahrt",
          "items": ["Beleuchtungseinrichtungen", "Fahren i.g.O.", "Fahren a.g.O.", "Parken", "Auf-/Abblenden", "Schwelle - Fahrgeschwindigkeit", "Lärmschutz"]
        }
      },
      "psCircles": 3
    },
    
    "checkliste": {
      "name": "Checkliste zur fahrtechnischen Vorbereitung",
      "subtitle": "Sicherheitskontrollen vor Fahrtbeginn",
      "color": "#06B6D4",
      "sections": {
        "beim_fahrzeug": {
          "name": "BEIM FAHRZEUG",
          "items": ["Überprüfung des ordnungsgemäßen Zustandes der Reifen", "Verschleiß (z.B. Beschädigungen, Profiltiefe)", "Reifendruck"]
        },
        "scheinwerfer_leuchten": {
          "name": "Scheinwerfer, Leuchten, Blinker, Hupe",
          "items": ["Ein- und Ausschalten"]
        },
        "funktion_pruefen": {
          "name": "Funktion prüfen von",
          "items": ["Standlicht", "Abblendlicht", "Fernlicht", "Nebelschlussleuchte", "Warnblinkanlage", "Blinker", "Hupe"]
        },
        "kontrollleuchten": {
          "name": "Kontrollleuchten benennen",
          "items": ["Kontrollleuchten benennen"]
        },
        "rueckstrahler": {
          "name": "Rückstrahler",
          "items": ["Vorhandensein", "Beschädigung"]
        },
        "lenkung": {
          "name": "Lenkung",
          "items": ["Lenkschloss entriegeln", "Erkennen des Lenkspiels"]
        },
        "bremsen_pruefen": {
          "name": "Funktionsprüfung der Bremsen",
          "items": ["Handbremse", "Fußbremse"]
        },
        "beim_fahrer": {
          "name": "BEIM FAHRER (vor Fahrtbeginn)",
          "items": ["Richtige Positionierung", "Einstellung der Rückspiegel", "Tragen des Schutzhelms"]
        },
        "zusaetzliche_kontrollen": {
          "name": "ZUSÄTZLICHE KONTROLLEN AM FAHRZEUG (nicht prüfungsrelevant)",
          "items": ["Flüssigkeitsstände kontrollieren"]
        },
        "fluessigkeiten": {
          "name": "Flüssigkeitsstände",
          "items": ["Kühlwasser", "Bremse", "Kupplung", "Motoröl", "Kraftstoff", "Batterie"]
        },
        "spiegel_bowdenzuege": {
          "name": "Weitere Kontrollen",
          "items": ["Spiegel", "Bowdenzüge"]
        },
        "lager": {
          "name": "Lager",
          "items": ["Lenkkopflager", "Schwingenlager", "Radlager"]
        },
        "antrieb": {
          "name": "Kette/Zahnriemen",
          "items": ["Kette/Zahnriemen"]
        },
        "kennzeichen": {
          "name": "Kennzeichen/Prüfplakette",
          "items": ["Kennzeichen/Prüfplakette"]
        }
      }
    }
  };
}
*/

// SCHRITT 2: CSS Banner-Farben für A-Klassen hinzufügen
// Fügen Sie dieses CSS in den <style> Bereich ein:

/*
// BANNER-FARBEN FÜR A-KLASSEN (A, A1, A2, AM) 
body[data-current-class="A"] .training-header.grundstufe,
body[data-current-class="A1"] .training-header.grundstufe,
body[data-current-class="A2"] .training-header.grundstufe,
body[data-current-class="AM"] .training-header.grundstufe,
[data-class="A"] .training-header.grundstufe,
[data-class="A1"] .training-header.grundstufe,
[data-class="A2"] .training-header.grundstufe,
[data-class="AM"] .training-header.grundstufe {
border-left-color: #F59E0B !important; // Orange/Braun - Grundstufe 
}

body[data-current-class="A"] .training-header.aufbaustufe,
body[data-current-class="A1"] .training-header.aufbaustufe,
body[data-current-class="A2"] .training-header.aufbaustufe,
body[data-current-class="AM"] .training-header.aufbaustufe,
[data-class="A"] .training-header.aufbaustufe,
[data-class="A1"] .training-header.aufbaustufe,
[data-class="A2"] .training-header.aufbaustufe,
[data-class="AM"] .training-header.aufbaustufe {
border-left-color: #F97316 !important; // Orange-Rot - Aufbaustufe 
}

body[data-current-class="A"] .training-header.leistungsstufe,
body[data-current-class="A1"] .training-header.leistungsstufe,
body[data-current-class="A2"] .training-header.leistungsstufe,
body[data-current-class="AM"] .training-header.leistungsstufe,
[data-class="A"] .training-header.leistungsstufe,
[data-class="A1"] .training-header.leistungsstufe,
[data-class="A2"] .training-header.leistungsstufe,
[data-class="AM"] .training-header.leistungsstufe {
border-left-color: #EF4444 !important; // Rot - Leistungsstufe 
}

body[data-current-class="A"] .training-header.reifestufe,
body[data-current-class="A1"] .training-header.reifestufe,
body[data-current-class="A2"] .training-header.reifestufe,
body[data-current-class="AM"] .training-header.reifestufe,
[data-class="A"] .training-header.reifestufe,
[data-class="A1"] .training-header.reifestufe,
[data-class="A2"] .training-header.reifestufe,
[data-class="AM"] .training-header.reifestufe {
border-left-color: #22C55E !important; // Grün - Reifestufe 
}

body[data-current-class="A"] .training-header.checkliste,
body[data-current-class="A1"] .training-header.checkliste,
body[data-current-class="A2"] .training-header.checkliste,
body[data-current-class="AM"] .training-header.checkliste,
[data-class="A"] .training-header.checkliste,
[data-class="A1"] .training-header.checkliste,
[data-class="A2"] .training-header.checkliste,
[data-class="AM"] .training-header.checkliste {
border-left-color: #06B6D4 !important; // Türkis - Checkliste 
}

body[data-current-class="A"] .training-header.uberlandfahrten,
body[data-current-class="A1"] .training-header.uberlandfahrten,
body[data-current-class="A2"] .training-header.uberlandfahrten,
body[data-current-class="AM"] .training-header.uberlandfahrten,
[data-class="A"] .training-header.uberlandfahrten,
[data-class="A1"] .training-header.uberlandfahrten,
[data-class="A2"] .training-header.uberlandfahrten,
[data-class="AM"] .training-header.uberlandfahrten {
border-left-color: #EAB308 !important; // Gelb - Überland 
}

body[data-current-class="A"] .training-header.autobahn,
body[data-current-class="A1"] .training-header.autobahn,
body[data-current-class="A2"] .training-header.autobahn,
body[data-current-class="AM"] .training-header.autobahn,
[data-class="A"] .training-header.autobahn,
[data-class="A1"] .training-header.autobahn,
[data-class="A2"] .training-header.autobahn,
[data-class="AM"] .training-header.autobahn {
border-left-color: #EAB308 !important; // Gelb - Autobahn 
}

body[data-current-class="A"] .training-header.dammerung_dunkelheit,
body[data-current-class="A1"] .training-header.dammerung_dunkelheit,
body[data-current-class="A2"] .training-header.dammerung_dunkelheit,
body[data-current-class="AM"] .training-header.dammerung_dunkelheit,
[data-class="A"] .training-header.dammerung_dunkelheit,
[data-class="A1"] .training-header.dammerung_dunkelheit,
[data-class="A2"] .training-header.dammerung_dunkelheit,
[data-class="AM"] .training-header.dammerung_dunkelheit {
border-left-color: #EAB308 !important; // Gelb - Dämmerung/Dunkelheit 
}
*/

// SCHRITT 3: Rendering-Logik erweitern
// Erweitern Sie die renderACategoryHeader Funktion (falls nicht vorhanden, erstellen):

/*
function renderACategoryHeader(studentId, category, key, percentage, treatedItems, totalItems) {
  if (key === 'grundstufe' || key === 'aufbaustufe' || key === 'leistungsstufe' || key === 'grundfahraufgaben' || key === 'reifestufe' || key === 'checkliste') {
    return renderCategoryHeaderWithCircles(studentId, category, key, percentage, treatedItems, totalItems);
  } else if (key === 'uberlandfahrten') {
    return renderSpecialFahrtenHeader(studentId, category, key, percentage, treatedItems, totalItems, 5);
  } else if (key === 'autobahn') {
    return renderSpecialFahrtenHeader(studentId, category, key, percentage, treatedItems, totalItems, 4);
  } else if (key === 'dammerung_dunkelheit') {
    return renderSpecialFahrtenHeader(studentId, category, key, percentage, treatedItems, totalItems, 3);
  } else {
    return renderStandardHeader(category, percentage, treatedItems, totalItems);
  }
}
*/

// SCHRITT 4: Router erweitern
// In der renderCategoryHeader Funktion, fügen Sie die A-Klassen zum switch hinzu:

/*
case 'A':
case 'A1': 
case 'A2':
case 'AM':
  return renderACategoryHeader(studentId, category, key, percentage, treatedItems, totalItems);
*/

// SCHRITT 5: Gesamtzählung erweitern  
// Erweitern Sie beide allCategories Arrays um 'reifestufe' und 'checkliste':

/*
const allCategories = ['grundstufe', 'aufbaustufe', 'leistungsstufe', 'grundfahraufgaben', 'wichtige_fahraufgaben', 'reifestufe', 'uberlandfahrten', 'autobahn', 'dammerung_dunkelheit', 'checkliste'];
*/

// SCHRITT 6: PS-Kreise Logik erweitern
// In der toggleBlueCircle Funktion, fügen Sie A-Klassen hinzu (falls nicht vorhanden):

/*
if (currentClass === 'A' || currentClass === 'A1' || currentClass === 'A2' || currentClass === 'AM') {
  // A-Klassen verwenden Standard PS-Zahlen: 5, 4, 3
  if (categoryKey === 'uberlandfahrten') circleCount = 5;
  else if (categoryKey === 'autobahn') circleCount = 4;  
  else if (categoryKey === 'dammerung_dunkelheit') circleCount = 3;
}
*/

// ============================================================================
// DIESE DATEI ENTHÄLT ALLE NOTWENDIGEN ÄNDERUNGEN FÜR DIE A-KLASSEN
// ============================================================================