var swiper = new Swiper(".mySwiper", {
    slidesPerView:2,
    loop:true,

        autoplay:{
            delay:2500,
            disableOnInteraction:true,
         },
         speed:700,


    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpointes:{
        786:{
            slidesPerView:1,
        },
        992:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:4,
        },
    }
  });