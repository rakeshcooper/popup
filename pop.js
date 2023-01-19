const popup = document.querySelector(".popup");
const popup1 = document.getElementById('popup-1');
const popup2 = document.getElementById('popup-2');
const popup3 = document.getElementById('popup-3');
const popup4 = document.getElementById('popup-4');
const popup5 = document.getElementById('popup-5');
const overlays = document.getElementById('overlay');
const closes = [popup1, popup2, popup3, popup4, popup5];

function pop(id){
    id.classList.add('popup')
    id.style.display = "block";
}

function pop1(){
    pop(popup1)
    overlay();
}

function pop2(){
    pop(popup2)
    overlay();
}

function pop3(){
    pop(popup3)
    overlay();
}

function pop4(){
    pop(popup4)
    overlay();
}

function pop5(){
    pop(popup5)
    overlay();
}

function overlay(){
    overlays.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlays.style.zIndex = '1';
}

function removeoverlay(){
    overlays.style.backgroundColor = "";
    overlays.style.zIndex = '';
}

function closepop(){
    closes.forEach(element => {element.style.display = "none"});
    removeoverlay()
}