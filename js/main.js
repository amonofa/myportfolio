let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
}

window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

// Reviews swipper 

let swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// email js 

function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let tel = document.querySelector('.phone')
    let msg  = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(name.value == "" || email.value == "" || tel.value == "" || msg.value == "" ) {
            emptyerror();
        }else {
            sendmail(name.value, email.value, tel.value, msg.value);
            success();
        }

        name.value = ''
        email.value = ''
        tel.value = ''
        msg.value = ''

    } )
}

validate();

function sendmail(name, email,tel,msg) {
    emailjs.send("service_lecp5xa","template_2s2n86q",{
        to_name: name,
        from_name: email,
        phone_number: tel,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Error...",
        text: "Fields cannot be empty",
        icon: "error"
    })
}

function success() {
    swal({
        title: "Email send successfully",
        text : "We try to reply in 24 hours",
        icon: "success"
    })
}

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
})

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400)
})