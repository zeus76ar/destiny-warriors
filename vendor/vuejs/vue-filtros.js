/**
 * @fileoverview  Filtros globales para usar en un proyecto con Vuejs.
 * @version  20.05.21
 * @author  Ariel Balmaceda <absoft.dev@gmail.com>
 * @license  (GNU GPL v3.0)
*/

Vue.filter('formatNumberEs', function (value) {
    /**
     * Toma un numero en formato americano y lo retorna en formato español.
     * El siguiente codigo ha sido adaptado por mi.
     * El codigo orignal se encuentra en https://www.yoelprogramador.com/formatear-numeros-con-javascript/
     * 
     * @param  {number} value 'el numero a formatear'
     * @return  {string}
    */

    var separador = '.'; // separador para los miles
    var sepDecimal = ','; // separador para los decimales

    var retorno = '';
    var num = value.toString();
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = (splitStr.length > 1) ? (sepDecimal + splitStr[1]) : '';
    var regx = /(\d+)(\d{3})/;

    while ( regx.test(splitLeft) )
    {
        splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
    }
    
    retorno = (splitLeft + splitRight);

    return retorno;
});

Vue.filter('formatDateDmy', function (value, sepvalue, sepret) {
    /**
     * Toma una fecha tipo 'aaaa/mm/dd' y lo retorna en formato 'dd/mm/yyyy'.
     * 
     * @param  {string} value 'la fecha a formatear'
     * @param  {string} sepvalue 'el separador que tiene el param value'
     * @param  {string} sepret 'el separador que queremos retornar'
     * @return  {string}
    */
   
    var retorno = '';
    var partes = value.split(sepvalue);

    if ( partes.length == 3)
    {
        var d = partes[2];
        var m = partes[1];
        var a = partes[0];

        if (d.length < 2) d = ('0' + d);
        if (m.length < 2) m = ('0' + m);

        retorno = (d + sepret + m + sepret + a);
    }
    else
    {
        retorno = value;
    }

    return retorno;
});