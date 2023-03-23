let nombrePj = prompt('Elige un nombre para tu personaje');

alert(`Bienvenido a Valhell, ${nombrePj}.`);
alert(
  `Tu personaje irá viajando a través de diferentes pueblos los cuales tu mismo podrás elegir.`
);

let destino;

// Cambio la función mostrarMensaje por la función alert, para ahorrar líneas de código
// function mostrarMensaje(mensaje) {
//   alert(mensaje);
// }

// Cambio el while por un do-while para que la opción de elegir un destino se muestre al menos una vez
do {
  destino = parseInt(
    prompt(
      'Elige el pueblo al que te gustaría ir.\n1-Kerseyrr\n2-Norora\n3-Lonlond\n4-Buland'
    )
  );
  if (destino >= 1 && destino <= 4) {
    break;
  }
  alert('Destino no válido');
} while (true);

// Cambio el switch por un array de strings para ahorrar líneas de código
const destinos = ['Kerseyrr', 'Norora', 'Lonlond', 'Buland'];

alert(
  `Recoges lo necesario, tomas a tu fiel caballo y emprendes un largo viaje hacia ${
    destinos[destino - 1]
  }.`
);
alert(`Bienvenido al pueblo de ${destinos[destino - 1]}.`);

let ayuda = parseInt(
  prompt(
    'Encuentras afuera de la ciudad a un anciano en busca de ayuda.\n1-Decides acercarte al anciano.\n2-Lo ignoras y sigues caminando'
  )
);

if (ayuda == 1) {
  alert(
    `El anciano te mira y te cuenta que su hija ha sido secuestrada por los bandidos y necesita tu ayuda.`
  );
  let siAyuda = parseInt(
    prompt(
      '1-Aceptas ayudar al anciano.\n2-No sigues escuchando y sigues tu camino.'
    )
  );
  if (siAyuda == 1) {
    alert(
      `Tomas tu hacha, el caballo y te adentras en el bosque en busca de respuestas.`
    );
  } else if (siAyuda == 2) {
    alert('Sigues caminando rumbo a la ciudad.');
  }
} else if (ayuda == 2) {
  alert('Sigues caminando rumbo a la ciudad.');
}
