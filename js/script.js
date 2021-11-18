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
