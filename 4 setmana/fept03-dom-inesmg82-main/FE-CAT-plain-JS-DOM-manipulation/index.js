function click1() {

    let valorUsuari = document.getElementById(
        "url").value;

    let valorUsuari2 = document.getElementById(
        "projecte").value;



    document.getElementById("imprimir")
        .innerHTML += `
       <div id= "card">
        <img alt="imatge mal carregada" src="${valorUsuari}"
        width=500" height="500"> 
        <p>${valorUsuari2}</p>
        </div>
        `;
}