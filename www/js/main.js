let contacts = [];



let body = document.querySelector('body');

class Contact {
    constructor(id, name, phone, email, history) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.history = [];

    }
}

function createGetModalInputsData() {
    let newPersonModal = document.createElement('div');
    newPersonModal.className = 'disable-modal';
    newPersonModal.id = 'newPersonModal';

    body.append(newPersonModal);

    let lableModalName = document.createElement('lable');
    lableModalName.for = 'newPersonName';
    lableModalName.innerHTML = 'Name';

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'newPersonName';
    inputName.name = 'newPersonName';

    let lableModalPhone = document.createElement('lable');
    lableModalPhone.for = 'newPersonPhone';
    lableModalPhone.innerHTML = 'Phone';

    let inputPhone = document.createElement('input');
    inputPhone.type = 'text';//here is the place for validation of phone numbers
    inputPhone.id = 'newPersonPhone';

    let lableModalEmail = document.createElement('lable');
    lableModalEmail.for = 'newPersonEmail';
    lableModalEmail.innerHTML = 'Email';

    let inputEmail = document.createElement('input');
    inputEmail.type = 'text';
    inputEmail.id = 'newPersonEmail';
    inputEmail.name = 'newPersonEmail';

    let newPersonSubmitBtn = document.createElement('input');
    newPersonSubmitBtn.type = 'submit';
    newPersonSubmitBtn.value = 'Submit';
    newPersonSubmitBtn.id = 'newPersonSubmitBtn';

    let newPersonCancelBtn = document.createElement('input');
    newPersonCancelBtn.type = 'submit';
    newPersonCancelBtn.value = 'Cancel';
    newPersonCancelBtn.id = 'newPersonCancelBtn';

    let backdrop = document.createElement('div');
    backdrop.className = 'disable-modal';
    backdrop.id = 'backdrop';

    body.append(backdrop);

    newPersonModal.append(lableModalName, inputName, lableModalPhone, inputPhone, lableModalEmail, inputEmail, newPersonSubmitBtn, newPersonCancelBtn);

    newPersonSubmitBtn.addEventListener('click', () => {
        let name = document.getElementById('newPersonName').value;
        let phone = document.getElementById('newPersonPhone').value;
        let email = document.getElementById('newPersonEmail').value;
    })

    let id = contacts.length;
    let contact = new Contact(id, name, phone, email, history);
    contacts.push(contact);
    let i = 0;

}


function setCancelnewPersonModal(option) {
    let newPersonName = document.getElementById('newPersonName');
    let newPersonPhone = document.getElementById('newPersonPhone');
    let newPersonEmail = document.getElementById('newPersonEmail');
    newPersonName.value = '';
    newPersonPhone.value = '';
    newPersonEmail.value = '';

    let newPersonModal = document.getElementById('newPersonModal');
    let backdrop = document.getElementById('backdrop');

    newPersonModal.className = `${option}-modal`;
    backdrop.className = `${option}-modal`;
}




let newEntrytBtn = document.getElementById('addNewEntry')

newEntrytBtn = addEventListener('click', () => {
    setCancelnewPersonModal('enable');
})

// function refreshDOMWindow() {

let contactContainer = document.createElement('div');
contactContainer.id = 'contactContainer';
contactContainer.className = 'contact-container';

body.append(contactContainer);

let row = document.createElement('div');
let colName = document.createElement('div');
let colPhone = document.createElement('div');
let colEmail = document.createElement('div');
let colAddEntry = document.createElement('div');

row.className = 'contact-row';
colName.className = 'contact-column contact-name contact-header';
colPhone.className = 'contact-column contact-phone contact-header';
colEmail.className = 'contact-column contact-email contact-header';
colAddEntry.className = ' contact-column contact-add-entry contact-header';
colAddEntry.id = 'addNewEntry';

colName.innerHTML = 'Name';
colPhone.innerHTML = 'Phone';
colEmail.innerHTML = 'Email';
colAddEntry.innerHTML = '<i class="fas fa-user-plus"></i>';



contactContainer.append(row);
row.append(colName, colPhone, colEmail, colAddEntry);

let showContactBody = document.createElement('span');
showContactBody.id = 'showContactBody';
contactContainer.append(showContactBody);






let personHistoryModal = document.createElement('div');
personHistoryModal.className = 'disable-modal';
personHistoryModal.id = 'personHistoryModal';

body.append(personHistoryModal);

let header = document.createElement('h1');


// header.innerHTML = 'History of the Contact' + contacts[i].name;
header.innerHTML = 'History of the Contact'

let currentContactData = document.createElement('ul');
currentContactData.className = 'list-data';
currentContactData.id = 'listHisotry';

