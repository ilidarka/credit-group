

let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.popup-trigger'); 
let closePopupButton = document.getElementById('popup__close'); 
let closePopupButton2 = document.getElementById('popup__close2'); 
let nextPopupPaage = document.getElementById("pop_up");
let popup_info = document.querySelector(".popup_info");
let confirm_btn = document.querySelector('.confirm');
let confirmPopup = document.querySelector('.confirm_popup');
let confirmClose = document.querySelector('.confirm__close');
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popup.classList.add('show');
    })
});
document.addEventListener('click', (e) => { 
    if(e.target === popup) { 
      popup_info.classList.remove('hidden'); 
      confirmPopup.classList.add('hidden');
        popup.classList.remove('show'); 
        confirmPopup.classList.remove('show');
    }
});
document.addEventListener('click', (e) => { 
  if(e.target == (closePopupButton || closePopupButton2 )) { 
      popup_info.classList.remove('hidden'); 
      confirmPopup.classList.add('hidden');
      popup.classList.remove('show'); 
      confirmPopup.classList.remove('show');
      
  } 
});
document.addEventListener('click', (e) => { 
  if(e.target === confirm_btn) { 
      popup_info.classList.add('hidden'); 
      confirmPopup.classList.remove('hidden');
  } 
});
