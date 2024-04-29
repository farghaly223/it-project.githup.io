
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  function mouseover(obj) {
    obj.innerHTML = ''
    obj.style.color = 'green'
  }
  function mouseout(obj){
    obj.style.display = 'block'
    obj.style.color = 'black'
  
  }
  function mouseoverl(logo) {
    logo.innerHTML = ''
    logo.style.color = 'red'
  }
  function mouseoutl(logo){
     
    logo.style.display = 'block'
    logo.style.color = 'black'
  
  }
  
  