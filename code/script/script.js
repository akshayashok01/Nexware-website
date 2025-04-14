const words = ["Enterprises", "Ecommerce", "SMEs"];
    let currentIndex = 0;
    const rotatingText = document.getElementById("rotating-text");

    function rotateWord() {
      // Animate out
      rotatingText.style.transform = "rotateX(90deg)";
      rotatingText.style.opacity = "0";

      // Wait for the animation to halfway complete
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        rotatingText.textContent = words[currentIndex];

        // Animate in
        rotatingText.style.transform = "rotateX(0deg)";
        rotatingText.style.opacity = "1";
      }, 300); // 300ms 
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
      // Step 1: Animate Out
      rotatingText2.style.opacity = "0";
      rotatingText2.style.transform = "translate3d(0, 50px, 0)";
    
      // Step 2: Change Text After Delay
      setTimeout(() => {
        currentIndex2 = (currentIndex2 + 1) % words2.length;
        rotatingText2.textContent = words2[currentIndex2];
    
        // Step 3: Animate In
        rotatingText2.style.transform = "translate3d(0, 0, 0)";
        rotatingText2.style.opacity = "1";
      }, 300);
    }
    
    // Trigger every 2 seconds
    setInterval(rotateWord2, 2000)

//odometer animation
    window.odometerOptions = {
        format: '(,ddd)',
        duration: 4000 // speed
      };
    
      // Trigger after DOM load 
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
      