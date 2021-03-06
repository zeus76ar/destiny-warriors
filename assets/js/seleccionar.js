var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        personajes: personajes,
        clase_bot_sel_activo: 'w3-green',
        clase_bot_sel_base: 'w3-white',
        clase_bot_atr_base: 'w3-white',
        clase_bot_atr_activo: 'w3-indigo',
        personaje_elegido: -1,
        menus_extra: [{
            url: 'intro.html', 
            icono: 'fa fa-info', 
            texto: 'Intro'
        }],
        ver_ficha_imagen: true,
        oa: new Almacen(),
        dificultad: '',
        og: new General()
    },
    created: function() {
        this.og.calcularAtributos(this.personajes[0], this.datos_app.atributos_base);
        this.og.calcularAtributos(this.personajes[1], this.datos_app.atributos_base);
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
    },
    methods: {
        elegir: function(index) {
            this.personaje_elegido = index;
            this.ver_ficha_imagen = true;
        },
        esElegido: function(index) {
            return (index === this.personaje_elegido);
        },
        verAtributos: function() {
            this.ver_ficha_imagen = !this.ver_ficha_imagen;
        },
        jugar: function() {
            var datos = {
                ind_jugador: this.personaje_elegido,
                url: 'tutorial.html',
                url_visitada: false,
                capitulo: 0,
                dificultad: this.dificultad
            }

            this.oa.claveAlmacen = this.datos_app.clave_almacen;
            this.oa.usarTipoLocalStorage();
            this.oa.setAlmacen(datos);

            if (this.oa.error === '')
            {
                window.location = datos.url;
            }
            else
            {
                window.alert('Error: No se pudieron guardar los datos. No se puede continuar.')
            }
        }
    }
});