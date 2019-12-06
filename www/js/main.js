let contacts = [];

let body = document.querySelector('body');


//HEADER AS A STATIC BAR
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


// let newEntrytBtn = document.getElementById('addNewEntry')

colAddEntry.addEventListener('click', () => {
    setCancelnewPersonModal('enable');
})

contactContainer.append(row);
row.append(colName, colPhone, colEmail, colAddEntry);


//-----------------------------------------------------------------------------------------------------

//MODAL FOR ALL INPUTS
// function createGetModalInputsData() {
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
inputName.className = 'inputForm';

let lableModalPhone = document.createElement('lable');
lableModalPhone.for = 'newPersonPhone';
lableModalPhone.innerHTML = 'Phone';

let inputPhone = document.createElement('input');
inputPhone.type = 'text';//here is the place for validation of phone numbers
inputPhone.id = 'newPersonPhone';
inputPhone.name = 'newPersonPhone';
inputPhone.className = 'inputForm';

let lableModalEmail = document.createElement('lable');
lableModalEmail.for = 'newPersonEmail';
lableModalEmail.innerHTML = 'Email';

let inputEmail = document.createElement('input');
inputEmail.type = 'text';
inputEmail.id = 'newPersonEmail';
inputEmail.name = 'newPersonEmail';
inputEmail.className = 'inputForm';

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

function clearForm() {
    let form = document.querySelectorAll('inputForm');
    for (let i in form) {
        form[i].value = '';
        console.log(form);
    }
}


// let id = contactToRem.parentElement.id;
//     console.log(id)

//     console.log('dlete a contact: ' + id);
//     let warning = window.confirm('you are about to delete' + contactToRem + '?');
//     if(warning){
//         deleteContact(contactToRem)
//     }
//     })
// }



function deleteContact(e) {
    let contactsArray = document.getElementsByClassName('contact-delete');
    console.log(contactsArray)

    // for (let i = 0; i < contactsArray.length; i++) {


    // contactsArray[i].addEventListener('click', (e) => {
    let contactToRem = e.target.closest('[id]');
    let finalToRemove = contactToRem.getAttribute('id');
    console.log(finalToRemove)
    let idN = contactToRem.id;
    console.log('id to remove', idN)
    // for(let i =0; i<contactsArray.length; i++){
    //     if(contactsArray[i].id ==idN){
    let contactsBook = JSON.parse(localStorage['contactsBook']);
    let contactIndex = contactsBook.findIndex(x => x.id == finalToRemove);
    contactsBook.splice(contactIndex, 1);
    localStorage['contactsBook'] = JSON.stringify(contactsBook);
    displayContactBook();
    console.log(contactsArray)
    // break;
}


function editContact(e) {

    let contactToEdit = e.target.closest('[id]');
    let finalToEdit = contactToEdit.getAttribute('id');
    let contactsBook = JSON.parse(localStorage['contactsBook']);
    let contactToEIndex = contactsBook.findIndex(x => x.id == finalToEdit);
    setCancelnewPersonModal('enable');


    let newContactName = document.getElementById('newPersonName')
    let newContactPhone = document.getElementById('newPersonPhone')
    let newContactEmail = document.getElementById('newPersonEmail')

    let nameToEdit = e.target.parentElement.children[0].innerText;
    let phoneToEdit = e.target.parentElement.children[1].innerText;
    let emailToEdit = e.target.parentElement.children[2].innerText;

    newContactName.value = nameToEdit;
    newContactPhone.value = phoneToEdit;
    newContactEmail.value = emailToEdit;

    // let compliteNewContact = contactToEdit.reduce(function(previousValue, currentValue, index, array){
    //     return contactToEdit.splice([phoneToEdit], [emailToEdit])
    // });
    // console.log(compliteNewContact)

    //from Object Gustaw with id =contactToEindex we have to splice phone and e-mail

}




//     let parentEl = document.getElementById('showContactBody');
//     console.log(parentEl);

//     let childEl = document.getElementById(contacts[i].id)
//         console.log(childEl)
//         contactToRem = childEl;
//     parentEl.removeChild(childEl);

//     let contactsBook = JSON.parse(localStorage['contactsBook']);
//     contactsBook.splice(contactToRem, 1);
//     localStorage['contacts'] = JSON.stringify(contactsBook);
//     displayContactBook();

// })}}





