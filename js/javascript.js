function subir(){
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        var botonSubir=document.getElementById('botonArriba');

        if(scroll>60){
            botonArriba.style.right = 20 + "px";
        }else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

subir();