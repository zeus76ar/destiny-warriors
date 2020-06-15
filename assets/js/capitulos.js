var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        menus_extra: [{
            url: 'index.html', 
            icono: 'fa fa-home', 
            texto: 'Home'
        }],
        oa: new Almacen(),
        capitulos: capitulos,
        datos_almacen: {},
        personajes: personajes,
        og: new General()
    },
    created: function() {
        this.oa.claveAlmacen =this.datos_app.clave_almacen;
        this.oa.usarTipoLocalStorage();
        
        this.datos_almacen = this.oa.getAlmacen();
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
    },
    methods: {
        guardarDatos: function() {
            var datos = this.oa.getAlmacen();

            datos.url_visitada = true;

            this.oa.setAlmacen(datos);

            if (this.oa.error !== '')
            {
                window.alert('Error: No se pudieron guardar los datos.')
            }
        }   
    }
});