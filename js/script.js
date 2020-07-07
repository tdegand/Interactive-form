const nameInput = document.getElementById('name');
nameInput.focus();

//Create a function to show the extra inpout when "Other" is selected

const chooseRole = () => {
    const otherJob = document.getElementById('other-title');
    const jobRole = document.getElementById('title');
    const jobRoleSelect = document.querySelectorAll('#title option');

    otherJob.style.display = 'none';

    jobRole.addEventListener('change', () => {
        if (jobRoleSelect[5].selected === true) {
            otherJob.style.display = 'block';
        } else {
            otherJob.style.display = 'none';
        }
    });
}

/** 
 * Create a function to show the Tshirt colors based on user selection:
 * Do not show color options until a drop down option is selected by the user (defualt is hidden)
 * Select design dropdown options
 * dependng on which one is selected show the relavent options to that selection using an if/Else statement  
**/

//refactor this code when I'm done with the rest
const shirtInfo = () => {

    const designShirtColor = document.getElementById('color');
    const designShirtOption = document.querySelectorAll('#color option');
    const designShirtLabel = document.querySelector('#colors-js-puns label')
    const themeSelect = document.querySelectorAll('#design option');

    const design = document.getElementById('design');
    designShirtColor.style.display = 'none';
    designShirtLabel.style.display = 'none';
    themeSelect[0].style.display = 'none';
    themeSelect[0].disabled = true;

    design.addEventListener('change', () => {

        if (themeSelect[1].selected === true) {
            designShirtColor.style.display = 'block';
            designShirtLabel.style.display = 'block';
            designShirtOption[0].style.display = 'block';
            designShirtOption[0].selected = 'selected';
            designShirtOption[1].style.display = 'block';
            designShirtOption[2].style.display = 'block';
            designShirtOption[3].style.display = 'none';
            designShirtOption[4].style.display = 'none';
            designShirtOption[5].style.display = 'none';
        } else if (themeSelect[2].selected === true) {
            designShirtColor.style.display = 'block';
            designShirtLabel.style.display = 'block';
            designShirtOption[3].style.display = 'block';
            designShirtOption[3].selected = 'selected';
            designShirtOption[4].style.display = 'block';
            designShirtOption[5].style.display = 'block';
            designShirtOption[0].style.display = 'none';
            designShirtOption[1].style.display = 'none';
            designShirtOption[2].style.display = 'none';
        } else {
            designShirtColor.style.display = 'none';
            designShirtLabel.style.display = 'none';
        }
    });

}

//Register for activities filtering section
const checkFieldSet = document.querySelector('.activities');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const activities = document.querySelector('.activities');
const runningTotal = document.createElement('h3');
activities.appendChild(runningTotal);
let total = 0;
runningTotal.innerHTML = `$${total}`;

//rework this later and refactor (probably a better way to do this but it functions)
checkFieldSet.addEventListener('change', (e) => {
    if (checkbox[1].checked === true && e.target === checkbox[1]) {
        checkbox[3].disabled = true;
    } else if (checkbox[1].checked === false && e.target === checkbox[1]) {
        checkbox[3].disabled = false;
    } else if (checkbox[3].checked === true && e.target === checkbox[3]) {
        checkbox[1].disabled = true;
    } else if (checkbox[3].checked === false && e.target === checkbox[3]) {
        checkbox[1].disabled = false;
    } else if (checkbox[2].checked === true && e.target === checkbox[2]) {
        checkbox[4].disabled = true;
    } else if (checkbox[2].checked === false && e.target === checkbox[2]) {
        checkbox[4].disabled = false;
    } else if (checkbox[4].checked === true && e.target === checkbox[4]) {
        checkbox[2].disabled = true;
    } else if (checkbox[4].checked === false && e.target === checkbox[4]) {
        checkbox[2].disabled = false;
    }

    // display total below the checkbox's when they are checked

    if (e.target.checked && e.target === checkbox[0]) {
        total = total + 200
    }
    if (e.target.checked && e.target !== checkbox[0]) {
        total = total + 100;
    }
    if (!e.target.checked && e.target === checkbox[0]) {
        total = total - 200
    }
    if (!e.target.checked && e.target !== checkbox[0]) {
        total = total - 100
    }

    runningTotal.innerHTML = `$${total}`;
});

//Payment info section
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentSelect = document.getElementById('payment');
const paymentOption = document.querySelectorAll('#payment option');

creditCard.style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';
paymentOption[0].disabled = true;
paymentOption[0].style.display = 'none';
paymentOption[1].selected = true;
creditCard.style.display = 'block';

paymentSelect.addEventListener('change', () => {
    if (paymentOption[1].selected) {
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
        paypal.style.display = 'none';
    } else if (paymentOption[2].selected) {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if (paymentOption[3].selected) {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';

    }
});

//form valiadation for all fields (includes error messages and tooltips)
const form = document.querySelector('form');
const email = document.getElementById('mail');
const registerBut = document.querySelector('button[type=submit]');
const regex = /[\w]{1,}\@[a-zA-Z]{3,}\.[a-zA-Z]{3}/;


form.addEventListener('submit', (e) => {

    //Checking name field
    if (nameInput.value === '' || nameInput.value == null) {
        e.preventDefault();
        nameInput.placeholder = 'NAME IS REQUIRED!';
        nameInput.style.borderColor = 'red';
    }
    //Checking email field
    if (email.value === '' || !regex.test(email.value)) {
        e.preventDefault();
        email.placeholder = 'PLEASE ENTER VALID EMAIL';
        email.style.borderColor = 'red';
    }
    //Checking if at least one checkbox has been checked

    let countCheckBox = 0;

    //count all checkboxs and if not checked add them to the above variable
    for (let i = 0; i < checkbox.length; i++) {
        if (!checkbox[i].checked) {
            countCheckBox++
        }
    }
    //If the checkbox variable equals the amount of checkboxes then no boxes are checked and error should be shown
    if (countCheckBox === checkbox.length) {
        e.preventDefault();
        runningTotal.innerHTML = "Please choose a conference or workshop!";
        activities.style.borderLeft = '2px solid red';
        activities.style.borderRight = '2px solid red';

    }


    //Checking CC information fields
    const creditCardField = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const cvvNumb = document.getElementById('cvv');

    const ccNum = /[\d]{13,16}/;
    const regZip = /^[\d]{5}$/;
    const regCvv = /^[\d]{3}$/;

    if (paymentOption[1].selected) {
        //Check CC field
        if (creditCardField.value === '' || !ccNum.test(creditCardField.value)) {
            e.preventDefault();
            creditCardField.placeholder = 'Please enter Valid Credit Card Number';
            creditCardField.style.borderColor = 'red';
        }
        //Check Zipcode Field
        if (zipCode.value === '' || !regZip.test(zipCode.value)) {
            e.preventDefault();
            zipCode.style.borderColor = 'red';
        }
        //Check CVV field
        if (cvvNumb.value === '' || !regCvv.test(cvvNumb.value)) {
            e.preventDefault();
            cvvNumb.style.borderColor = 'red';
        }
    }

});

//call functions

chooseRole();
shirtInfo();
