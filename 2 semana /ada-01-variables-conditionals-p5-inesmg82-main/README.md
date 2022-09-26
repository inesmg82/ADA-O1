# Variables i condicionals - P5.js

En aquesta activitat practicaràs variables i conditionals per a dibuixar en un element Canvas d'HTML amb P5.js.

## Objectius

- Treballar amb variables.
- Fer servir les següents paraules clau: if, else, else if.
- Fer servir condicionals imbricats (nested conditionals).
- Fer servir els operadors: (&&) (||) (!).

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

Crea un sketch amb P5. El color de fons ha de ser blau si el ratolí està a la meitat esquerra de la pantalla, i vermell si està a la meitat dreta.

### Exercici 2

Partint de l'sketch anterior, comprova també la posició vertical del ratolí, de manera que el canvas quedi dividit en 4 quadrants. Depèn de on posis el ratolí, el color de fons ha de ser blau, vermell, verd o groc.

### Exercici 3

Crea un nou sketch amb P5 on hi surti un cercle, centrat a la pantalla, que es vagi fent gran.
Per fer-ho, hauràs d'anar augmentant progressivament el radi del cercle a mida que el temps passa. Utilitza almenys una variable per guardar i actualitzar el valor del tamany del cercle en cada iteració

### Exercici 4

Ara fes que la velocitat de creixement del cercle sigui major o menor en funció de la posició horitzontal del ratolí a la pantalla. Quant més a la dreta posem el ratolí, més ràpid ha d'anar.

Utilitza una nova variable per guardar aquesta nova dada, que fa referència a la velocitat. Modul·la aquesta variable per tal que el creixement no sigui massa ràpid ni massa lent.

### Exercici 5

Ara fes que, un cop el cercle arribi als límits de la pantalla, enlloc de continuar creixent, comenci a disminuir. Com pots saber que el cercle està tocant els límits de la pantalla? Potser necessitaràs una variable nova per saber si el cercle està en fase creixent o decreixent.

### Exercici 6

Més complicat encara... ara, fes que el cercle es mogui segons el ratolí per la pantalla. Això si, el cercle mai pot "sortir" de la pantalla, per tant hauràs de recalcular el radi límit d'aquest, en cada moment, en funció de la posició del ratolí

Utilitza tantes variables com creguis necessàries. Dóna noms coherents a les teves variables per entendre bé el que estàs fent!

## Recursos

- [p5.js](https://p5js.org/es/)
- [Referencia p5.js](https://p5js.org/es/reference/)
- [https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript](The `&&` and `||` Operators in JavaScript)

## Notes

_Aquest és un projecte creat a [CodeOp](http://CodeOp.tech), al bootcamp de Front End Development a Barcelona._
