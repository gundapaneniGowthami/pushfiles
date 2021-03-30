let insert =document.getElementById('insert')


window.addEventListener('keydown', (event) => {
    insert.innerHTML =`
    <div class="key">
            ${event.key===" "? 'space' : event.key}
            <small>Event.Key</small> 
        </div>
        <div class="key">
            ${event.keyCode}
            <small>Event.Keycode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>Event.code</small>
        </div>
    `
})