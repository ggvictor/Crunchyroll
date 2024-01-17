// mudando o catalogo
const catalogo = document.getElementById("catalago_div");
const dbz = document.getElementById("dbz");
const dbz_ = document.getElementById("dbz_div");
const solo = document.getElementById("solo");
const solo_ = document.getElementById("solo_div");
const baccano = document.getElementById("baccano");
const baccano_ = document.getElementById("baccano_div");
const taxi = document.getElementById("taxi");
const taxi_ = document.getElementById("taxi_div");
const great = document.getElementById("great");
const great_ = document.getElementById("great_div");
if(window.innerWidth>= 760){
    dbz.style.display="none";
    dbz_.innerHTML="<img src='imagens/imagem_tablet.png'>"

    solo.style.display="none";
    solo_.innerHTML="<img src='imagens/imagem_tablet2.png'>"

    baccano.style.display="none";
    baccano_.innerHTML="<img src='imagens/imagem_tablet3.png'>"

    taxi.style.display="none";
    taxi_.innerHTML="<img src='imagens/imagem_tablet4.png'>"

    great.style.display="none";
    great_.innerHTML="<img src='imagens/imagem_tablet5.png'>"
    
}
if(window.innerWidth>= 1260){
    dbz.style.display="none";
    dbz_.innerHTML="<img src='imagens/imagem_desktop.png'>"

    solo.style.display="none";
    solo_.innerHTML="<img src='imagens/imagem_desktop2.png'>"

    baccano.style.display="none";
    baccano_.innerHTML="<img src='imagens/imagem_desktop3.png'>"

    taxi.style.display="none";
    taxi_.innerHTML="<img src='imagens/imagem_desktop4.png'>"

    great.style.display="none";
    great_.innerHTML="<img src='imagens/imagem_desktop5.png'>"
    
}