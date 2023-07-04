// animation num yrs
var number = document.querySelector('.num-yrs'),
    numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML,
    end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
            number.innerHTML = ++start;
            if (start == end) {
                clearInterval(interval);
            }
        }, 40);
    }
});

// animation num product
var number2 = document.querySelector('.num-prod'),
    numberTop2 = number2.getBoundingClientRect().top,
    start2 = +number2.innerHTML,
    end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop2 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval2 = setInterval(function() {
            number2.innerHTML = ++start2;
            if (start2 == end2) {
                clearInterval(interval2);
            }
        }, 30);
    }
});

// animation num client
var number3 = document.querySelector('.num-cl'),
    numberTop3 = number3.getBoundingClientRect().top,
    start3 = +number3.innerHTML,
    end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numberTop3 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        var interval3 = setInterval(function() {
            number3.innerHTML = ++start3;
            if (start3 == end3) {
                clearInterval(interval3);
            }
        }, 40);
    }
});
// анімація main, header
function offset(el) {
    const rect = el.getBoundingClientRect();

    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    const offsetLeft = rect.x + scrollLeft;
    const offsetTop = rect.y + scrollTop;
  
        return {
            top: offsetTop,
            left: offsetLeft,
        };
    }
const animItems = document.querySelectorAll('._animItems');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  
  function animOnScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 6;
      let animItemPoint = windowHeight - windowHeight / animStart;
      
      if (animItemHeight > windowHeight) {
        animItemPoint = windowHeight - windowHeight / animStart;
      }
      
      if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if(!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active');
        }
      }
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
// const image = document.getElementById("main__imgId");
// const images = ["./pexels-olia-danilevich-4974915-e1599053299951.jpg", "./about-us-img.jpg"];
// let currentImage = 0;

// function changeImage() {
//   image.src = images[currentImage];
//   currentImage = (currentImage + 1) % images.length;
// }

// setInterval(changeImage, 5000);

//Menu Burger

const menuBurger = document.querySelector('#menu_checkbox');
if (menuBurger) {
  const menuBody = document.querySelector('.header_nav_container');
  console.log(menuBody);
  
  menuBurger.addEventListener('change', function (e) {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_activated', this.checked);
  });
  
  const link = document.querySelector('.header__nav');
  console.log(link);
  
  link.addEventListener('click', function (event) {
    menuBurger.checked = false; // Знімаємо позначку з чекбокса
    document.body.classList.remove('_lock');
    menuBody.classList.remove('_activated');
  });
}

/* Portfolio */
/* window.addEventListener('resize', function(){
    const screenWidth = window.screen.width
    const portfolioContentExamples = document.querySelector(".portfolioContent_Examples")
        if (screenWidth < 1000){
            portfolioContentExamples.classList.remove("portfolioContent_Examples")
        }
        
        else if (screenWidth > 1000){
            portfolioContentExamples.classList.add("portfolioContent_Examples")
        }
}) */

/* ффыфафыаф */


/* Portfolio */
