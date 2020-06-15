var capitulos= [{
    titulo: 'Entrenamiento',
    lugar: 'Castillo del Rey Milos.',
    fondo: 'url("assets/img/fondos/castillo_rey_milos.jpg")',
    oponente: -1,
    nivel_jugador: 1,
    condiciones_victoria: {
        porc_salud_oponente: 30,
        turnos: 20
    },
    mensaje_final: 'Muy Bien!! El entrenamiento ha terminado.' + 
    ' Ya puedes comenzar tu aventura.<br>Ten cuidado con los desafios que te esperan!!',
    url_actual: 'tutorial.html',
    url_siguiente: 'cap_1.html',
    en_desarrollo: false
}, {
    titulo: 'Capitulo 1',
    lugar: 'Ciudad a las afueras del Castillo.',
    fondo: 'url("assets/img/fondos/ciudad_castillo_rey_milos.jpg")',
    oponente: 2,
    nivel_jugador: 2,
    condiciones_victoria: {
        porc_salud_oponente: 25,
        turnos: 24
    },
    mensaje_final: '- Mirko: Ya es suficiente!! Eres mas fuerte de lo ' +
    'que pensaba!<br>Nadie tiene que morir esta noche!<br>' +
    '- Heroe: ...Esta bien! Vete de la ciudad ahora mismo y no ataques a ' +
    'ningun inocente!!<br>' +
    '- Mirko: Asi será... hasta la proxima!<br>' +
    '- Heroe: ...',
    url_actual: 'cap_1.html',
    url_siguiente: 'cap_2.html',
    en_desarrollo: false
}, {
    titulo: 'Capitulo 2',
    lugar: 'Dunas desierto del Oeste.',
    fondo: 'url("assets/img/fondos/dunas_desierto_oeste.jpg")',
    oponente: 3,
    nivel_jugador: 3,
    condiciones_victoria: {
        porc_salud_oponente: 20,
        turnos: 28
    },
    mensaje_final: '- Zo-thar: Creo que ya es suficiente! Has demostrado que ' +
    'tienes agallas. Puedes pasar si asi lo deseas.<br>' +
    '- Heroe: ... Bien, debo seguir mi viaje.<br>' +
    '- Zo-thar: Pero te advierto, más adelante acechan muchos peligros... ' +
    'Prepárate!<br>' +
    '- Heroe: Lo se! y gracias por la advertencia...',
    url_actual: 'cap_2.html',
    url_siguiente: 'cap_3.html',
    en_desarrollo: false
}, {
    titulo: 'Capitulo 3',
    lugar: 'Bosque del Norte.',
    fondo: 'url("assets/img/fondos/bosque_norte_exterior.jpg")',
    oponente: 4,
    nivel_jugador: 4,
    condiciones_victoria: {
        porc_salud_oponente: 20,
        turnos: 28
    },
    mensaje_final: '- Lumara: Muy bien, humano! Veo que tu vountad es fuerte!.<br>' +
    '- Heroe: ... Debo llegar al Gran Arbol. Es urgente!.<br>' +
    '- Lumara: Lo se! El Gran Arbol ha sido corrompido por fuerzas ' +
    'del mal!! Nosotros intentamos llegar para investigar, pero los ' +
    'demonios no permiten el paso! Hemos encontrado una sola ruta segura ' + 
    'para llegar al arbol antiguo, pero todavia no hemos podido enviar ' +
    'a alguien a explorar. Te indicare a ti la ruta para que ' +
    'llegues primero y despues enviaremos a nuestros guerreros, ' +
    'en cuanto podamos librarnos un poco de los demonios.<br>' +
    '- Heroe: Gracias!! Llegare lo mas rapido que pueda para ayudar al ' +
    'Gran Arbol! No tengas dudas!',
    url_actual: 'cap_3.html',
    url_siguiente: 'cap_4.html',
    en_desarrollo: false
}, {
    titulo: 'Capitulo 4',
    lugar: 'Bosque del Norte (Interior).',
    fondo: 'url("assets/img/fondos/bosque_norte_interior.jpg")',
    oponente: 5,
    nivel_jugador: 5,
    condiciones_victoria: {
        porc_salud_oponente: 10,
        turnos: 0
    },
    mensaje_final: '- Schala: JaJa! Crees que me has derrotado, humano?.<br>' +
    '- Heroe: ...<br>' +
    '- Schala: Solo me has debilitado! Ahora debo volver a las tierras oscuras '+
    'y recuperarme.<br>' +
    '- Heroe: No te iras a ningun lado!! Voy a acabar contigo aqui y ahora!!<br>' +
    '- Schala: Jaja! Me temo que hoy no es el dia! Nos voveremos a ver y ese dia la ' +
    'batalla sera hasta el fnal!!<br>' +
    '- Heroe: Ya veremos!',
    url_actual: 'cap_4.html',
    url_siguiente: 'cap_5.html',
    en_desarrollo: false
}, {
    titulo: 'Capitulo 5',
    lugar: 'Bosque del Norte (Interior).',
    fondo: 'url("assets/img/fondos/bosque_norte_interior.jpg")',
    oponente: 6,
    nivel_jugador: 6,
    condiciones_victoria: {
        porc_salud_oponente: 10,
        turnos: 0
    },
    mensaje_final: '- Luna: Maldicion! No puedo perder ante un humano!.<br>' +
    '- Heroe: ...<br>' +
    '- Luna: Crees que ya has ganado? jaja! Tu proximo rival ' + 
    'sera nuestro lider.<br>' +
    '- Heroe: Estoy deseando enfrentarlo de una buena vez y terminar con esto!<br>' +
    '- Luna: Jaja! Te sobra confianza! Lord Raven se divertira mucho contigo!!<br>' +
    '- Heroe: ...',
    url_actual: 'cap_5.html',
    url_siguiente: 'cap_6.html',
    en_desarrollo: false
}, {
    titulo: 'Capitulo 6',
    lugar: 'Gran Arbol (Old Sage).',
    fondo: 'url("assets/img/fondos/old_sage.jpg")',
    oponente: 7,
    nivel_jugador: 7,
    condiciones_victoria: {
        porc_salud_oponente: 5,
        turnos: 0
    },
    mensaje_final: '- Raven: Imposible! Como alguien tan debil como tu ...<br>' +
    '- Heroe: Debil? No solo peleo por mi vida, sino por todas las personas ' +
    'que confian en mi!<br>' +
    '- Raven: Si, te entiendo... Recuerdo que hace mucho, ' +
    'cuando era humano...<br>' +
    '- Heroe: Fuiste humano? Porque aceptaste convertirte en demonio!<br>' +
    '- Raven: Umm... Una larga historia que ya ni vale la pena recordar. ' +
    'Hoy venciste, pero esto no acaba aqui... Nos recuperaremos ' + 
    'y volveremos a atacar! No se confien demasiado, humanos!<br>' +
    '- Heroe: ...',
    url_actual: 'cap_6.html',
    url_siguiente: 'final.html',
    en_desarrollo: false
}];