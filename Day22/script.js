const anchorLinks = document.querySelectorAll('a[href*="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

const productCards = document.querySelectorAll('.card');

productCards.forEach((card) => {
  card.addEventListener('click', () => {
    productCards.forEach((otherCard) => {
        otherCard.classList.remove('card_box');
        otherCard.style.transition = 'transform 0.5s ease-in-out';
      });
      card.classList.add('card_box');    
  });   
});