newPersonSubmitBtn.addEventListener('click', () => {
    let name = document.getElementById('newPersonName').value;
    let phone = document.getElementById('newPersonPhone').value;
    let email = document.getElementById('newPersonEmail').value;

    class Contact {
        constructor(id, name, phone, email, history) {
            this.id = id;
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.history = [];

        }
    }

    if (name !== '' && phone !== '' && email !== '') {
        // let id = contacts.length
        let id = (new Date()).getTime();
        // let history = [];
        let newContact = new Contact(id, name, phone, email, history);
        contacts.push(newContact);
        console.log(contacts);
        newContact.history.push(newContact.name);
        newContact.history.push(newContact.phone);
        newContact.history.push(newContact.email);

        let contactsJSON = JSON.stringify(contacts);
        localStorage.setItem("contactsBook", contactsJSON);
        setCancelnewPersonModal('disable');
        // newPersonModal.className = 'disable-modal';
        // backdrop.className = 'disable-modal';
        console.log('co do holery')
        clearForm();
        displayContactBook();
    }
    // 
});

newPersonCancelBtn.addEventListener('click', () => {

    setCancelnewPersonModal('disable');
})

function displayContactBook() {
    if (localStorage['contactsBook'] === undefined) {
        localStorage['contactsBook'] = '[]';
    }
    else {
        contacts = JSON.parse(localStorage['contactsBook']);
        showContactBody.innerHTML = '';
        for (let i = 0; i < contacts.length; i++) {
            let futureRow = document.createElement('div')
            let futureNameCol = document.createElement('div')
            let futurePhoneCol = document.createElement('div')
            let futureEmailCol = document.createElement('div')
            let futureEditBtn = document.createElement('div')
            let futureDeleteBtn = document.createElement('div')
            let futureHistoryBtn = document.createElement('div')

            futureRow.className = 'contact-row';
            futureRow.setAttribute('id', contacts[i].id);
            futureNameCol.className = 'contact-column contact-name';
            futurePhoneCol.className = 'contact-column contact-phone';
            futureEmailCol.className = 'contact-column contact-email';
            futureEditBtn.className = 'contact-column contact-edit';
            futureDeleteBtn.className = 'contact-column contact-delete'
            futureHistoryBtn.className = 'contact-column contact-history';
            futureHistoryBtn.id = 'contactHBtn';
            // futureDeleteBtn.setAttribute('data-id', 'n +');
            // futureDeleteBtn.id = 'data-id';

            futureDeleteBtn.addEventListener('click', deleteContact)
            futureEditBtn.addEventListener('click', editContact)
            // })
            //  () => {
            //     alert('here we are')
            // })







            futureHistoryBtn.addEventListener('click',setCancelHistoryModal)

            futureNameCol.innerHTML = contacts[i].name;
            futurePhoneCol.innerHTML = contacts[i].phone;
            futureEmailCol.innerHTML = contacts[i].email;

            futureEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
            futureDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            futureHistoryBtn.innerHTML = '<i class="fas fa-book-open"></i>';

            futureRow.appendChild(futureNameCol);
            futureRow.appendChild(futurePhoneCol);
            futureRow.appendChild(futureEmailCol);
            futureRow.appendChild(futureEditBtn);
            futureRow.appendChild(futureDeleteBtn);
            futureRow.appendChild(futureHistoryBtn);
            console.log('cos nie widac')
            showContactBody.appendChild(futureRow);
        }

    }

}
// displayContactBook();

// let name = inputName;
// let phone = inputPhone;
// let email = inputEmail;
// let id = contacts.length;


// let i = 0;

// }


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


let showContactBody = document.createElement('span');
showContactBody.id = 'showContactBody';
contactContainer.append(showContactBody);
displayContactBook();

// showContactBody.addEventListener('click', deleteContact);

// contactContainer = document.getElementById('contactContainer');
// let prevContactContainer = document.getElementById('showContactBody');
// contactContainer.removeChild(prevContactContainer);
// //here we are starting to create new elements
// let newContactBody = document.createElement('span');
// newContactBody.id = 'showContactBody';

// contactContainer.appendChild(newContactBody);
//----------------------------------------------------------------







//-------------------------------------------------------------------------------------------------
//Modal to create HISTORY
// let futureHistoryBtn = document.getElementById('contactHBtn');

