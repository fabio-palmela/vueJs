new Vue({
    el: '#app',
    data: {
        nome: "Fábio Palmela de Oliveira",
        idade: 38,
        burro: "https://thumbs.dreamstime.com/b/sorriso-do-burro-1564367.jpg"
    },
    methods: {
        idade_vezes_tres(){
            return this.idade * 3;
        },
        randomico(){
            return Math.random(0, 1);
        }
    }
})