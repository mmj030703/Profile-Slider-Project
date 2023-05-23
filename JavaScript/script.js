//////////////////////////////////////////////////////////////////////////////////////// 
//* Way 1 :: Naive Way


const profiles = document.querySelectorAll('.review-profile');
const buttons = document.querySelectorAll(".btn");
let currentProfile = 0;
let i = 0; 

//* onclick for previous and next buttons
buttons.forEach((button) => {
    button.addEventListener('click', (eventObj) => {
        profiles[currentProfile].style.display = "none";
        if(eventObj.target.classList.contains("previous-btn")) {
            currentProfile = (profiles.length + (currentProfile - 1)) % profiles.length;
            i++;
        }
        else if(eventObj.target.classList.contains("next-btn")) {
            currentProfile = (currentProfile + 1) % profiles.length;
        }
        profiles[currentProfile].style.display = "grid";
    });
});

//* onclick for surprise me button
const surpriseBtn = document.querySelector('.surprise-me');
let randomProfile = profiles[currentProfile];

surpriseBtn.addEventListener('click', () => {
    profiles[currentProfile].style.display = "none";
    currentProfile = Math.floor(Math.random() * profiles.length);
    profiles[currentProfile].style.display = "grid";
});
//////////////////////////////////////////////////////////////////////////////////////// 

