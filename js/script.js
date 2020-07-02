const nameInput = document.getElementById('name');
const otherJob = document.getElementById('other-title');

nameInput.focus();

otherJob.style.display = 'none';

const shirtInfo = () => {

    /** 
     * Create a function to show the Tshirt colors based on user selection:
     * Do not show color options until a drop down option is selected by the user (defualt is hidden)
     * Select design dropdown options
     * dependng on which one is selected show the relavent options to that selection using an if/Else statement  
    **/

    //refactor this code when I'm done with the rest

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
            designShirtOption[1].style.display = 'block';
            designShirtOption[2].style.display = 'block';
            designShirtOption[3].style.display = 'none';
            designShirtOption[4].style.display = 'none';
            designShirtOption[5].style.display = 'none';
        } else if (themeSelect[2].selected === true) {
            designShirtColor.style.display = 'block';
            designShirtLabel.style.display = 'block';
            designShirtOption[3].style.display = 'block';
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
shirtInfo();
