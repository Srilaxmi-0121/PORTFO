let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector('.navbar')
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.screenY;
        let offset=sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >=offset && top <offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')

            })
        }
    })
}

menuIcon.onClick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


function sendEmail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        number  : document.getElementById("number").value
    }
    emailjs.send("service_e65hjyb","template_qbfdmcr",params).then(alert("Your message sent successfully!"))
}