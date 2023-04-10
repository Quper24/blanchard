// dropdown
document.querySelectorAll('.dropdown-toggle').forEach(e => {
  e.addEventListener('click', e => {
    const menu = e.currentTarget.dataset.path;
    document.querySelectorAll('.dropdown__menu').forEach(e => {
      if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
        e.classList.remove('menu-active');
        e.classList.remove('open');
        document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.add('open');
        }, 0);
      }

      if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
        clearTimeout(intervalId);
        document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.remove('open');
        }, 0);
      }

      window.onclick = e => {
        if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
          return;
        } else {
          document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
          document.querySelector(`[data-target=${menu}]`).classList.remove('open');
        }
      }
    });
  });
});


// menu search
let search = document.querySelector('#search')
let headerSearch = document.querySelector('#header__search-left')
let searchExit = document.querySelector('#search__exit')

search.addEventListener('click',
  function () {
    headerSearch.classList.add('header__search-left--is-active');
    search.classList.add('search__open-left--is-active')
  })

searchExit.addEventListener('click',
  function () {
    headerSearch.classList.remove('header__search-left--is-active');
    search.classList.remove('search__open-left--is-active')
  })


/*burger-menu*/
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('.header').classList.toggle('stop')
  document.querySelector('.burger').classList.toggle('right__block-burger_active')
  document.querySelector('.header-middle-nav').classList.toggle('header-middle-nav_active')
  document.querySelector('.header').classList.toggle('header_active')
  document.querySelector('.header__btn').classList.toggle('header__btn_active')
  // close burger-menu, when click on link
  document.querySelectorAll('.header__link').forEach(function (navBtn) {
    navBtn.addEventListener('click', function () {
      document.querySelector('.header').classList.remove('stop')
      document.querySelector('.burger').classList.remove('right__block-burger_active')
      document.querySelector('.header-middle-nav').classList.remove('header-middle-nav_active')
      document.querySelector('.header').classList.remove('header_active')
      document.querySelector('.header__btn').classList.remove('header__btn_active')
    })
  })
});


// hero swiper
const container = document.querySelector(".swiper-container")
const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: "fade",
  allowTouchMove: false,
});


//  gallery swiper
new Swiper('.gallery__swiper', {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev",
  },

  speed: 800,

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    480: {
      spaceBetween: 30,
    },

    664: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    770: {
      slidesPerView: 2,
      spaceBetween: 38,
    },

    760: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 100,
    },

    1009: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});


// modal
const swiperSlides = document.querySelector('.gallery__swiper-wrapper');
const modal = document.querySelector('.modal');
const modalBtn = modal.querySelector('.modal__close-btn');

const animation = function (el, Class, flag) {
  if (flag === 'play') {
    el.style.display = 'flex';
    setTimeout(() => {
      el.classList.add(Class);
    }, 50);
  } else if (flag === 'reverse') {
    el.classList.remove(Class);
    setTimeout(() => {
      el.style.display = 'none';
    }, 700);
  }
};

const openModal = function ({ target }) {
  if (target.closest('.gallery__swiper-btn')) {
    const img = target.querySelector('img');
    const link = img.getAttribute('src');
    animation(modal, 'modal__block--active', 'play');
    modal.querySelector('img')
      .setAttribute('src', link);
    document.body.classList.add('modal__body-block--active');
  }
};

const closeModal = function () {
  animation(modal, 'modal__block--active', 'reverse');
  document.body.classList.remove('modal__body-block--active');
};

swiperSlides.addEventListener('click', openModal);
modalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', ({ target }) => {
  if (target === modal) closeModal();
});


// tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// events swiper
new Swiper(".events__swiper", {
  keyboard: {
    enabled: true,
  },

  speed: 800,

  navigation: {
    nextEl: ".events__swiper-button-next",
    prevEl: ".events__swiper-button-prev",
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: {
      boolean: true,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    665: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    // when window width is >= 1700px
    1700: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});


// project swiper
var Swiper = new Swiper(".project__swiper", {
  keyboard: {
    enabled: true,
  },
  speed: 800,
  navigation: {
    nextEl: ".project__swiper-button-next",
    prevEl: ".project__swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    },
    // when window width is >= 520px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    // when window width is >= 1500px
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },
});


// form
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      remote: 'Подходит',
      required: 'Требуется ввести имя',
      minLength: 'Нужно минимум два символа',
      maxLength: 'Слишком много букв!',
    },
    tel: {
      remote: 'Подходит',
      required: 'Требуется ввести телефон',
      minLength: 'Нужно 10 цифр',
      maxLength: 'Нужно не более 10 цифр',
      function: 'Введите только 10 цифр'
    }
  },
})


//tooltip - tippy
tippy('[data-tippy-content]');
