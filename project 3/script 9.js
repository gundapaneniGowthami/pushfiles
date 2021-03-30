let jokeEl =document.getElementById('joke');
let jokeBtn =document.getElementById('jokeb0tn');



const generateJoke = () =>{
    fetch('https://icanhazdadjoke.com/',{
    headers: {   
    Accept: 'application/json'
    }
})
    
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        jokeEl.innerHTML = data.joke
    })
    
}

generateJoke()
jokeBtn.addEventListener('click', generateJoke)