let isModelOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.model__overlay--loading');
    const success = document.querySelector('.model__overlay--success');
    loading.classList += " model__overlay--visible";
    emailjs
    .sendForm(
        'service_x8sg13e',
        'template_tqyfb9i',
        event.target,
        'dIrI_ab40zwt_QpxO'
    )
    .then(() => {
        loading.classList.remove("model__overaly--visible");
        success.classList += " model__overlay--visible";
    })
    .catch(() => {
        loading.classList.remove("model__overaly--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on anoshmatti1@gmail.com"
        );
    });
}

let isModelOpen = false;
function toggleModel() { 
    if (isModelOpen) {
        isModelOpen = false;
        return document.body.classList.remove("model--open")
    }
    isModelOpen = true;
    document.body.classList += " model--open";
}

