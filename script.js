// Free Random Joke API
fetch('https://icanhazdadjoke.com/',{
    headers: {
        'Accept': 'application/json'
    }
}).then((data) => data.json())
    .then(jokeData =>{
        const jokeText = jokeData.joke
        const jokeElement = document.getElementById('jokeElement')
        jokeElement.innerHTML = jokeText
    })
