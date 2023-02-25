//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    display = {
        fetch: function (url) {
            return $.ajax({
                method: "GET",
                url: `${url}`,
            });
        },

        getUsers: function () {
            return this.fetch(`https://randomuser.me/api/?format=json&results=7`)

        },

        getQuote: function () {
            return this.fetch(`https://api.kanye.rest`);
        },

        getPokemon: function () {
            let randNum = Math.floor(Math.random() * 949);
            return this.fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}/`);
        },

        getBacon: function () {
            return this.fetch(`https://baconipsum.com/api/?type=all-meat&sentences=1`)
        }
    }
}
