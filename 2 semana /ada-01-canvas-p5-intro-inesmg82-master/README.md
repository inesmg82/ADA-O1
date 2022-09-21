# Introducció a Canvas i P5.js

En aquesta activitat practicaràs la sintaxi bàsica de P5.js per dibuixar en un element Canvas d'HTML.

## Objectius

- Practicar la sintaxi bàsica d'un sketch amb P5.js
- Aprendre a dibuixar les formes bàsiques
- Aprendre a canviar els colors de fons i els colors del traç
- Treballar amb la posició del ratolí

## Requisits bàsics

Respondre totes les preguntes al fitxer `challenges.js`.

### 1. Obre el fitxer al teu navegador

- Obrir el fitxer `index.html` al teu navegador amb l'extensió **Live Server** de VS Code.
- Obre la consola JavaScript per veure els resultats del teu codi quan sigui necessari

### 2. Contesta tots els exercicis

- Contesta cadascuna de les preguntes del fitxer `challenges.js`.
- Quan hagis acabat les respostes, comenta-les!
  - **Per comentar una línia, fes servir `//` a l'inici de la línia, o encapsula tota la línia amb `/* codi */`.**

### 3. 'Commit early, commit often' (fes `commit` sovint)

- Després de cada canvi important, fes `commit` a Github. Aquí trobaràs una [cheat sheet](https://www.git-tower.com/blog/git-cheat-sheet) amb els comandaments habituals i pistes per escriure bons missatges de `commit`.
  - `git status`: comprova els canvis (opcional)
  - `git add .`: afegeix tots els fitxers
  - `git commit -m "MISSATGE"`: afegeix el missatge de `commit`
  - `git push`: envia el `commit`

## Exercicis

### Exercici 1

Crea un canvas quadrat, i dibuixa-hi un quadrat més petit al mig de la pantalla. Canvia els color de fons i el color del traç del rectangle. Si no saps com fer-ho, busca-ho a la [referència de P5](https://p5js.org/es/reference/).

### Exercici 2

Re-escriu el programa que acabes de crear perquè sigui un programa dinàmic (video). Hi veus alguna diferència?

### Exercici 3

Ara fes que el quadrat es mogui segons la posició del ratolí. El centre del rectangle ha de coincidir amb la posició del ratolí.

Pots explicar perquè es veu un rastre de quadrats a mida que movem el ratolí per la pantalla?

### Exercici 4

Fes que no quedi cap rastre de quadrats.

### Exercici 5

Se t'acut alguna manera de fer que el rastre de quadrats es vagi difuminant a mida que anem movent el ratolí, deixant una estel·la, i que acabi desapareixent? Fes-ho.

### Exercici 6

Fes que el tamany del quadrat canvïi en funció de la posició horitzontal del ratolí, i que el color del quadrat ho faci en funció de la posició vertical del ratolí.

### Exercici 7

Crea un nou sketch. Fes que el ratolí "deixi rastre": per allà on passi s'hi han de dibuixar elipses.

### Exercici 8

Enlloc de deixar un rastre d'elipses, fes que es dibuixin linies. La linia que dibuixis hauria d'anar des de la posició anterior del ratolí fins la posició actual.

### Exercici 9

La diferència entre la posició anterior i la posició actual ens dóna una idea de la velocitat a la que s'està movent el ratolí. Utilitza aquesta informació (mitjançant qualsevol càlcul que necessitis) per tal de fer que el traç del dibuix sigui més gruixut com més ràpida sigui la velocitat a la que movem el ratolí.

Si no tens clar com fer-ho, mira de dibuixar en un paper la posició actual i prèvia del ratolí, i prova d'imaginar com ho pots fer per calcular la velocitat.

### Exercici 10 (opcional)

Escriu un programa en P5 que dibuixi la següent bandera.  
Per crear formes i polígons pots utilitzar les instruccions `beginShape()`, `endShape()` i `vertex()`. Busca-les a la referència de P5.

![Bandera 2](/img/img1.png)

### Exercici 11 (opcional)

Escriu un programa en Processing que dibuixi la següent bandera.

![Bandera 2](/img/img2.png)

## Recursos

- [p5.js](https://p5js.org/es/)
- [Referencia p5.js](https://p5js.org/es/reference/)

## Notes

_Aquest és un projecte creat a [CodeOp](http://CodeOp.tech), al bootcamp de Front End Development a Barcelona._
