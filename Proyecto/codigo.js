let nombrePj = prompt("Elige un nombre para tu personaje");

mostrarMensaje("Bienvenido a Valhell, " + nombrePj + ".");

mostrarMensaje("Tu personaje irá viajando a través de diferentes pueblos los cuales tu mismo podrás elegir.");

let destino;

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

while (true) {
    destino = parseInt(prompt("Elige el pueblo al que te gustaría ir.\n1-Kerseyrr\n2-Norora\n3-Lonlond\n4-Buland"));
    if (destino >= 1 && destino <=4) {
        break;
    }
    mostrarMensaje("Destino no valido");
    }

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

let ayuda = parseInt(prompt("Encuentras afuera de la ciudad a un anciano en busca de ayuda.\n1-Decides acercate al anciano.\n2-Lo ignoras y sigues caminando"));

if (ayuda == 1) {
    mostrarMensaje("El anciano te mira y te cuenta que su hija a sido secuestrada por los bandidos y necesita tu ayuda.");
    let siAyuda = parseInt(prompt("1-Aceptas ayudar al anciano.\n2-No sigues escuchando y sigues tu camino."));
    if (siAyuda == 1) {
        mostrarMensaje("Tomas tu hacha, el caballo y te adentras en el bosque en busca de respuestas");
    } else if (siAyuda == 2) {
        mostrarMensaje("Sigues caminando rumbo a la ciudad");
    }
} else if (ayuda == 2) {
    mostrarMensaje("Sigues caminando rumbo a la ciudad")
}
