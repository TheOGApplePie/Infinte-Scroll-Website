import { script } from "./script.js";
let lastKnownY = 0;
const canvas = document.getElementById('canvas');
createNextElement(1);
createPreviousElement(1);
window.scrollTo(0,window.innerHeight);
let sections = document.getElementsByTagName('section');
let bottomElement = sections.item(sections.length-1);
let topElement = sections.item(0);
function createNextElement(id){
    let section = document.createElement('section');
    let div = document.createElement('div');
    div.className = 'centered';
    section.id = Number(id)==4?1:Number(id)+1;
    let h2 = document.createElement('h2');
    switch(section.id){
        case '1':
            section.className = 'first-slide';
            h2.textContent = script.firstElement;
            break;
        case '2':
            section.className = 'second-slide';
            h2.textContent = script.secondElement;
            break;
        case '3':
            section.className = 'third-slide';
            h2.textContent = script.thirdElement;
            break;
        case '4':
            section.className = 'fourth-slide';
            h2.textContent = script.fourthElement;
            break;

    }
    div.append(h2);
    section.append(div);
    canvas.append(section);
}
function createPreviousElement(id){
    let section = document.createElement('section');
    section.id = Number(id)==1?4: Number(id)-1;
    let div = document.createElement('div');
    div.className = 'centered';
    let h2 = document.createElement('h2');
    switch(section.id){
        case '1':
            section.className = 'first-slide';
            h2.textContent = script.firstElement;
            break;
        case '2':
            section.className = 'second-slide';
            h2.textContent = script.secondElement;
            break;
        case '3':
            console.log('here')
            section.className = 'third-slide';
            h2.textContent = script.thirdElement;
            break;
        case '4':
            section.className = 'fourth-slide';
            h2.textContent = script.fourthElement;
            break;
}
        div.append(h2);
        section.append(div);
        canvas.prepend(section);
}
document.addEventListener("scroll",(event)=>{
    console.log(window.scrollY == window.innerHeight, window.scrollY , window.innerHeight)
        if(window.scrollY == 0 && lastKnownY > window.scrollY){
        //We are at the top
        createPreviousElement(topElement.id);
        window.scrollTo(0,window.innerHeight)
        bottomElement.remove();
        topElement = sections.item(0);
        bottomElement = sections.item(sections.length-1);
    }
    else if(window.scrollY == window.innerHeight*2 && lastKnownY < window.scrollY){
        //We are at the bottom
        createNextElement(bottomElement.id);
        topElement.remove();
        topElement = sections.item(0);
        bottomElement = sections.item(sections.length-1);
    }
    lastKnownY = window.scrollY;
});