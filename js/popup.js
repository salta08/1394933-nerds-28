let modalLink = document.querySelector(".button-write");
let popup = document.querySelector(".modal-feedback");
let modalClose = popup.querySelector(".modal-feedback-close");
let modalForm = popup.querySelector(".feedback-form");
let modalName = popup.querySelector(".name-user");
let modalLogin = popup.querySelector(".email-user");
let modalText = popup.querySelector(".text-user");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}


modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        modalName.value = storage;
        modalLogin.focus();
    } else {
        modalName.focus();
    }
});


modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
    if (!modalName.value || !modalLogin.value || !modalText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalName.value);
        }
    }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