personHistoryModal.append(currentContactData);

let currentNameHist = document.createElement('li');
currentNameHist.innerHTML = contacts[i].name;

let currentPhoneHist = document.createElement('li');
currentPhoneHist.innerHTML = contacts[i].phone;

let currentEmailHist = document.createElement('li');
currentEmailHist.innerHTML = contacts[i].email;

currentContactData.append(currentNameHist, currentPhoneHist, currentEmailHist);

let historyRow = document.createElement('div');
historyRow.className = 'history-row';

personHistoryModal.append(historyRow);

let oldPhones = document.createElement('div');
oldPhones.className = 'history-col history-phones';
oldPhones.innerHTML = 'old phones';



let oldPhonesList = document.createElement('ul');
oldPhonesList.className = 'old-phones';

let phoneItemHistoric = document.createElement('li');
phoneItemHistoric.id = 'phoneItmHistoric';

let phoneHolder = document.createElement('span');
phoneHolder.id = 'phoneHolder';
phoneHolder.innerHTML = setPhoneHistoric();

let restoreBtnPhone = document.createElement('input');
restoreBtnPhone.type = 'submit';
restoreBtnPhone.value = 'Submit';
restoreBtnPhone.id = 'restoreMeBtnPhone';
restoreBtnPhone.innerHTML = 'Restore';

let oldEmails = document.createElement('div');
oldEmails.className = 'history-col history-emails';
oldEmails.innerHTML = 'old phones';

let oldEmailsList = document.createElement('ul');
oldEmailsList.className = 'old-emails';

let emailItemHistoric = document.createElement('li');
emailItemHistoric.id = 'emailItmHistoric';

let emailHolder = document.createElement('span');
emailHolder.id = 'emailHolder';
emailHolder.innerHTML = setEmailHistoric();

let restoreBtnEmail = document.createElement('input');
restoreBtnEmail.type = 'submit';
restoreBtnEmail.value = 'Submit';
restoreBtnEmail.id = 'restoreMeBtnEmails';
restoreBtnEmail.innerHTML = 'Restore';

historyRow.append(oldPhones, oldEmails);

oldPhones.append(oldPhonesList, phoneItemHistoric, phoneHolder, restoreBtnPhone);
oldEmails.append(oldEmailList, emailItemHistoric, emailHolder, restoreBtnEmail);

function setPhoneHistoric() {
    let userhistory = contacts[i].history.phone;
    for (let i = 0; i < userhistory.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = + userhistory[i];
    }
    // }


    //TO JEST DO EMAIL HOLDER,PHONE HOLDER
    //here function to input a list of e.g phones
    function setEmailHistoric() {
        let userhistory = contacts[i].history.email;
        for (let i = 0; i < userhistory.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = + userhistory[i];
        }
    }

    //----------------------------------------START----------------------------
    //refresh window and new contact holder - newContactBody

    contactContainer = document.getElementById('contactContainer');
    let prevContactContainer = document.getElementById('showContactBody');
    contactContainer.removeChild(prevContactContainer);
    //here we are starting to create new elements
    let newContactBody = document.createElement('span');
    newContactBody.id = 'showContactBody';

    contactContainer.appendChild(newContactBody);






}







































// import { dataHead } from './header.js';
// import { dataFoot } from './footer.js';




// let header = document.createElement('header');
// let main = document.createElement('main');
// let footer = document.createElement('footer');
// let div = document.createElement('div');
// div.innerHTML = 'Hallo world';
// let p = document.createElement('p')
// p.innerHTML = 'Iam the boss';
// let a = documet.createElement('a');


// body.append(header, main, footer);
// header.append(div, p);
// main.append(div, p, a, input);
// footer.append(div, p, a);

// div.setAttribute('class')
// input.setAttribute('type', 'name', 'value');
// input.getAttribute('value');
// // });
// // }

// //adding event listener to whole window and setting the list of listeners depending on event type in the project
// const [listen, unlisten] = (() => {

//     let listeningOnType = {};
//     let listeners = [];

//     function listen(eventType, cssSelector, func) {

//         let listener = { eventType, cssSelector, func };
//         listeners.push(listener);

//         if (!listeningOnType[eventType]) {

//             window.addEventListener(eventType, e => {
//                 listeners.filter(objL => objL.eventType == eventType).forEach(listener => {
//                     if (e.target.closest(listener.cssSelector)) {
//                         listener.func(e);
//                     }

//                 });
//             });
//             listeningOnType[eventType] = true;
//         }
//         return listener;
//     }
//     function unlisten(listener){
//         listeners.splice(listeners.indexOf(listener), 1);
//     }
//     return[listen, unlisten];
// })();