function setCancelHistoryModal(e) {
    let nameToHistory = e.target.parentElement.children[0].innerText;
    let phoneToHistory = e.target.parentElement.children[1].innerText;
    let emailToHistory = e.target.parentElement.children[2].innerText;
    console.log(nameToHistory)
    let personHistoryModal = document.createElement('div');
    
    personHistoryModal.className = 'enable-modal';
    personHistoryModal.id = 'personHistoryModal';
    let backdrop = document.getElementById('backdrop');
    backdrop.className = `enable-modal`;

    body.append(personHistoryModal);

    let header = document.createElement('h3');

    let contactsHistory = JSON.parse(localStorage['contactsBook']);
    console.log(contactsHistory)
    let i = contactsHistory.length;
    console.log(i)
    let foundek = undefined;
    for( let i of contactsHistory){
        if(contactsHistory[i].name === nameToHistory){
            
            return foundek =contactsHistory[i].history;
           
        }
        console.log(contactsHistory)
        console.log(foundek)
    }
    let nameExHistory = e.target.parentElement.children[0].innerText;
    console.log(nameExHistory)
    header.innerHTML = "History of the contact: " + nameToHistory;
    // header.innerHTML = 'History of the Contact'
//NOW THAT WHAT I'VE CLICKED I HAVE TO FIND IT AS AN OBJECT WITH A PROPERTY "HISTORY" WHICH IS AN ARRAY
    let currentContactData = document.createElement('ul');
    currentContactData.className = 'list-data';
    currentContactData.id = 'listHisotry';

    personHistoryModal.append(currentContactData, header);

    let currentNameHist = document.createElement('li');
    console.log(currentNameHist)
    currentNameHist.innerHTML = nameToHistory;

    let currentPhoneHist = document.createElement('li');
    currentPhoneHist.innerHTML = phoneToHistory;

    let currentEmailHist = document.createElement('li');
    currentEmailHist.innerHTML = emailToHistory;

    currentContactData.append(currentNameHist, currentPhoneHist, currentEmailHist);
}




// let historyRow = document.createElement('div');
// historyRow.appendChild(currentContactData);
// historyRow.className = 'history-row';

// personHistoryModal.append(historyRow);


// function setEmailHistoric() {
//     let userhistory = contacts[i].history.email;
//     for (let i = 0; i < userhistory.length; i++) {
//         let li = document.createElement('li');
//         li.innerHTML = + userhistory[i];
//     }

//     let oldPhones = document.createElement('div');
//     oldPhones.className = 'history-col history-phones';
//     oldPhones.innerHTML = 'old phones';



//     let oldPhonesList = document.createElement('ul');
//     oldPhonesList.className = 'old-phones';

//     let phoneItemHistoric = document.createElement('li');
//     phoneItemHistoric.id = 'phoneItmHistoric';

//     let phoneHolder = document.createElement('span');
//     phoneHolder.id = 'phoneHolder';
//     phoneHolder.innerHTML = setPhoneHistoric();

//     let restoreBtnPhone = document.createElement('input');
//     restoreBtnPhone.type = 'submit';
//     restoreBtnPhone.value = 'Submit';
//     restoreBtnPhone.id = 'restoreMeBtnPhone';
//     restoreBtnPhone.innerHTML = 'Restore';

//     let oldEmails = document.createElement('div');
//     oldEmails.className = 'history-col history-emails';
//     oldEmails.innerHTML = 'old phones';

//     let oldEmailsList = document.createElement('ul');
//     oldEmailsList.className = 'old-emails';

//     let emailItemHistoric = document.createElement('li');
//     emailItemHistoric.id = 'emailItmHistoric';

//     let emailHolder = document.createElement('span');
//     emailHolder.id = 'emailHolder';
//     emailHolder.innerHTML = setEmailHistoric();

//     let restoreBtnEmail = document.createElement('input');
//     restoreBtnEmail.type = 'submit';
//     restoreBtnEmail.value = 'Submit';
//     restoreBtnEmail.id = 'restoreMeBtnEmails';
//     restoreBtnEmail.innerHTML = 'Restore';

//     historyRow.append(oldPhones, oldEmails);

//     oldPhones.append(oldPhonesList, phoneItemHistoric, phoneHolder, restoreBtnPhone);
//     oldEmails.append(oldEmailList, emailItemHistoric, emailHolder, restoreBtnEmail);

//     function setPhoneHistoric() {
//         let userhistory = contact.history;
//         for (let i = 0; i < userhistory.length; i++) {
//             let li = document.createElement('li');
//             li.innerHTML = + userhistory[i];
//         }
//         // }


//         //TO JEST DO EMAIL HOLDER,PHONE HOLDER
//         //here function to input a list of e.g phones

//     }

//     //----------------------------------------START----------------------------
//     //refresh window and new contact holder - newContactBody








// }







































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