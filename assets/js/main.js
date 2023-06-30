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