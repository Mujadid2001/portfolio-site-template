document.addEventListener('mousemove', function(e) {
    const cursorBall = document.getElementById('cursorBall');
    cursorBall.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('nav .nav-class ul li');
    const bulletCircles = document.querySelectorAll('.bullet-circle');

  
    listItems.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        bulletCircles[index].classList.add('animate');
        navLine.classList.add('animate');
      });
  
      item.addEventListener('mouseout', () => {
        bulletCircles[index].classList.remove('animate');
        navLine.classList.remove('animate');
      });
      
    });
  });
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.pageYOffset;

    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});
  document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('nav ul li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');

            if (url) {
                // Navigate to the specified URL
                window.location.href = url;
            }
        });
    });
});



let cards = document.querySelectorAll('.card1');
let currentCardIndex = 0;

function showNextCard() {
  cards[currentCardIndex].classList.remove('show');
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  cards[currentCardIndex].classList.add('show');
}

setInterval(showNextCard, 3000); // call showNextCard every 3 seconds

