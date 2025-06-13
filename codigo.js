var indice = 1;
mostrar(indice);

function avanzar(n) {
    mostrar(indice+=n);
}

function mostrar(n) {
    var i;
    var normales = document.getElementsByClassName("imagenes");
    var minis = document.getElementsByClassName("minis");
    
   limite = normales.length; 
   indice = n;

   if (n > limite) {
        indice = 1;
    }

    if (n < 1) {
        indice = normales.length;
    }

    for (i=0; i<normales.length; i++) {
        normales[i].style.display = "none";
    }

    for (i=0; i<minis.length; i++) {
        minis[i].className = minis[i].className.replace(" sin-transparencia", "");
    }

    normales[indice-1].style.display = "block";
    minis[indice-1].className += " sin-transparencia";
}
