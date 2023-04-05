let personaje = {
    nombre: "",
    vida: 10,
    inventario: []
};

personaje.nombre = prompt("Elige un nombre para tu personaje");

mostrarMensaje("Bienvenido a Valhell, " + personaje.nombre + ".");

mostrarMensaje("Tu personaje irá viajando a través de diferentes pueblos los cuales tu mismo podrás elegir.");

let destino;

let inventario = [];

function mostrarMensaje(mensaje) {
alert(mensaje);
}

do {
    destino = parseInt(prompt("Elige el pueblo al que te gustaría ir.\n1-Kerseyrr\n2-Norora\n3-Lonlond\n4-Buland"));
    if (destino < 1 || destino > 4) {
    mostrarMensaje("Destino no válido");
    }
} while (destino < 1 || destino > 4);

switch (destino) {
case 1:
    mostrarMensaje("Recoges lo necesario, tomas a tu fiel caballo y emprendes un largo viaje hacia Kerseyrr...");
    mostrarMensaje("Bienvenido al pueblo de Kerseyrr...");
    break;
case 2:
    mostrarMensaje("Recoges lo necesario, tomas a tu fiel caballo y emprendes un largo viaje hacia Norora...");
    mostrarMensaje("Bienvenido al pueblo de Norora...");
    break;
case 3:
    mostrarMensaje("Recoges lo necesario, tomas a tu fiel caballo y emprendes un largo viaje hacia Lonlond...");
    mostrarMensaje("Bienvenido al pueblo de Lonlond...");
    break;
case 4:
    mostrarMensaje("Recoges lo necesario, tomas a tu fiel caballo y emprendes un largo viaje hacia Buland...");
    mostrarMensaje("Bienvenido al pueblo de Buland...");
    break;
default:
    mostrarMensaje("Destino inválido");
    break;
}

let ayuda = parseInt(prompt("Encuentras afuera de la ciudad a un anciano en busca de ayuda.\n1-Decides acercarte al anciano.\n2-Lo ignoras y sigues caminando"));

if (ayuda == 1) {
mostrarMensaje("El anciano te mira y te cuenta que su hija ha sido secuestrada por los bandidos y necesita tu ayuda.");
let siAyuda = parseInt(prompt("1-Aceptas ayudar al anciano.\n2-No sigues escuchando y sigues tu camino."));
if (siAyuda == 1) {
    mostrarMensaje("Tomas el caballo y te adentras en el bosque en busca de respuestas");
    mostrarMensaje("El anciano te muestra un camino hacia el escondite de los bandidos y te entrega una llave para entrar.");
    inventario.push("Llave");
    inventario.splice(inventario.indexOf("Llave"), 1);
    mostrarMensaje("Dentro del escondite encuentras la Espada de Bronce.");
    inventario.push("Espada de Bronce");
    
    let vidaJugador = 10;
    let vidaBandidos = 8;
    
    mostrarMensaje("Te encuentras cara a cara con los bandidos. ¡Es hora de luchar!");
    
    while (vidaJugador > 0 && vidaBandidos > 0) {
    if (Math.random() > 0.5) {
        mostrarMensaje("Has atacado exitosamente a los bandidos. Pierden 2 puntos de vida.");
        vidaBandidos -= 2;
    } else {
        mostrarMensaje("Los bandidos han atacado y te han herido. Pierdes 3 puntos de vida.");
        vidaJugador -= 3;
    }
    }
    
    if (vidaJugador <= 0) {
    mostrarMensaje("Has perdido la batalla contra los bandidos. ¡Mejor suerte la próxima vez!");
    } else {
    mostrarMensaje("Has ganado la batalla contra los bandidos. ¡Felicidades!");
    }
    
} else if (siAyuda == 2) {
    mostrarMensaje("Sigues caminando rumbo a la ciudad");
}
} else if (ayuda == 2) {
mostrarMensaje("Sigues caminando rumbo a la ciudad");
}

mostrarMensaje("Tu inventario actual es: " + inventario);
