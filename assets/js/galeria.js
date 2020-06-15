var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        personajes: personajes,
        menus_extra: [{
            url: 'index.html', 
            icono: 'fa fa-home', 
            texto: 'Home'
        }],
        oa: new Almacen(),
        datos_almacen: {},
        ver_ficha_imagen: true,
        clase_bot_atr_base: 'w3-white',
        clase_bot_atr_activo: 'w3-indigo',
        og: new General()
    },
    created: function() {
        this.oa.claveAlmacen =this.datos_app.clave_almacen;
        this.oa.usarTipoLocalStorage();
        
        this.datos_almacen = this.oa.getAlmacen();

        for (var i = 0; i < this.personajes.length; i++)
        {
            this.og.calcularAtributos(this.personajes[i], this.datos_app.atributos_base);
        }
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
    },
    methods: {
        verAtributos: function() {
            this.ver_ficha_imagen = !this.ver_ficha_imagen;
        },
        indiceValido: function(fila, ind) {
            var min = 0, max = 0;
            var limite = this.datos_almacen.capitulo + 1;
            var retorno = false;

            if (fila == 1)
            {
                min = 0;
                max = 2;
            }
            else if (fila == 2)
            {
                min = 3;
                max = 5;
            }
            else
            {
                min = 6;
                max = 7;
            }

            if (limite > max) limite = max;

            retorno = (ind >= min) && (ind <= limite);

            return retorno;
        }
    }
});