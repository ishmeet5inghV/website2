const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})

// window.addEventListener("scroll", setScrollVar)
// window.addEventListener("resize", setScrollVar)

// function setScrollVar(){
//     const htmlElement = document.documentElement;
//     // how far we go this below line gives that(pixels of how far scrolled) before divide
//     const percentOfScreenHeightScrolled = htmlElement.scrollTop / 
//     htmlElement.clientHeight;
//     // console.log(Math.min(percentOfScreenHeightScrolled*100,100));
//     // one screen of website - htmlElement.clientHeight

//     htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
// }

// setScrollVar();

let section = document.querySelectorAll('section');
window.onscroll = () =>{
    section.forEach(sec => {      
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    if(top >= offset && top < offset + height){
      sec.classList.add('show-animate');
    }else{
      sec.classList.remove('show-animate');
    }
    console.log(`top = ${top}`);
    console.log(`offset = ${offset}`);
    console.log(`height = ${height}`);
    console.log(top >= offset && top < offset + height);
    });
}