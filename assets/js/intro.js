var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        menus_extra: [{
            url: 'index.html', 
            icono: 'fa fa-home', 
            texto: 'Home'
        }],
        og: new General()
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
    }
});