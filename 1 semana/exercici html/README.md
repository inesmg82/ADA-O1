# Introducció a HTML

En aquesta activitat practicaràs la sintaxi HTML i els seus elements bàsics.

## Objectius

- Fer servir la sintaxi HTML.
- Obrir i tancar etiquetes correctament, utilitzar atributs correctament, utilitzar la jerarquia dels elements correctament.
- Fer servir elements de formulari
- Navegar pels fitxers fent servir la _command line_ (línia de comandes).
- Escriure missatges de `commit` correctes.

## Exercici 1

Escriu una breu introducció de tu mateixa per a la resta de la classe. Utilitza la _command line_ per crear l'arxiu!

### 1. Crea la teva pàgina

- Crea un nou fitxer fent servir la _command line_ - desa'l amb el nom de `profile.html`. Algunes pistes per navegar amb la _command line_:
  - `cd <nomDeCarpeta>` accedir a una carpeta
  - `cd ..` puja al nivell superior de l'actual
  - `ls` mostra una llista de tots els elements d'una carpeta
  - `touch <nomDeFitxer>` crea un nou fitxer
  - `mkdir <nomdeCarpeta>` crea una nova carpeta

### 2. Afegeix informació sobre tu

- Pots replicar i ampliar la pàgina que vas fer en Markdown, però aquesta vegada en HTML. Si ho prefereixes, crea una pàgina de tribut d'algú a qui admiris: una persona, figura pública, grup de música o altres.
- Aquí tens una [llista completa dels elements HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
- A la teva pàgina, inclou la següent informació:
  - Per què t'has apuntat a aquest curs?
  - Què és el que més t'agrada de Barcelona?
  - Quina és la teva experiència prèvia amb codi?
  - Alguna curiositat sobre tu
- Assegura't d'incloure el següent:
  - Una imatge
  - Diferents tipus de capçaleres (headers)
  - Una llista de punts (bullet list) i una llista ordenada.
  - Un enllaç
  - Paràgrafs
  - Elements de text (bold, itàlica, etc)
  - Dóna estils a alguna elements utilitzant l'atribut `style`.
  - Utilitza metadades per definir l'autor, la descripció i alguna altra informació rellevant sobre la pàgina.

## Exercici 2

Per a aquesta activitat has de crear un formulari on l'usuari pugui introduïr respostes a una enquesta.

Els formularis són eines molt útils per a recollir informació dels usuaris online.

### 1. Crea el teu formulari

- Crea un nou fitxer fent servir la _command line_ - desa'l amb el nom de `form.html`.

Has de fer-hi lloc per a què l'usuari pugui entrar algunes dades personals (per exemple, nom, email, edat...), i també has d'afegir preguntes que l'usuari pugui respondre. Pots fer el formulari sobre qualsevol tema que t'inspiri.

Hauràs d'utilitzar, com a mínim, aquests elements (més d'una vegada si vols):

- input de text
- selector "dropdown"
- input de número
- "radio" buttons (selecció individual)
- checkbox (selecció múltiple)
- area de text
- etiquetes (`label`)
- algun altre element (date, range...)
- botó d'enviament

### 2. Crea una pàgina de "gràcies"

- Crea un nou fitxer fent servir la _command line_ - desa'l amb el nom de `thankyou.html`.

- Afegeix el codi que vulguis per tal de donar les gràcies a l'usuari per haver enviat el formulari.

- [Fes que quan el formulari s'envïi](https://www.w3schools.com/tags/att_form_action.asp) (fent click al botó d'enviar) es mostri la pàgina de "gràcies".

## **Commit early, commit often** (fes `commit` sovint)

- Després de cada canvi important, fes `commit` a Github. Aquí trobaràs una [cheat sheet](https://www.git-tower.com/blog/git-cheat-sheet) amb les accions més comunes i pistes per escriure missatges de `commit` correctes.
  - `git status`: comprova els canvis (opcional)
  - `git add .`: afegeix tots els fitxers
  - `git commit -m "MISSATGE"`: afegeix el missatge de `commit`
  - `git push`: envia el `commit`

## Recursos

- [Git for Newbies](http://anitacheng.com/git-for-non-developers)
- [Git Cheat Sheet](https://www.git-tower.com/blog/git-cheat-sheet)
- [HTML5 periodical table](https://websitesetup.org/html5-periodical-table/)
- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML elements](https://www.w3schools.com/html/html_elements.asp)
- [HTML forms](https://www.w3schools.com/html/html_forms.asp)

## Notes

_Aquest és un projecte creat a [CodeOp](http://CodeOp.tech), al bootcamp de Front End Development a Barcelona._
