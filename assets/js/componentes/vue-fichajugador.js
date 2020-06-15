Vue.component('vue-fichajugador', {
    template: '<div>' +
    '<div class="w3-border w3-padding-small w3-black">{{ jugador.nombre }}' +
    '</div>' +
    '<div class="w3-border w3-padding-small w3-black">Nivel: ' +
    '{{ jugador.nivel }}</div>' +
    '<div class="w3-display-container" ' +
    'v-show="ver_imagen">' +
    '   <img class="w3-image" ' +
    '   v-bind:src="jugador.imagen" ' +
    '   v-bind:alt="jugador.nombre" ' +
    '   v-bind:class="esElegido(index) ? \'\' : efecto_noelegido">' +
    '   <div class="w3-display-topleft w3-display-hover ' +
    '   w3-padding-small w3-black w3-opacity-min">{{ jugador.historia }}' +
    '   </div>' +
    '</div>' +
    '<div v-show="!ver_imagen">' +
    '   <div class="w3-row w3-border w3-black">' +
    '       <div class="w3-half">' +
    '           <div class="w3-light-gray w3-margin-top">Especie</div>' +
    '           <div class="w3-padding-small">{{ jugador.especie }}</div>' +
    '           <div class="w3-light-gray">Sexo</div>' +
    '           <div class="w3-padding-small">{{ jugador.sexo }}</div>' +
    '           <div class="w3-light-gray">Clase</div>' +
    '           <div class="w3-padding-small">{{ jugador.clase }}</div>' +
    '       </div>' +
    '       <div class="w3-half w3-black">' +
    '           <div class="w3-display-container">' +
    '               <div class="w3-display-topright w3-container">' +
    '                   <a class="w3-button" ' +
    '                   v-on:click="mostrarImagenFull(\'jugador\')">' +
    '                       <span class="fa fa-search-plus"></span>' +
    '                   </a>' +
    '               </div>' +
    '               <img class="w3-image" ' +
    '               v-bind:src="jugador.imagen" ' +
    '               v-bind:alt="jugador.nombre" ' +
    '               v-bind:class="esElegido(index) ? \'\' : efecto_noelegido">' +
    '           </div>' +
    '       </div>' +
    '   </div>' +
    '   <div class="w3-border w3-black">' +
    '       <div class="w3-row">' +
    '           <div class="w3-half">' +
    '               <a class="w3-button w3-small w3-block" ' +
    '               v-bind:class="{ \'w3-brown\': ver_atributos, ' +
    '               \'w3-white\': !ver_atributos }" ' +
    '               v-on:click.prevent="ver_atributos = true">Atributos</a>' +
    '           </div>' +
    '           <div class="w3-half">' +
    '               <a class="w3-button w3-small w3-block" ' +
    '               v-bind:class="{ \'w3-brown\': !ver_atributos, ' +
    '               \'w3-white\': ver_atributos }" ' +
    '               v-on:click.prevent="ver_atributos = false">' +
    '                   Tec. Especial' +
    '               </a>' +
    '           </div>' +
    '       </div>' +
    '   </div>' +
    '   <ul class="w3-ul w3-border w3-center" ' +
    '   v-show="ver_atributos">' +
    '       <li class="w3-black">' +
    '           Ataque: {{ jugador.acciones.ataque.danio }}<br>' +
    '           ({{ jugador.acciones.ataque.tipo }})' +
    '       </li>' +
    '       <li class="w3-light-gray">' +
    '           Defensa: {{ jugador.acciones.defensa.danio }}<br>' +
    '           ({{ jugador.acciones.defensa.tipo }})' +
    '       </li>' +
    '       <li class="w3-black">' +
    '           Salud: {{ jugador.salud }}' +
    '       </li>' +
    '       <li class="w3-light-gray">' +
    '           Energia: {{ jugador.energia.valor }}<br>' +
    '           ({{ jugador.energia.tipo }})' +
    '       </li>' +
    '   </ul>' +
    '   <div class="w3-border w3-black w3-padding-small" ' +
    '   v-show="!ver_atributos">' +
    '       Tecnica Especial:' +
    '       <div class="w3-display-container">' +
    '           <div class="w3-display-topright w3-container">' +
    '               <a class="w3-button" ' +
    '               v-on:click="mostrarImagenFull(\'especial\')">' +
    '                   <span class="fa fa-search-plus"></span>' +
    '               </a>' +
    '           </div>' +
    '           <img class="w3-image" ' +
    '           v-bind:src="jugador.tecnica_especial.imagen" ' +
    '           v-bind:alt="jugador.tecnica_especial.nombre">' +
    '       </div>' +
    '       {{ jugador.tecnica_especial.nombre }}<br>' +
    '       Daño: {{ jugador.tecnica_especial.ratio_danio }}x ' +
    '       ataque del personaje.<br>' +
    '       Se puede usar despues de recibir ' +
    '       {{ jugador.tecnica_especial.ataques_activar }} ataques.' +
    '   </div>' +
    '</div>' +
    '<div class="w3-modal" ' +
    'v-bind:style="{ display: mostrar_img_full }">' +
    '   <div class="w3-modal-content w3-left-align w3-animate-zoom">' +
    '       <header class="w3-container w3-blue-gray">' +
    '           <span v-on:click="mostrar_img_full = \'none\'" ' +
    '           class="w3-button w3-display-topright">' +
    '               <span class="fa fa-window-close"></span>' +
    '           </span>' +
    '           <h4>' +
    '               <span class="fa fa-info"></span> Imagen Full' +
    '           </h4>' +
    '       </header>' +
    '       <div class="w3-container w3-padding-16 w3-text-dark-gray w3-center">' +
    '           <img class="w3-image" ' +
    '           v-bind:src="imagen_full" ' +
    '           v-bind:alt="alt_full">' +
    '       </div>' +
    '   </div>' +
    '</div></div>',
    props: {
        jugador: Object,
        index: String,
        elegido: Number,
        ver_imagen: Boolean
    },
    data: function() {
        return {
            efecto_noelegido: 'w3-grayscale-max',
            ver_atributos: true,
            mostrar_img_full: 'none',
            imagen_full: '',
            alt_full: ''
        };
    },
    methods: {
        esElegido: function() {
            return (parseInt(this.index) === this.elegido);
        },
        mostrarImagenFull: function(opcion) {
            this.imagen_full = (opcion == 'jugador') ? this.jugador.imagen : 
            this.jugador.tecnica_especial.imagen;

            this.alt_full = (opcion == 'jugador') ? this.jugador.nombre : 
            this.jugador.tecnica_especial.nombre;

            this.mostrar_img_full = 'block';
        }
    },
});