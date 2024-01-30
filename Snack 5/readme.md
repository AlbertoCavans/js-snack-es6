# Snack Array Methods - Snack 5

## Obiettivo

Dato un array di oggetti che rappresentano delle auto, chiedete all'utente con quante persone deve viaggiare e trovate la prima auto abbastanza capiente da soddisfare la richiesta

## Procedimento

- Creare l'array con i veicoli
- Creare un prompt dentro parseInt per chiedere all'utente quanti passeggeri ci sono, in modo da trovare un veicolo adatto
- Creare un forEach che scorra i veicoli
  - Dentro al forEach creare un if che faccia scalare postiDisponibiliMassimi verso car.capacity ogni volta che car.capacity è maggiore di postiDisponibiliMassimi
- Creare un if dove
  - Se viene inserito un valore che non è un NaN E sepostiDisponibiliMassimi è >= del lavore inserito dall'utente si prosegue
    - Creare un filtro che tenga all'interno di return le macchine con car.capacity maggiore o uguale del valore inserito dall'utente
    - Creare un forEach con un if al proprio interno che estragga dal nuovo array il primo object dove macchina.capacity > car.capacity
    - Stampare con console log l'object macchina che ha soddisfatto i criteri
  - ALTRIMENTI si attiva un alert che dice "devi inserire un numero oppure ci sono troppi passeggeri"
