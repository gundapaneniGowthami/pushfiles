let toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggleEle  =>{
    toggleEle.addEventListener('click',() =>{
        toggleEle.parentNode.classList.toggle('active')
    })

})