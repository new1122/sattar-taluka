let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // section.forEach(sec =>{
    //     let top = window.scrollY;
    //     let height = sec.offsetHeight;
    //     let offset = sec.offsetTop - 150;
    //     let id = sec.getAttribute('id');

    //     if(top => offset &&  top < offset + height){
    //         navLinks.forEach(links =>{
    //             links.classList.remove('active');
    //             document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
    //         });
    //     };
    // });
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper("#forslide", {
    spaceBetween: 400,
    centeredSlieds: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    loop:true,
})

var swiper = new Swiper("#forslide2", {
    spaceBetween: 30,
    centeredSlieds: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    loop:true,
})