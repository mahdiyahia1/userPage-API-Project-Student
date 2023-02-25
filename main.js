
    const displayUser = function() {
        let apiManager = new APIManager()
        let renderer = new Renderer()
    
        apiManager.display.getUsers()
        .then((data) => {
        renderer.GenericTemplateGenerator(`.user-container`, `#userInfo`, data.results[0])
        data.results.splice(0, 1)
        return data.results
        })
        .then((data) => {
            renderer.GenericTemplateGenerator(`.friends-container`, `#userFriendsNameList`, data)
        })
        .then(() => {
            apiManager.display.getQuote()
            .then((data) => {
                renderer.GenericTemplateGenerator(`.quote-container`, `#kanyeQuote`, data)
            })
        })
        .then(() => {
            apiManager.display.getPokemon()
            .then((data) => {
                renderer.GenericTemplateGenerator(`.pokemon-container`, `#pokemonInfo`, data)
            })
        })
        .then(() => {
            apiManager.display.getBacon()
            .then((data) => {
                renderer.GenericTemplateGenerator(`.meat-container`, `#baconParagraph`, data)
            })
        })
    }
    
    displayUser()
