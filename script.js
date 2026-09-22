// Select the banner text and all favorite buttons
const favoriteText = document.getElementById('favorite-text');
const buttons = document.querySelectorAll('.fav-btn');

//Load stored data from localStorage when the page opens
const savedFavorite = localStorage.getItem('userFavorite');
if (savedFavorite) {favoriteText.textContent = savedFavorite;}

//Listen for a click on any of the favoirte buttons
buttons.forEach(button => {button.addEventListener('click', () =>{
    //Grab the pastry name from the buttons data attribute
    const pastryName = button.getAttribute('data-pastry');
    //Save it to local storage
    localStorage.setItem('userFavorite', pastryName);
    //update the display banner on top
    favoriteText.textContent = pastryName;
});
});

//Contact Form Validation
const contactForm=document.getElementById('contact-form');
const nameInput= document.getElementById('name');
const emailInput= document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');


if (contactForm) {contactForm.addEventListener('submit', (event) => {nameError.textContent = '';emailError.textContent='';
    let isValid= true;

    if(nameInput.value.trim() === '') {event.preventDefault();
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    }
if(emailInput.value.trim() === '') {event.preventDefault();
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
} else if (!emailInput.value.includes('@')) {event.preventDefault(); 
    emailError.textContent = 'Email must include an "@" symbol.';
    isValid = false;
}
    });
}