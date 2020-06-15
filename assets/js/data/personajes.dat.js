/*
Stats personajes.
----------------
Ataque max: 100 puntos.
Defensa maxima: 60 puntos.
Salud Maxima: 500 puntos.
Energia maxima: 250 puntos.
*/

var personajes = [{
    nombre: 'Kiara Redstone',
    clase: 'Maga',
    especie: 'Humano',
    sexo: 'Mujer',
    imagen: 'assets/img/personajes/kiara.jpg',
    historia: 'Maga superior de la orden del Templo Celestial. Su belleza ' +
    'solo es superada por su inteligencia y sabiduria. Hermana de Lowell, ' +
    'no puede evitar preocuparse mucho cuando su hermano parte en alguna mision.' +
    'Por ello siempre trata de acompañarlo, mientas sus maestros se lo permiten.',
    acciones: {
        ataque: {
            danio_porc: 88,
            tipo: 'magia'
        },
        defensa: {
            danio_porc: 88,
            tipo:'magia'
        }
    },
    salud_porc: 88,
    energia: {
        valor_porc: 88,
        tipo: 'magia',
        color: 'w3-blue'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Invocacion Dragon celestial.',
        imagen: 'assets/img/especiales/dragon_blanco.jpg',
        ratio_danio: 2.2,
        ataques_activar: 4
    }
}, {
    nombre: 'Lowell Redstone',
    clase: 'Caballero Paladin',
    especie: 'Humano',
    sexo: 'Hombre',
    imagen: 'assets/img/personajes/lowell.jpg',
    historia: 'Capitan de la Orden de Paladines de la Luz. Fuerte, ' +
    'valiente y con un gran sentido de justicia. Hermano de Kiara, le gustaria ' +
    'tomar las misiones mas riesgosas, pero lo evita sabiendo la ' +
    'preocupacion de su hermana.',
    acciones: {
        ataque:{
            danio_porc: 90,
            tipo: 'fisico c/magia'
        },
        defensa: {
            danio_porc: 90,
            tipo: 'fisica c/magia'
        }
    },
    salud_porc: 90,
    energia: {
        valor_porc: 90,
        tipo: 'fisica c/magia',
        color: 'w3-green'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Poder de Excalibur.',
        imagen: 'assets/img/especiales/excalibur.jpg',
        ratio_danio: 2.0,
        ataques_activar: 4
    }
}, {
    nombre: 'Mirko Stall',
    clase: 'Mercenario',
    especie: 'Humano',
    sexo: 'Hombre',
    imagen: 'assets/img/personajes/mirko.jpg',
    historia: 'Integrante del grupo de mercenarios conocidos como "Dark Moon", ' +
    'ofrece sus servicios como asesino/ladron a quien pueda pagarlos. ' +
    'Gran destreza fisica y con una gran hablidad con cuchillos y ' +
    'espadas pequeñas, lo hacen un oponente de cuidado.',
    acciones: {
        ataque:{
            danio_porc: 80,
            tipo: 'fisico'
        },
        defensa: {
            danio_porc: 80,
            tipo: 'fisico'
        }
    },
    salud_porc: 80,
    energia: {
        valor_porc: 80,
        tipo: 'fisica',
        color: 'w3-yellow'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Ataque super cortante.',
        imagen: 'assets/img/especiales/ataque_cortante.jpg',
        ratio_danio: 1.5,
        ataques_activar: 3
    }
}, {
    nombre: 'Zo-thar',
    clase: 'Guerrero',
    especie: 'Bestia',
    sexo: 'Macho',
    imagen: 'assets/img/personajes/zo-thar.jpg',
    historia: 'Guerrero del Clan Mur del desierto del Oeste. Guardian de las ' +
    'fronteras de su territorio y uno de los futuros lideres de su clan. Posee ' +
    'una gran fuerza fisica y un gran instinto de supervivencia.',
    acciones: {
        ataque:{
            danio_porc: 86,
            tipo: 'fisico'
        },
        defensa: {
            danio_porc: 86,
            tipo: 'fisico'
        }
    },
    salud_porc: 86,
    energia: {
        valor_porc: 86,
        tipo: 'fisica',
        color: 'w3-yellow'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Garras devastadoras.',
        imagen: 'assets/img/especiales/garras_devastadoras.jpg',
        ratio_danio: 1.9,
        ataques_activar: 4
    }
}, {
    nombre: 'Lumara',
    clase: 'Arquera',
    especie: 'Elfo',
    sexo: 'Femenino',
    imagen: 'assets/img/personajes/lumara.jpg',
    historia: 'Arquera de los elfos del bosque. Como el resto de su especie, ' +
    'pueden vivir miles de años, lo que los convierte es ' +
    'seres sabios y poderosos. Capitana del ejercito de su clan, ' +
    'no solo confia en su habilidad con el arco, tambien en su ' +
    'intuicion, que le permite destacarse como la elfa indicada para ' +
    'resolver situaciones peligrosas.',
    acciones: {
        ataque:{
            danio_porc: 84,
            tipo: 'fisico c/magia'
        },
        defensa: {
            danio_porc: 84,
            tipo: 'fisica c/magia'
        }
    },
    salud_porc: 84,
    energia: {
        valor_porc: 84,
        tipo: 'fisica c/magia',
        color: 'w3-green'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Invocacion Gran Lobo Negro.',
        imagen: 'assets/img/especiales/lobo_negro.jpg',
        ratio_danio: 1.8,
        ataques_activar: 3
    }
}, {
    nombre: 'Schala',
    clase: 'Maga',
    especie: 'Demonio',
    sexo: 'Femenino',
    imagen: 'assets/img/personajes/schala.jpg',
    historia: 'Maga de orden superior de los demonios. La seguna al ' +
    'mando de este grupo de demonios que ataco al Gran Arbol. Inteligente ' +
    'y astuta, con su gran poder magico sera una dura rival.',
    acciones: {
        ataque:{
            danio_porc: 96,
            tipo: 'magia'
        },
        defensa: {
            danio_porc: 96,
            tipo: 'magia'
        }
    },
    salud_porc: 96,
    energia: {
        valor_porc: 96,
        tipo: 'magia',
        color: 'w3-blue'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Circulo destructor.',
        imagen: 'assets/img/especiales/circulo_destructor.jpg',
        ratio_danio: 2.0,
        ataques_activar: 4
    }
}, {
    nombre: 'Luna',
    clase: 'Arquera',
    especie: 'Demonio',
    sexo: 'Femenino',
    imagen: 'assets/img/personajes/luna.jpg',
    historia: 'Arquera y capitana del ejercito de demonios. Una de las encargadas ' +
    'del grupo que ataco al Gran Arbol. Astuta y agil, no muestra ' +
    'piedad ante su enemigos en la batalla.',
    acciones: {
        ataque:{
            danio_porc: 92,
            tipo: 'fisico'
        },
        defensa: {
            danio_porc: 92,
            tipo: 'fisico'
        }
    },
    salud_porc: 92,
    energia: {
        valor_porc: 92,
        tipo: 'fisica',
        color: 'w3-yellow'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Flechas cortantes',
        imagen: 'assets/img/especiales/flechas_cortantes.jpg',
        ratio_danio: 1.8,
        ataques_activar: 3
    }
}, {
    nombre: 'Lord Raven',
    clase: 'Guerrero',
    especie: 'Demonio',
    sexo: 'Maculino',
    imagen: 'assets/img/personajes/raven.jpg',
    historia: 'Guerrero espadachin y uno de los señores oscuros de los demonios.' +
    'Lider del grupo que ataco al Gran Arbol y contamino el bosque que lo rodea.' +
    'Temido y respetado a la vez, sueña con algun dia lograr vencer ' +
    'al lord principal y liderar a los demonios, para conquistar los ' +
    'territorios que hace cientos o miles de años les pertenecian.',
    acciones: {
        ataque:{
            danio_porc: 100,
            tipo: 'fisico c/magia'
        },
        defensa: {
            danio_porc: 100,
            tipo: 'fisica c/magia'
        }
    },
    salud_porc: 100,
    energia: {
        valor_porc: 100,
        tipo: 'fisica c/magia',
        color: 'w3-green'
    },
    nivel: 1,
    tecnica_especial: {
        nombre: 'Espada de sangre',
        imagen: 'assets/img/especiales/espada_sangrienta.jpg',
        ratio_danio: 2.1,
        ataques_activar: 4
    }
}];