const boxes= document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes() {
    let triggerPoint =window.innerHeight/5 * 4

    boxes.forEach(box =>{
        let boxTop =box.getBoundingClientRect().top
        if(boxTop <triggerPoint){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })

}