var app = new Vue({
    el: '#app',
    data: {
        datos_app: datos_app,
        personajes: personajes,
        capitulos: capitulos,
        jugador: {},
        oponente: {},
        menus_extra: [{
            url: 'index.html', 
            icono: 'fa fa-home', 
            texto: 'Home'
        }],
        oa: new Almacen(),
        datos_almacen: {},
        ver_ficha_imagen: false,
        clase_bot_atr_base: 'w3-white',
        clase_bot_atr_activo: 'w3-indigo',
        jugador_combate: {
            salud: 0,
            energia: 0,
            salud_porc: 0,
            energia_porc: 0,
            accion:'',
            mensaje: '...',
            ultima_accion: '...',
            ganador: false,
            perdedor: false,
            accion_valida: false,
            ataques_recibidos: 0
        },
        oponente_combate: {
            salud: 0,
            energia: 0,
            salud_porc: 0,
            energia_porc: 0,
            accion: '...',
            mensaje: '...',
            ataques_recibidos: 0
        },
        turnos: 0,
        mostrar_final: 'none',
        mostrar_condiciones: 'none',
        porc_energia_usada: {
            ataque: 20,
            defensa: 10,
            especial: 40
        },
        porc_recuperar_defensa: {
            salud: 20,
            energia: 30
        },
        og: new General(),
        ratio_dificil: 0.5
    },
    created: function() {
        this.oa.claveAlmacen =this.datos_app.clave_almacen;
        this.oa.usarTipoLocalStorage();
        
        this.datos_almacen = this.oa.getAlmacen();

        this.jugador = this.personajes[this.datos_almacen.ind_jugador];
        
        this.og.calcularAtributos(this.jugador, this.datos_app.atributos_base);

        this.actualizarAtributos(this.jugador, 
        this.capitulos[this.datos_almacen.capitulo].nivel_jugador);
        
        this.cargarDatosCombate('jugador');

        if (this.capitulos[this.datos_almacen.capitulo].oponente < 0)
        {
            this.oponente = (this.datos_almacen.ind_jugador === 1) ? 
            this.personajes[0]: this.personajes[1];
        }
        else
        {
            this.oponente = this.personajes[this.capitulos[this.datos_almacen.capitulo].oponente];
        }

        this.og.calcularAtributos(this.oponente, this.datos_app.atributos_base);

        var nivel_oponente = (this.datos_almacen.dificultad == 'normal') ? 
        this.capitulos[this.datos_almacen.capitulo].nivel_jugador : 
        (this.capitulos[this.datos_almacen.capitulo].nivel_jugador + this.ratio_dificil);

        this.actualizarAtributos(this.oponente, nivel_oponente);

        this.cargarDatosCombate('oponente');
    },
    mounted: function() {
        this.og.validarClaveApp(this.datos_app.clave);
        
        if ( !this.datos_almacen.url_visitada)
        {
            var mensaje = 'Tienes que ver primero la pantalla de introduccion!!';
            var url = this.datos_almacen.url;

            window.alert(mensaje);

            window.setTimeout(function(){
                window.location = url;
            }, 1000);
        }
    },
    methods: {
        verAtributos: function() {
            this.ver_ficha_imagen = !this.ver_ficha_imagen;
        },
        actualizarAtributos: function(objeto, nivel) {
            objeto.acciones.ataque.danio *= nivel;
            objeto.acciones.defensa.danio *= nivel;
            objeto.salud *= nivel;
            objeto.energia.valor *= nivel;
            objeto.nivel = nivel;

            objeto.acciones.ataque.danio = parseInt(objeto.acciones.ataque.danio.toFixed(0));
            objeto.acciones.defensa.danio = parseInt(objeto.acciones.defensa.danio.toFixed(0));
            objeto.salud = parseInt(objeto.salud.toFixed(0));
            objeto.energia.valor = parseInt(objeto.energia.valor.toFixed(0));
        },
        cargarDatosCombate: function(opcion) {
            // opcion: 'jugador', 'oponente'

            if (opcion == 'jugador')
            {
                this.jugador_combate.salud = this.jugador.salud;
                this.jugador_combate.energia = this.jugador.energia.valor;
                this.jugador_combate.salud_porc = 100;
                this.jugador_combate.energia_porc = 100;
            }
            else
            {
                this.oponente_combate.salud = this.oponente.salud;
                this.oponente_combate.energia = this.oponente.energia.valor;
                this.oponente_combate.salud_porc = 100;
                this.oponente_combate.energia_porc = 100;
            }
        },
        actualizarDatosCombate: function(opcion) {
            // opcion: 'jugador', 'oponente'

            var porc = 0;

            if (opcion == 'jugador')
            {
                porc = (this.jugador_combate.salud * 100) / this.jugador.salud;
                this.jugador_combate.salud_porc = porc.toFixed(0);

                porc = (this.jugador_combate.energia * 100) / this.jugador.energia.valor;
                this.jugador_combate.energia_porc = porc.toFixed(0);
            }
            else
            {
                porc = (this.oponente_combate.salud * 100) / this.oponente.salud;
                this.oponente_combate.salud_porc = porc.toFixed(0);

                porc = (this.oponente_combate.energia * 100) / this.oponente.energia.valor;
                this.oponente_combate.energia_porc = porc.toFixed(0);
            }
        },
        luchar: function() {
            this.validarAccion('jugador');

            if ( !this.jugador_combate.accion_valida ) return;
            
            this.generarAccionOponente();
            this.validarAccion('oponente');

            this.analizarAcciones();
            this.analizarFinPelea();

            this.recuperarAutomatico();

            this.turnos++;
            this.jugador_combate.ultima_accion = this.jugador_combate.accion;
            this.jugador_combate.accion = '';
        },
        numAleatorio: function(min, max) {
            // Retorna un entero aleatorio entre min (incluido) y max (excluido)
            // ¡Usando Math.round() te dará una distribución no-uniforme!

            var numero = Math.floor(Math.random() * (max - min)) + min;
            // var numero = Math.round(Math.random() * (max - min)) + min;

            return numero;
        },
        generarAccionOponente: function() {
            var min = 1; max = 10;
            var aleatorio = this.numAleatorio(min, max);
            var resto = aleatorio % 2;

            this.oponente_combate.accion = ( resto == 0) ? 'atacar' : 'defender';
        },
        analizarAcciones: function() {
            this.calcularDanioRecibido();
            this.calcularEnergiaUsada();

            this.actualizarDatosCombate('oponente');
            this.actualizarDatosCombate('jugador');
        },
        calcularDanioRecibido: function() {
            // calculo el daño que recibe el oponente
            var danio = 0, condicion_1 = false, condicion_2 = false;

            condicion_1 = (this.jugador_combate.accion == 'atacar');
            condicion_2 = (this.jugador_combate.accion == 'especial');

            if (condicion_1 || condicion_2)
            {
                if (condicion_1)
                {
                    danio = this.jugador.acciones.ataque.danio;
                }
                else
                {
                    danio = (this.jugador.acciones.ataque.danio * 
                    this.jugador.tecnica_especial.ratio_danio);
                    
                    danio = parseInt(danio.toFixed(0));
                }
                
                if (this.oponente_combate.accion == 'defender')
                {
                    danio -= this.oponente.acciones.defensa.danio;
                    
                    if (danio < 0) danio = 0;
                }

                this.oponente_combate.salud -= danio;

                if (this.oponente_combate.salud < 0)
                {
                    this.oponente_combate.salud = 0;
                }
                
                if (this.oponente_combate.ataques_recibidos < 
                this.oponente.tecnica_especial.ataques_activar)
                {
                    this.oponente_combate.ataques_recibidos++;
                }
            }

            // calculo el daño que recibe el jugador
            condicion_1 = (this.oponente_combate.accion == 'atacar');
            condicion_2 = (this.oponente_combate.accion == 'especial');

            if (condicion_1 || condicion_2)
            {
                if (condicion_1)
                {
                    danio = this.oponente.acciones.ataque.danio;
                }
                else
                {
                    danio = (this.oponente.acciones.ataque.danio * 
                    this.oponente.tecnica_especial.ratio_danio);
                    
                    danio = parseInt(danio.toFixed(0));
                }

                if (this.jugador_combate.accion == 'defender')
                {
                    danio -= this.jugador.acciones.defensa.danio;
                    
                    if (danio < 0) danio = 0;
                }

                this.jugador_combate.salud -= danio;

                if (this.jugador_combate.salud < 0)
                {
                    this.jugador_combate.salud = 0;
                }

                if (this.jugador_combate.ataques_recibidos < 
                this.jugador.tecnica_especial.ataques_activar)
                {
                    this.jugador_combate.ataques_recibidos++;
                }
            }
        },
        calcularEnergiaUsada: function() {
            // calculo la energia consumida por el jugador
            var energia_usada = 0, energia_extra = 0;
            
            if (this.jugador_combate.accion == 'atacar')
            {
                energia_usada = (this.jugador.energia.valor * 
                this.porc_energia_usada.ataque) / 100;
            }
            else if (this.jugador_combate.accion == 'defender')
            {
                energia_usada = (this.jugador.energia.valor * 
                this.porc_energia_usada.defensa) / 100;
            }
            else if (this.jugador_combate.accion == 'especial')
            {
                energia_usada = (this.jugador.energia.valor * 
                this.porc_energia_usada.especial) / 100;

                energia_extra = (this.jugador.energia.valor * 
                this.porc_energia_usada.defensa) / 100;

                this.jugador_combate.ataques_recibidos = 0;
            }
            
            this.jugador_combate.energia -= parseInt(energia_usada.toFixed(0));

            if ( this.jugador_combate.energia < 0) this.jugador_combate.energia = 0;

            this.jugador_combate.energia += parseInt(energia_extra.toFixed(0));

            // calculo la energia consumida por el oponente
            energia_usada = 0, energia_extra = 0;

            if (this.oponente_combate.accion == 'atacar')
            {
                energia_usada = (this.oponente.energia.valor * 
                this.porc_energia_usada.ataque) / 100;
            }
            else if (this.oponente_combate.accion == 'defender')
            {
                energia_usada = (this.oponente.energia.valor * 
                this.porc_energia_usada.defensa) / 100;
            }
            else if (this.oponente_combate.accion == 'especial')
            {
                energia_usada = (this.oponente.energia.valor * 
                this.porc_energia_usada.especial) / 100;

                energia_extra = (this.oponente.energia.valor * 
                this.porc_energia_usada.defensa) / 100;

                this.oponente_combate.ataques_recibidos = 0;
            }
            
            this.oponente_combate.energia -= parseInt(energia_usada.toFixed(0));

            if (this.oponente_combate.energia < 0) this.oponente_combate.energia = 0;

            this.oponente_combate.energia += parseInt(energia_extra.toFixed(0));
        },
        validarAccion: function(opcion) {
            var condicion = false;

            if (opcion == 'jugador')
            {
                if (this.jugador_combate.accion == 'atacar')
                {
                    condicion = this.jugador_combate.energia_porc < 
                    this.porc_energia_usada.ataque;
                    
                    if (condicion)
                    {
                        this.jugador_combate.accion_valida = false;
                        this.jugador_combate.mensaje = 'No tienes energia para Atacar.';
                    }
                    else
                    {
                        this.jugador_combate.accion_valida = true;
                        this.jugador_combate.mensaje = '...';
                    }
                }
                else if (this.jugador_combate.accion == 'especial')
                {
                    condicion = this.jugador_combate.ataques_recibidos < 
                    this.jugador.tecnica_especial.ataques_activar;

                    if (condicion)
                    {
                        this.jugador_combate.accion_valida = false;
                        this.jugador_combate.mensaje = 'Todavia no puedes usar Tec. Especial.';
                    }
                    else
                    {
                        this.jugador_combate.accion_valida = true;
                        this.jugador_combate.mensaje = '...';
                    }
                }
                else
                {
                    this.jugador_combate.accion_valida = true;
                    this.jugador_combate.mensaje = '...';
                }
            }
            else
            {
                // oponente
                condicion = (this.oponente_combate.salud_porc <= 20);

                if (condicion)
                {
                    this.oponente_combate.accion = 'defender';
                }
               
                if (this.oponente_combate.accion == 'atacar')
                {
                    condicion = this.oponente_combate.energia_porc < 
                    this.porc_energia_usada.ataque;

                    if (condicion) this.oponente_combate.accion = 'defender';
                }

                condicion = (this.oponente_combate.ataques_recibidos == 
                this.oponente.tecnica_especial.ataques_activar);

                if (condicion) this.oponente_combate.accion = 'especial';
            }
        },
        analizarFinPelea: function() {
            this.jugador_combate.perdedor = this.jugador_combate.salud <= 10;
            
            if (this.jugador_combate.perdedor)
            {
                this.jugador_combate.mensaje = 'Perdiste!!';
            }
            else
            {
                this.jugador_combate.ganador = this.oponente_combate.salud_porc <= 
                this.capitulos[this.datos_almacen.capitulo].
                condiciones_victoria.porc_salud_oponente;

                if (this.capitulos[this.datos_almacen.capitulo].
                condiciones_victoria.turnos > 0)
                {
                    this.jugador_combate.ganador = this.jugador_combate.ganador || 
                    (this.turnos >= this.capitulos[this.datos_almacen.capitulo].
                    condiciones_victoria.turnos);
                }

                if (this.jugador_combate.ganador) {
                    this.jugador_combate.mensaje = 'Ganaste!!';
                    
                    if ( !this.capitulos[this.datos_almacen.capitulo].en_desarrollo)
                    {
                        this.guardarDatos();
                    }
                    
                    this.mostrarMensajeFinal(true);
                }
            }
        },
        mostrarMensajeFinal: function(opcion) {
            //opcion: true o false.
            this.mostrar_final = ((opcion) ? 'block' : 'none');
        },
        seguir: function() {
            window.location = this.capitulos[this.datos_almacen.capitulo].url_siguiente;
        },
        volver: function(){
            window.location = this.capitulos[this.datos_almacen.capitulo].url_actual;
        },
        recuperarAutomatico: function() {
            var recuperar = 0, detalle = '';

            if (this.jugador_combate.ganador || this.jugador_combate.perdedor)
            {
                return;
            }

            if (this.jugador_combate.salud_porc <= this.porc_recuperar_defensa.salud)
            {
                recuperar = (this.jugador.salud * 
                this.porc_recuperar_defensa.salud) / 100;

                recuperar = parseInt(recuperar.toFixed(0));

                this.jugador_combate.salud += recuperar;

                if (this.jugador_combate.salud > this.jugador.salud)
                {
                    this.jugador_combate.salud = this.jugador.salud;
                }

                detalle = 'Salud';
            }

            if (this.jugador_combate.energia_porc <= this.porc_recuperar_defensa.energia)
            {
                recuperar = (this.jugador.energia.valor * 
                this.porc_recuperar_defensa.energia) / 100;

                recuperar = parseInt(recuperar.toFixed(0));

                this.jugador_combate.energia += recuperar;

                if (this.jugador_combate.energia > this.jugador.energia.valor)
                {
                    this.jugador_combate.energia = this.jugador.energia.valor;
                }

                detalle += (detalle !== '') ? ' y ': '';
                detalle += 'Energia';
            }

            if (recuperar > 0)
            {
                this.actualizarDatosCombate('jugador');
                this.jugador_combate.mensaje = detalle + ' recuperada.';
            }

            recuperar = 0;
            detalle= '';

            if (this.oponente_combate.salud_porc <= this.porc_recuperar_defensa.salud)
            {
                recuperar = (this.oponente.salud * 
                this.porc_recuperar_defensa.salud) / 100;

                recuperar = parseInt(recuperar.toFixed(0));

                this.oponente_combate.salud += recuperar;

                if (this.oponente_combate.salud > this.oponente.salud)
                {
                    this.oponente_combate.salud = this.oponente.salud;
                }

                detalle = 'Salud';
            }

            if (this.oponente_combate.energia_porc <= this.porc_recuperar_defensa.energia)
            {
                recuperar = (this.oponente.energia.valor * 
                this.porc_recuperar_defensa.energia) / 100;

                recuperar = parseInt(recuperar.toFixed(0));

                this.oponente_combate.energia += recuperar;

                if (this.oponente_combate.energia > this.oponente.energia.valor)
                {
                    this.oponente_combate.energia = this.oponente.energia.valor;
                }

                detalle += (detalle !== '') ? ' y ': '';
                detalle += 'Energia';
            }
            
            if (recuperar > 0)
            {
                this.actualizarDatosCombate('oponente');
                this.oponente_combate.mensaje = detalle + ' recuperada.';
            }
        },
        verCondiciones: function(opcion) {
            //opcion: true o false.
            this.mostrar_condiciones = ((opcion) ? 'block' : 'none');   
        },
        setAccion: function(accion) {
            this.jugador_combate.accion = accion;
            this.luchar();
        },
        guardarDatos: function() {
            var datos = JSON.parse(JSON.stringify(this.datos_almacen));

            datos.url = this.capitulos[this.datos_almacen.capitulo].url_siguiente;
            datos.url_visitada = false;
            datos.capitulo = this.datos_almacen.capitulo + 1,

            this.oa.claveAlmacen = this.datos_app.clave_almacen;
            this.oa.usarTipoLocalStorage();
            this.oa.setAlmacen(datos);

            if (this.oa.error !== '')
            {
                window.alert('Error: No se pudieron guardar los datos.')
            }
        }
    }
});