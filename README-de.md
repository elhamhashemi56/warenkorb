# Einkaufswagen

## Anweisungen für die Teilnehmer:

- Der Nutzer soll eine Liste von Produkten sehen, mit Artikelbeschreibung, Preis und vorhandener Anzahl (Inventar).
- Der Nutzer soll Produkte zum Einkaufswagen tun können, bis die vorhandene Anzahl ausverkauft ist.
- Der Nutzer soll den Einkaufswagen immer sehen.
- Der Nutzer soll einzelne oder alle Produkte aus dem Einkaufswagen entfernen können. Die kehren dann in das Inventar zurück.
- Die Anzahl von Produkten im Einkaufswagen soll immer aktualisiert werden, wenn welche dazu kommen oder entfernt werden.
- Wenn ein Nutzer "zur Kasse geht", sollen die Produkte aus dem Einkaufswagen entfernt werden. Das Inventar (List von Produkten die übrig sind) soll entsprechend kleiner werden.

### In Komponenten

- Benutze verschiedene React-Komponenten z.B. für Produktliste, Produkt, Einkaufswagen, ProduktImWagen (oder ähnliche Namen)
- Benutze `npx create-react-app
- Benutze Redux, um die Daten zentral aufzubewahren.


### Daten

Deine Produktliste könnte z.B. so aussehen:

```JSON
[
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]
```

Beispiel-Bilder:

![MockUp1](MockUp1.png)
![MockUp2](MockUp2.png)


**Bonus**

- Mach deine eigene Liste von Produkten
- Füge mehr Produkte hinzu
- Erweitere deine Produkte mit Bildern

### Regeln

- Individuelle Übung.
- Deadline: 2 Tage
- Verwende **Git korrekt**
- Kommentiere deinen Code sinnvoll.
