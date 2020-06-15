Vue.component('vue-barratop', {
    template: '<div style="margin-bottom: 54px;">' +
    '<nav class="w3-top">' +
    '   <div class="w3-bar w3-blue-gray">' +
    '       <span class="w3-bar-item w3-padding-16">' +
    '           <strong>{{ titulo }}</strong>' +
    '       </span>' +
    '       <span class="w3-right">' +
    '           <template v-if="menus_extra.length" ' +
    '           v-for="item in menus_extra">' +
    '               <a v-bind:href="item.url" ' +
    '               class="w3-bar-item w3-button w3-padding-16 w3-hide-small">' +
    '                   <span v-bind:class="item.icono"></span> {{ item.texto }}' +
    '               </a>' +
    '           </template>' +
    '           <a class="w3-bar-item w3-button w3-mobile w3-padding-16 ' +
    '           w3-hide-small menu" id="menu_0" ' +
    '           v-on:click="selecMenu(\'menu_0\')">' +
    '               <span class="fa fa-legal"></span> Aviso Legal' +
    '           </a>' +
    '       </span>' +
    '       <a class="w3-bar-item w3-button w3-right ' +
    '       w3-large w3-hide-large w3-hide-medium" ' +
    '       v-on:click.prevent="menu_movil = !menu_movil">' +
    '           <span class="fa fa-bars"></span>' +
    '       </a>' +
    '   </div>' +
    '   <!-- /.w3-bar -->' +
    '   <div class="w3-bar-block w3-blue-gray w3-hide w3-hide-large ' +
    '   w3-hide-medium" v-bind:class="{ \'w3-show\': menu_movil }">' +
    '       <template v-if="menus_extra.length" v-for="item in menus_extra">' +
    '           <a v-bind:href="item.url" ' +
    '           class="w3-bar-item w3-button w3-padding-16">' +
    '               <span v-bind:class="item.icono"></span> {{ item.texto }}' +
    '           </a>' +
    '       </template>' +
    '       <a class="w3-bar-item w3-button w3-padding-16 menu" ' +
    '       id="menum_0" v-on:click="selecMenu(\'menum_0\')">' +
    '           <span class="fa fa-legal"></span> Aviso Legal' +
    '       </a>' +
    '   </div>' +
    '   <!-- /.w3-barblock -->' +
    '</nav>' +
    '<div id="aviso_legal" class="w3-modal" ' +
    'v-bind:style="{ display: mostrar_legal }">' +
    '   <div class="w3-modal-content w3-left-align w3-animate-zoom">' +
    '       <header class="w3-container w3-blue-gray">' +
    '           <span v-on:click="mostrarAvisoLegal(false)" ' +
    '           class="w3-button w3-display-topright">' +
    '               <span class="fa fa-window-close"></span>' +
    '           </span>' +
    '           <h4>' +
    '               <span class="fa fa-legal"></span> Aviso Legal' +
    '           </h4>' +
    '       </header>' +
    '       <div class="w3-container w3-padding-16 w3-text-dark-gray">' +
    '           Los derechos de propiedad intelectual de las imagenes y ' +
    '           audios utilizados en esta aplicacion web, son de sus ' + 
    '           respectivos autores/creadores. No se utilizan para fines de ' +
    '           lucro o comercializacion. Se obtuvieron a traves de paginas en ' +
    '           internet que los mostraban como parte de su contenido.' +
    '       </div>' +
    '   </div>' +
    '</div>' +
    '<!-- /.w3-modal --></div>',
    props: {
        titulo: String,
        menus_extra: Array
    },
    data: function() {
        return {
            clase_menu_activo: 'w3-pale-yellow',
            menu_movil: false,
            mostrar_legal: 'none'
        };
    },
    methods: {
        selecMenu: function(id) {
            var x = document.getElementById(id);
            var id_menu_a = 'menu_', id_menu_b = 'menum_';
            var otro_id, y;

            if (id.indexOf(id_menu_a) >= 0)
            {
                otro_id = id.replace(id_menu_a, id_menu_b);
            }
            else
            {
                otro_id = id.replace(id_menu_b, id_menu_a);
            }

            y = document.getElementById(otro_id);

            this.deseleccionarMenus();

            if (x.className.indexOf(this.clase_menu_activo) == -1) 
            {
                x.className += (' ' + this.clase_menu_activo);
                y.className += (' ' + this.clase_menu_activo);
            }

            if ((id === 'menu_0') || (id === 'menum_0')) this.mostrarAvisoLegal(true);
        },
        deseleccionarMenus: function() {
            var clase_base = 'menu'
            var menus = document.getElementsByClassName(clase_base);
            var i = 0;

            for (i; i < menus.length; i++)
            {
                menus[i].className = menus[i].className.replace((' ' + 
                this.clase_menu_activo), '');
            }
        },
        mostrarAvisoLegal: function(opcion) {
            //opcion: true o false.
            this.mostrar_legal = ((opcion)?'block':'none');

            if (!opcion){
                var menu = document.getElementById('menu_0');
                var menum = document.getElementById('menum_0');

                menu.className =menu.className.replace((' ' + 
                this.clase_menu_activo), '');

                menum.className =menum.className.replace((' ' + 
                this.clase_menu_activo), '');
            }
        }
    }
});