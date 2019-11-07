import { dataHead } from './header.js';
import { dataFoot } from './footer.js';

let body = document.querySelector('body');

// const createEl = (tagName, attributes = {}, text) => {
//     const element = document.createElement(tagName);
//     Object.assign(element, attributes);
//     if (text) {
//         element.appendChild(document.createTextNode(text));
//     }
//     return element;
// }
// function loadElements(array) {
   
//     array.forEach(element => {

let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer');
let div = document.createElement('div');
div.innerHTML = 'Hallo world';
let p = document.createElement('p')
p.innerHTML = 'Iam the boss';
let a = documet.createElement('a');
    

body.append(header, main, footer);
header.append(div, p);
main.append(div, p, a, input);
footer.append(div, p, a);

div.setAttribute('class')
input.setAttribute('type', 'name', 'value');
input.getAttribute('value');
// });
// }

//adding event listener to whole window and setting the list of listeners depending on event type in the project
const [listen, unlisten] = (() => {

    let listeningOnType = {};
    let listeners = [];

    function listen(eventType, cssSelector, func) {

        let listener = { eventType, cssSelector, func };
        listeners.push(listener);

        if (!listeningOnType[eventType]) {

            window.addEventListener(eventType, e => {
                listeners.filter(objL => objL.eventType == eventType).forEach(listener => {
                    if (e.target.closest(listener.cssSelector)) {
                        listener.func(e);
                    }

                });
            });
            listeningOnType[eventType] = true;
        }
        return listener;
    }
    function unlisten(listener){
        listeners.splice(listeners.indexOf(listener), 1);
    }
    return[listen, unlisten];
})();