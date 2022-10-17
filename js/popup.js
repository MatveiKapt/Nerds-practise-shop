const popup = document.querySelector('.feedback-modal');
const popupOpenButton = document.querySelector('.contacts-button');
const popupCloseButton = popup.querySelector('.modal-close');
const feedbackForm = popup.querySelector('.feedback-form');
const userName = feedbackForm.querySelector('[name=client-name]');
const mail = feedbackForm.querySelector('[name=client-mail]');
const message = feedbackForm.querySelector('[name=client-message]');

let storageUserName = '';
let storageMail = '';
let isStorageSupport = true;

try {
  storageUserName = localStorage.getItem('userName');
  storageMail = localStorage.getItem('mail');
} catch (err) {
  isStorageSupport = false;
}

popupOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('feedback-modal-show');
  popup.classList.add('feedback-modal-translate');

  if (storageUserName) {
    userName.value = storageUserName;
    mail.focus();
  } else {
    userName.focus();
  }

  if (storageMail) {
    mail.value = storageMail;
  }
});

popupCloseButton.addEventListener('click', function () {
  popup.classList.remove('feedback-modal-show');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!userName.value || !mail.value || !message.value) {
    evt.preventDefault();
    popup.classList.add('feedback-modal-error')
    console.log('Не отправило')
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
      localStorage.setItem('mail', mail.value);
    };
  }
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('feedback-modal-show')) {
      popup.classList.remove('feedback-modal-show')
    }
  }
})
