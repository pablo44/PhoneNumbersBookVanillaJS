import { dataHead } from './header.js';
import { dataFoot } from './footer.js';


let body = document.querySelector('body');
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer');
let div = document.createElement('div');
let p = document.createElement('p');
let a = documet.createElement('a');

body.append(header,main,footer);
header.append(div,p);
main.append(div,p,a,input);
footer.append(div,p,a);

input.setAttribute('type','name','value');
input.getAttribute('value');