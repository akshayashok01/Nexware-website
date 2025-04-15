// =============

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
  
if(window.pageYOffset > 100){
  toTop.classList.add("active");
}else{
  toTop.classList.remove("active");
}
})
toTop.addEventListener('click',()=>{
  window.scrollTo({
    top:scroll,
    behavior:"smooth"
    
  })
})

// ------------
const words = ["Enterprises", "Ecommerce", "SMEs"];
    let currentIndex = 0;
    const rotatingText = document.getElementById("rotating-text");

    function rotateWord() {
      // Animate out
      rotatingText.style.transform = "rotateX(90deg)";
      rotatingText.style.opacity = "0";

      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingText.textContent = words[currentIndex];

        // Animate in
        rotatingText.style.transform = "rotateX(0deg)";
        rotatingText.style.opacity = "1";
      }, 300); 
    }

    setInterval(rotateWord, 2000);

    const words2 = [
      "Web Development",
      "Mobile Development",
      "Software Testing",
      "Low Code || No Code"
    ];
    let currentIndex2 = 0;
    const rotatingText2 = document.getElementById("highlight");
    
    function rotateWord2() {
      rotatingText2.style.opacity = "0";
      rotatingText2.style.transform = "translate3d(0, 50px, 0)";
    
      
      setTimeout(() => {
        currentIndex2 = (currentIndex2 + 1) % words2.length;
        rotatingText2.textContent = words2[currentIndex2];
    
        
        rotatingText2.style.transform = "translate3d(0, 0, 0)";
        rotatingText2.style.opacity = "1";
      }, 300);
    }
    
    // Trigger 
    setInterval(rotateWord2, 2000)

//odometer animation
    window.odometerOptions = {
        format: '(,ddd)',
        duration: 4000 
      };
    
      // Trigger
      window.onload = function () {
        document.getElementById('counter1').innerHTML = 15;
        document.getElementById('counter2').innerHTML = 17;
        document.getElementById('counter3').innerHTML = 20;
        document.getElementById('counter4').innerHTML = 5;
      };

      // swiper

      document.addEventListener('DOMContentLoaded', function () {
        const swiper = new Swiper('.swiper', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      });
      // Add to script.js
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  const navBox = document.getElementById('nav-box');
  navBox.classList.toggle('active');
});