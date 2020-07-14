let modalLink = document.querySelector(".button-write");
let modalPopup = document.querySelector(".modal-feedback");
let modalClose = modalPopup.querySelector(".modal-feedback-close");
let modalForm = modalPopup.querySelector(".feedback-form");
let modalName = modalPopup.querySelector(".name-user");
let modalLogin = modalPopup.querySelector(".email-user");
let modalText = modalPopup.querySelector(".text-user");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}


modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");

    if (storage) {
        modalName.value = storage;
        modalLogin.focus();
    } else {
        modalName.focus();
    }
});


modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
    if (!modalName.value || !modalLogin.value || !modalText.value) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-error");
        modalPopup.offsetWidth = modalPopup.offsetWidth;
        modalPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalName.value);
        }
    }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            modalPopup.classList.remove("modal-show");
            modalPopup.classList.remove("modal-error");
        }
    }
});