// PREMIEREMENT, ON S'OCCUPE DE LA NAVBAR EN LA RENDANT STICKY - FIXED
// on la déclare
let navBarFixed = document.getElementById('navbar') ;

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600

    ) {
        //fixer la navbar
        navBarFixed.classList.add('fixed-top','py-3') ;
        navBarFixed.style.transition = '3s' ;


    } else {
        navBarFixed.classList.remove('fixed-top','py-3') ;
        navBarFixed.style.transition = '3s' ;
    }
}

////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// MNT ON VA ANIMER LE CAROUSEL
let carousel = document.querySelector("#carousel .row");
let icons = document.querySelectorAll("#carousel i");

const moveCarousel = (pos) => {
   carousel.style.transform = `translateX(${-pos * 33.33}%)`;
};

for (let i = 0; i < icons.length; i++) {
   icons[i].addEventListener("click", () => {
       icons.forEach(element => {
           element.classList.add("far");
           element.classList.remove("fas");
       });
       icons[i].classList.add("fas");
       icons[i].classList.remove("far");
       moveCarousel(i);
   });
};

////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// CHGMNT DE COULEUR POUR LE BODY BLANC & NOIR
// on les déclare :
let NightStyle = document.getElementById("NightStyle");
let DayStyle = document.getElementById("DayStyle");
let body = document.body ;

// fonction pr changer la couleur, on enleve la class bg-white
let changeColor = () => {
   body.style.backgroundColor = "grey";
   body.style.transition = "3s";
   navBarFixed.style.backgroundColor ="grey" ;
   navBarFixed.classList.remove('bg-white') ;
   navBarFixed.style.transition ='3s' ;

}
NightStyle.addEventListener("click", changeColor)

//on remet la class bg-white
let changeColor2 = () => {
   body.style.backgroundColor = "";
   body.style.transition = "3s";
   navBarFixed.classList.add('bg-white') ;
   navBarFixed.style.transition ='3s' ;


}
DayStyle.addEventListener("click", changeColor2) ;