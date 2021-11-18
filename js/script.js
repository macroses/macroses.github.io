// const swiper = new Swiper('.swiper', {
//     loop: true,
//     spaceBetween: 24,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 4,
//     breakpoints: {
//       320: {
//         slidesPerView: 1
//       },
//       520: {
//         slidesPerView: 2
//       },
//       768: {
//         slidesPerView: 3
//       },
//       1198: {
//         slidesPerView: 4
//       }
//     }
//   });


window.addEventListener('load', function() {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    arrows: {
      next: '.glider-next'
    },
    itemWidth: 280,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          itemWidth: 160,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
})
