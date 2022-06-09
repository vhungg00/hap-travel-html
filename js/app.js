$(document).ready(function () {
  $(".reviews-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.9998 28.6695C22.8098 28.6695 22.6198 28.5995 22.4698 28.4495L15.9498 21.9295C14.8898 20.8695 14.8898 19.1295 15.9498 18.0695L22.4698 11.5495C22.7598 11.2595 23.2398 11.2595 23.5298 11.5495C23.8198 11.8395 23.8198 12.3195 23.5298 12.6095L17.0098 19.1295C16.5298 19.6095 16.5298 20.3895 17.0098 20.8695L23.5298 27.3895C23.8198 27.6795 23.8198 28.1595 23.5298 28.4495C23.3798 28.5895 23.1898 28.6695 22.9998 28.6695Z" fill="#777777"/>
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEDEDE"/>
    </svg>
    </button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9101 28.6695C16.7201 28.6695 16.5301 28.5995 16.3801 28.4495C16.0901 28.1595 16.0901 27.6795 16.3801 27.3895L22.9001 20.8695C23.3801 20.3895 23.3801 19.6095 22.9001 19.1295L16.3801 12.6095C16.0901 12.3195 16.0901 11.8395 16.3801 11.5495C16.6701 11.2595 17.1501 11.2595 17.4401 11.5495L23.9601 18.0695C24.4701 18.5795 24.7601 19.2695 24.7601 19.9995C24.7601 20.7295 24.4801 21.4195 23.9601 21.9295L17.4401 28.4495C17.2901 28.5895 17.1001 28.6695 16.9101 28.6695Z" fill="#777777"/>
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEDEDE"/>
    </svg>
    </button>`,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          infinite: true,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});
