const buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        const wave = document.createElement('span'),
            waveOffset = this.getBoundingClientRect();

        const waveY = e.pageY - waveOffset.top,
            waveX = e.pageX - waveOffset.left;

        wave.style.top = waveY + 'px',
            wave.style.left = waveX + 'px',
            wave.style.background = this.getAttribute('data-button-background');

        this.appendChild(wave);

        setTimeout(function () {
            wave.parentNode.removeChild(wave);
        }, 1500);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__menu')

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        burgerBtn.classList.toggle('active')

        if(burgerMenu.classList.contains('active')) {
            document.getElementById('body').style["overflow-y"] = 'hidden'
        } else {
            document.getElementById('body').style["overflow-y"] = 'auto'
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const showMenu = document.querySelectorAll('.show');
    const catalog = document.querySelectorAll('.catalog__list');

    for (let i = 0; i < showMenu.length; i += 1) {
        showMenu[i].addEventListener('click', () => {
            for (let j = 0; j < catalog.length; j += 1) {

                if (j === i) {
                    catalog[j].classList.add('active');
                } if (j !== i) {
                    catalog[j].classList.remove('active');
                }
            }

        })
    }
})




document.addEventListener('DOMContentLoaded', () => {
    const catalogClose = document.querySelector('.catalog__close')
    const showCatalog = document.querySelector('.header__catalog')
    const catalogMenu = document.querySelector('.catalog')
    const overlay = document.querySelector('.overlay')

    

    function showCatalogi() {
        catalogMenu.classList.toggle('active');
        overlay.classList.toggle('active')
        
    }

    function hideCatalogi() {
        catalogMenu.classList.remove('active');
        overlay.classList.remove('active');

    }



    showCatalog.addEventListener('click', () => {
        showCatalogi()
        if(catalogMenu.classList.contains('active')) {
            
            document.getElementById('body').style["overflow-y"] = 'hidden'
        } else {
            document.getElementById('body').style["overflow-y"] = 'auto'
        }
        

    })

    catalogClose.addEventListener('click', () => {
        hideCatalogi()
        document.getElementById('body').style["overflow-y"] = 'auto'
    })

    overlay.addEventListener('click', () => {
        hideCatalogi()
        document.getElementById('body').style["overflow-y"] = 'auto'
    })



})


let date = document.querySelector('.date')

if (date = document.querySelector('.date')) {

    var d = new Date();

    var month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря");

    date.innerHTML = 'Прайс обновлен ' + " " + d.getDate() + " " + month[d.getMonth()]
        + ", " + "запчасти в наличии"

}


const tab = () => {
    const tabContent = document.querySelectorAll('.choose-tab__content')
    const tabNav = document.querySelectorAll('.tabs')

    let tabName = ''

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav(e) {
        e.preventDefault()
        tabNav.forEach(item => {
            item.classList.remove('active')
        })
        this.classList.add('active')
        tabName = this.getAttribute('data-tab-name')
        selectTabContent(tabName)
    
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active')
            
        })
    }

}

tab();

import Swiper from 'swiper/bundle';

var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });