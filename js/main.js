"use strict";
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  handleCommon();
});

const handleCommon = () => {
  $("#myCollapsible").collapse("hide");
  window.onscroll = function () {
    scrollFunction();
  };

  //  handle Form
  handleInputRangeOne();
  handleInputRangeTwo();

  handleSlide();
};

function scrollFunction() {
  //   const mybutton = document.getElementById("myBtnScroll");
  // const header = $("#navCustom");
  // const headerText = $("#navCustom");
  // if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  // ) {
  //     mybutton.style.display = "flex";
  //     // header.css("background-color", "#44b6eb");
  // } else {
  //     mybutton.style.display = "none";
  //     // header.css("background-color", "#fff");
  // }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const HandleMobile = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  // popupSubscribe
  //   $("#popupSubscribe").modal({ show: true });
  //   // form
  //   handleForm();
  //   // handleShow more
  //   handleShowMoreText();
};

const handleSlide = () => {
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

  $(".BoxItem4__body .box").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    dots: false,
    draggable: true,
    variableWidth: true,
    // autoplay: true,
  });

  $(".BoxItem7__slider .box").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    dots: false,
    draggable: true,
    variableWidth: true,
    autoplay: true,

    responsive: [
      {
        breakpoint: 768,
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
  });
  $('.CustomSlider__box .box').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
};

// handle Two Input Ranger Form

const handleFillColor = (var1, var2) => {
  const sliderOne = $(".form-double-range-slider .box .slider-1")[0];
  const sliderOneMax = sliderOne.max;
  // console.log(sliderOneMax, "a");
  // console.log(var1, var2);

  let percent1 = (parseInt(var1) / parseInt(sliderOneMax)) * 100;
  let percent2 = (parseInt(var2) / parseInt(sliderOneMax)) * 100;
  console.log(percent1, percent2);

  const SliderTrack = $(".form-double-range-slider .box .slider-track")[0];
  SliderTrack.style.background = `linear-gradient(to right, #fff ${percent1}% ,  #DA2127 ${percent1}% ,  #DA2127 ${percent2}%, #fff ${percent2}%)`;
  // sliderOne.max;
};

// One : min
// Two : max
let minGap = 0;
const handleInputRangeOne = () => {
  const sliderOne = $(".form-double-range-slider .box .slider-1")[0];
  // console.log(sliderOne, "sliderOne");
  const sliderTwo = $(".form-double-range-slider .box .slider-2")[0];
  // console.log(sliderTwo, "sliderTwo");

  const displayValOne = $(".form-double-range-slider .values #range1")[0];

  // const displayValTwo = $(".form-double-range-slider .values #range2")[0];

  if (!sliderOne || !sliderTwo || !displayValOne) return;

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }

  displayValOne.value = `${sliderOne.value}`;

  handleFillColor(sliderOne?.value || 0, sliderTwo?.value || 0);

  if (parseInt(sliderOne.value) === parseInt(sliderTwo.value)) {
    sliderTwo.style.visibility = "hidden";
  } else {
    sliderTwo.style.visibility = "visible";
  }
};
const handleInputRangeTwo = () => {
  const sliderOne = $(".form-double-range-slider .box .slider-1")[0];
  // console.log(sliderOne, "sliderOne");
  const sliderTwo = $(".form-double-range-slider .box .slider-2")[0];
  // console.log(sliderTwo, "sliderTwo");

  // const displayValOne = $(".form-double-range-slider .values #range1")[0];
  const displayValTwo = $(".form-double-range-slider .values #range2")[0];

  if (!sliderOne || !sliderTwo || !displayValTwo) return;

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = `${sliderTwo.value}`;

  handleFillColor(sliderOne?.value || 0, sliderTwo?.value || 0);
};
// Validator
const form = new Validator("#form-1");
form.onSubmit = function (data) {
  console.log(data);
};
function Validator(formSelector) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  var formElement = document.querySelector(formSelector);
  console.log("formElement", formElement);
  var ValidatorRules = {
    required: function (value) {
      return value ? undefined : "Vui lòng nhập trường này";
    },
    email: function (value) {
      var regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Vui lòng nhập ít nhất ${min} kí tự`;
      };
    },
  };
  var formRules = {};
  var inputs = formElement.querySelectorAll("[name][rules]");
  for (var input of inputs) {
    var rules = input.getAttribute("rules").split("|");
    for (var rule of rules) {
      var isHasInclude = rule.includes(":");
      var ruleInfo;
      if (isHasInclude) {
        ruleInfo = rule.split(":");
        rule = ruleInfo[0];
      }
      var ruleFunc = ValidatorRules[rule];

      if (isHasInclude) {
        ruleFunc = ruleFunc(ruleInfo[1]);
      }
    }
    if (Array.isArray(formRules[input.name])) {
      formRules[input.name].push(ruleFunc);
    } else {
      formRules[input.name] = [ruleFunc];
    }
    input.onblur = handleValidate;
    input.oninput = handleClearError;
  }
  function handleValidate(e) {
    var rules = formRules[e.target.name];
    var errorMessage;
    for (var rule of rules) {
      errorMessage = rule(e.target.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      var formGroup = getParent(e.target, ".form-group");
      if (formGroup) {
        formGroup.classList.add("invalid");
        var errorElement = formGroup.querySelector(".form-message");
        if (errorElement) {
          errorElement.innerText = errorMessage;
        }
      }
    }
    return !errorMessage;
  }
  function handleClearError(e) {
    var formGroup = getParent(e.target, ".form-group");
    if (formGroup.classList.contains("invalid")) {
      formGroup.classList.remove("invalid");
    }
    var errorElement = formGroup.querySelector(".form-message");
    if (errorElement) {
      errorElement.innerText = "";
    }
  }
  var _this = this;

  if (formElement) {
    var isValid = true;
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var inputs = formElement.querySelectorAll("[name][rules]");
      for (var input of inputs) {
        if (!handleValidate({ target: input })) {
          isValid = false;
        }
      }
      if (isValid) {
        var enableValues = formElement.querySelectorAll(
          "[name]:not([disabled])"
        );
        if (typeof _this.onSubmit === "function") {
          var formValues = Array.from(enableValues).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});
          _this.onSubmit(formValues);
        }
      }
    };
  }
}

// Validator
// ham xu ly show auth
const authContainer = document.querySelector(".js-modal-container");
const auth = document.querySelector(".auth");
const authBtn = document.querySelector(".btnShowModalLogin");
authContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
const authClose = document.querySelector(".js-auth-close");
console.log(authClose);
function hideFormAuth() {
  auth.classList.remove("open");
}
authClose.addEventListener("click", hideFormAuth);
auth.addEventListener("click", hideFormAuth);
// const modal = document.querySelector('.js-modal');
// modal.addEventListener('click', hideFormAuth)
function showFormAuth() {
  auth.classList.add("open");
  // alert('show')
}
console.log(authBtn, "authBtn");
authBtn.addEventListener("click", showFormAuth);
authBtn.onclick = function (e) {
  e.preventDefault();
};
// ham xu ly show auth

