/**
 * Nombre: ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function nombreResolucion(ancho, alto){
    if(ancho>1280 && alto>720 || ancho<1920 && alto<1080){
        return "HD";
    }else if(ancho>=1920 && alto>=1080 || ancho<2560 && alto<1440){
        return "FHD";
    }else if(ancho>=2560 && alto>=1440 || ancho<3840 && alto<2160){
        return "WQHD";
    }else if(ancho>=3840 && alto>=2160 || ancho<7680 && alto<4320){
        return "4k";
    }else if(ancho===7680 && alto===4320){
        return "8k";
    }else{
        return "Resolucion no reconocida";
    }
}

let nombre = nombreResolucion(8000,76);
console.log(nombre)