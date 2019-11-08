let contacts = [];



let body = document.querySelector('body');

function refreshDOMWindow() {

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

    let backdrop = document.createElement('div');
    backdrop.className = 'disable-modal';
    backdrop.id = 'backdrop';

    body.append(backdrop);

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
    inputPhone.type = 'text';//here is the place for validation numbers
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

    newPersonModal.append(lableModalName, inputName, lableModalPhone, inputPhone, lableModalEmail, inputEmail, newPersonSubmitBtn, newPersonCancelBtn);

    let personHistoryModal = document.createElement('div');
    personHistoryModal.className = 'disable-modal';
    personHistoryModal.id = 'personHistoryModal';

    body.append(personHistoryModal);

    let header = document.createElement('h1');
    header.innerHTML = 'History of the Contact' + contacts[i].name;

    let currentContactData = document.createElement('ul');
    currentContactData.className = 'list-data';
    currentContactData.id = 'listHisotry';

    let currentNameHist = document.createElement('li');
    currentNameHist.innerHTML = contacts[i].name;

    let currentPhoneHist = document.createElement('li');
    currentPhoneHist.innerHTML = contacts[i].phone;

    let currentEmailHist = document.createElement('li');
    currentEmailHist.innerHTML = contacts[i].email;

    currentContactData.append(currentNameHist, currentPhoneHist, currentEmailHist);

    let historyRow = document.createElement('div');
    historyRow.className = 'history-row';

    let oldPhones = document.createElement('div');
    oldPhones.className = 'history-col history-phones';
    oldPhones.innerHTML ='old phones';

    let oldPhonesList = document.createElement('ul');
    oldPhonesList.className = 'old-phones';

    let phoneItemHistoric = document.createElement('li');
    phoneItemHistoric.id = 'phoneItmHistoric';

    let phoneHolder = document.createElement('span');
    phoneHolder.id = 'phoneHolder';
    phoneHolder.innerHTML = contacts[i].history.phone;

    let restoreBtn = document.createElement('input');
    restoreBtn.type = 'submit';
    restoreBtn.value = 'Submit';
    restoreBtn.id = 'restoreMeBtn';
    restoreBtn.innerHTML ='Restore';

    let oldEmails = document.createElement('div');
    oldEmails.className = 'history-col history-emails';
    oldEmails.innerHTML ='old phones';

    let oldEmailsList = document.createElement('ul');
    oldEmailsList.className = 'old-emails';

    let emailItemHistoric = document.createElement('li');
    emailItemHistoric.id = 'emailItmHistoric';

    let emailHolder = document.createElement('span');
    emailHolder.id = 'emailHolder';
    emailHolder.innerHTML = contacts[i].history.email;

    let restoreBtn = document.createElement('input');
    restoreBtn.type = 'submit';
    restoreBtn.value = 'Submit';
    restoreBtn.id = 'restoreMeBtn';
    restoreBtn.innerHTML ='Restore';

    

    



    //here function to input a list of e.g phones
     let userhistory = contacts[i].history;
    for (let i=0; i<userhistory.length; i++){
        let li = document.createElement('li');
        li.innerHTML =+ userhistory[i];
        currentContactData.appendChild(li);
    }

    personHistoryModal.append(currentContactData);
    





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