let sounds =['fire', 'water','rain','thunder'];

sounds.forEach(sound =>{
    let btn =document.createElement('button')
    btn.classList.add('btn')
    btn.innerText =sound
    btn.addEventListener('click',() =>{
        stopsongs()
        document.getElementById(sound).play() 
    })
    document.getElementById('button').
    appendChild(btn)
})

function stopsongs(){
sounds.forEach(sound =>{
    let song =document.getElementById(sound)
    song.pause()
    song.currentTime=0;
})
}