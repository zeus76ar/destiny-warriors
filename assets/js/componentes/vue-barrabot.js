Vue.component('vue-barrabot', {
    template: '<footer class="w3-container w3-blue-gray w3-padding w3-center">' +
    '   {{ info }}' +
    '</footer>',
    props: {
        info: String
    }
});