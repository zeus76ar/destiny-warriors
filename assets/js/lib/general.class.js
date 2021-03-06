/*
dependencias: caracteres.class.js, texto_numero.class.js
*/

function General() {
    this.otn = new Texto_Numero();

    this.calcularAtributos = function(personaje, datos_base) {
        //personaje: objeto, datos_base: objeto
        personaje.acciones.ataque.danio = 
        (personaje.acciones.ataque.danio_porc * datos_base.ataque) / 100;

        personaje.acciones.defensa.danio = 
        (personaje.acciones.defensa.danio_porc * datos_base.defensa) / 100;

        personaje.salud = 
        (personaje.salud_porc * datos_base.salud) / 100;

        personaje.energia.valor = 
        (personaje.energia.valor_porc * datos_base.energia) / 100;

        personaje.acciones.ataque.danio = 
        parseInt(personaje.acciones.ataque.danio.toFixed(0));

        personaje.acciones.defensa.danio = 
        parseInt(personaje.acciones.defensa.danio.toFixed(0));

        personaje.salud = parseInt(personaje.salud.toFixed(0));

        personaje.energia.valor = parseInt(personaje.energia.valor.toFixed(0));
    }

    this.validarClaveApp = function(clave) {
        // clave: string con la clave en formato numero hexadecimal
        /*
        var host = window.location.hostname;
        var condicion, pagina_sinclave = 'sinclave.html';

        this.otn.setNumero(clave);
        this.otn.setSistema('h');
        this.otn.convertirNumeroEnTexto();

        condicion = (this.otn.getTexto() === host);

        if (! condicion) window.location = pagina_sinclave;
        */
    }
}