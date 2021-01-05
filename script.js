//Steps:
//we're listening for a clink on each panel
//when someone clicks we're gonna open it
//that's gonna then in turn trigger css open
//when that finishes, then 2nd one (transitionend) will activates and that's where we're going to toggle open-active
const panels = document.querySelectorAll('.panel');

function ToggleOpen(){
    console.log('hello');
    this.classList.toggle('open');
}

function ToggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', ToggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', ToggleActive));
