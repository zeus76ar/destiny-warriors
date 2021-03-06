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
        og: new General()
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
    },
    methods: {
        guardarDatos: function() {
            this.oa.claveAlmacen = this.datos_app.clave_almacen;
            this.oa.usarTipoLocalStorage();
            
            var datos_almacen = this.oa.getAlmacen();

            datos_almacen.url_visitada = true;

            this.oa.setAlmacen(datos_almacen);

            if (this.oa.error !== '')
            {
                window.alert('Error: No se pudieron guardar los datos.')
            }
        }   
    }
});