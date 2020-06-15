var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        personajes: personajes,
        menus_extra: [],
        oa: new Almacen(),
        datos_almacen: {},
        og: new General()
    },
    computed: {
        hay_datos: function() {
            this.oa.claveAlmacen =this.datos_app.clave_almacen;
            this.oa.usarTipoLocalStorage();
            
            this.datos_almacen = this.oa.getAlmacen();

            return (typeof this.datos_almacen.ind_jugador === 'number')
        }   
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
    },
    methods: {
        continuar: function() {
            window.location = this.datos_almacen.url;
        }
    }
});