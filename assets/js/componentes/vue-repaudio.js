Vue.component('vue-repaudio', {
    template: '<div>' +
    '<div class="w3-small">' +
    '   <span class="fa fa-music"></span> '+
    '   {{ titulo }} - {{ interprete }}' +
    '</div>' +
    '<audio v-bind:id="id_elem" autoplay="autoplay" controls="controls">' +
    '   <source v-bind:src="archivo_ogg" type="audio/ogg">' +
    '   <source v-bind:src="archivo_mp4" type="audio/mp4">' +
    '   <p>Tu navegador no implementa el elemento audio (HTML5)</p>' +
    '</audio></div>',
    props: {
        id_elem: String,
        archivo_mp4: String,
        archivo_ogg: String,
        titulo: String,
        interprete: String
    }
});