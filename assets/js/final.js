var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        menus_extra: [{
            url: 'index.html', 
            icono: 'fa fa-home', 
            texto: 'Home'
        }],
        datos_almacen: {},
        oa: new Almacen(),
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
        
        if (this.datos_almacen.url !== 'final.html')
        {
            var mensaje = 'Tienes que ganar el ultimo combate para ver el final !!';
            var url = this.datos_almacen.url;

            window.alert(mensaje);

            window.setTimeout(function(){
                window.location = url;
            }, 1000);
        }
    }
});