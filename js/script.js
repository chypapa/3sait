

//СЛАЙДЕР
const img = document.querySelector('.sl__image');
//const dots = document.querySelectorAll('.sl__dot');
// Создадим массив всех изображений
const imgArr = ['./img/1.png', './img/2.png', './img/4.png'];
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (currentIndex >= imgArr.length) {
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex < 0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);
}

function slide(index) {
    img.style.display = 'none';
    setTimeout(() => {
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];
    //Обновляем точки
    //updateDots(index);

}
// Активный статус 
// function updateDots(index) {
//     for (let dot of dots) {
//         dot.classList.remove('activ');
//     }
//     dots[index].classList.add('activ');
// }
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.sl__nav-left');
const btnRight = document.querySelector('.sl__nav-right');

btnLeft.addEventListener('click', () => {
    nextIndex(-1)
});
btnRight.addEventListener('click', () => {
    nextIndex(1)
});

//ТАБЫ
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Получаем табы (переключатели), родительский элемент табов, и контент табов
    let tab = document.querySelectorAll('.tabs-header-tab'),
        info = document.querySelector('.tabs-header'),
        tabContect = document.querySelectorAll('.tabs-content');
    //Функция которая скрывает контентные табы
    function hideTabContect(a) {
        for (let i = a; i < tabContect.length; i++) {
            tabContect[i].classList.remove("show");
            tabContect[i].classList.add("hide");
        }
    }
    //Скрываются все кроме 1 элемента
    hideTabContect(1);
    //Функция показа контентных табов
    function ShowTabContect(b) {
        if (tabContect[b].classList.contains('hide')) {
            tabContect[b].classList.remove("hide");
            tabContect[b].classList.add("show");
        }
    }

    //Создаем событие клика на родителя, используя делегирование событий
    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('tabs-header-tab')) {
            // Связь элементов при совпадении target
            for (let i = 0; i < tab.length; i++) {
                //если совпадают
                if (target == tab[i]) {
                    //Скрываем все табы
                    hideTabContect(0);
                    // удаляем класс активности таба
                    tab.forEach(item => {
                        item.classList.remove('active');
                    });
                    //элементу target(на который кликнули) добавляем активный класс 
                    target.classList.add('active');

                    //Совпадение по нумерации
                    ShowTabContect(i);

                    break
                }
            }
        }
    });



    //аккордион
    const accordion = () => {
        const btns = document.querySelectorAll(".accordion__rec");
        btns.forEach((btn) => {
            btn.addEventListener("click", function () {
                this.classList.toggle("active-style");
                //Следующий элемент
                this.nextElementSibling.classList.toggle("active-content");
                if (this.classList.contains("active-style")) {
                    this.nextElementSibling.style.maxHeight =
                        this.nextElementSibling.scrollHeight + 50 + "px";
                } else {
                    this.nextElementSibling.style.maxHeight = "0px";
                }
            });
        });

        // const blocks = document.querySelectorAll(".accordion-block");

        // blocks.forEach((block) => {
        // 	block.classList.add("animate__animated", "animate__bounceInUp");
        // });
        // btns.forEach((btn) => {
        // 	btn.addEventListener("click", function () {
        // 		if (!this.classList.contains("active-p")) {
        // 			btns.forEach((btn) => {
        // 				btn.classList.remove("active-p", "active-style");
        // 			});
        // 			this.classList.add("active-p", "active-style");
        // 		} else {
        // 			btns.forEach((btn) => {
        // 				btn.classList.remove("active-p", "active-style");
        // 			});
        // 		}
        // 	});
        // });
    };
    accordion();


    //модальное окно
    const cookies = document.getElementById("cookies");
    const cookiesBtn = document.getElementById("cookies__btn");

    cookiesBtn.addEventListener("click", function () {
        cookies.style.display = "none";
    });



    //фильтрация
    let filtr = function () {
        let filtrNav = document.querySelectorAll('.filtrs-nav__item'),
            filtrContent = document.querySelectorAll('.filtr'),
            filtrName;
        filtrNav.forEach(item => {
            item.addEventListener('click', selectfiltrNav)
        })
        function selectfiltrNav() {
            filtrNav.forEach(item => {
                item.classList.remove('is-active');
            })
            this.classList.add('is-active');
            filtrName = this.getAttribute('data-filtr-name');
            selectfiltrContent(filtrName);
        }
        function selectfiltrContent(filtrName) {
            filtrContent.forEach(item => {
                item.classList.contains(filtrName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            })
        }
    }

    filtr();

    const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
    
	// Глубокое клонирование со всем содержимым
	const menu = document.querySelector("#header__pis").cloneNode(1);
	// const body = document.body;
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
        
		// body.classList.toggle('noscroll');
	}
	function renderPopup() {
		popup.appendChild(menu);
        
	}
    console.log(menu);
	console.log(popup);
	console.log(hamb);
});