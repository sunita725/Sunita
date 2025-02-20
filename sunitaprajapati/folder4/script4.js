function myMenufunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
window.onscroll = function(){headerShadow()};
function headerShadow(){
  const navHeader = document.getElementById("header");
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    navHeader.style.boxShadow = " 0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  }
  else{
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

// ========== text animation =================

let currentIndex = 0;
const texts = document.querySelectorAll('.typedText');

function showNextText() {
 
    texts[currentIndex].classList.remove('active');
    texts[currentIndex].classList.add('exiting');

    currentIndex = (currentIndex + 1) % texts.length;

    setTimeout(() => {
        texts[currentIndex].classList.add('active');
        texts[currentIndex].classList.remove('exiting');
    }, 1000); 
}

setInterval(showNextText, 3000);


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1500,
  reset: true
});


sr.reveal('.featured-text-card');
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });
sr.reveal('.project-box', { interval: 200 });


const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1500,
  reset: true
})

srLeft.reveal('.about-info', {delay: 100});
srLeft.reveal('.contact-info', {delay: 100});
srLeft.reveal('.skills-box', {delay: 100});
srLeft.reveal('.cols', {delay: 100});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);




