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
});







//Payment info section

//form valiadation for all fields (includes error messages and tooltips)


chooseRole();
shirtInfo();
