
// Banner 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const banner = $('.banner__item:first-child');

const banner__arrow__left = $('.banner__arrow.left');
const banner__arrow__right = $('.banner__arrow.right');

const banner__total = $$('.banner__item');

banner.style.marginLeft = 0 + '%';

const banner__order__list = $('.banner__order-list');

let index__banner__active = 0;
    //Banner__arrow
const banner__slide__right = function (banner__length) {
    if (+banner.style.marginLeft.replace('%','') == ((banner__length-1)*100*(-1))) {
        banner.style.marginLeft = 0 + '%';
        index__banner__active = 0;
        set__banner__active(index__banner__active);
    } else {
        banner.style.marginLeft = +banner.style.marginLeft.replace('%','') - 100 + '%';
        index__banner__active = index__banner__active + 1;
        set__banner__active(index__banner__active);
    }
}

const banner__slide__left = function (banner__length) {
    if (+banner.style.marginLeft.replace('%','') == 0) {
        banner.style.marginLeft = ((banner__length-1)*100*(-1)) + '%';
        index__banner__active = (banner__length-1);
        set__banner__active(index__banner__active);
    } else {
        banner.style.marginLeft = +banner.style.marginLeft.replace('%','') + 100 + '%';
        index__banner__active = index__banner__active - 1;
        set__banner__active(index__banner__active);
    }
}

banner__arrow__right.onclick = function() {
    banner__slide__right(banner__total.length)
} ;
banner__arrow__left.onclick = function() {
    banner__slide__left(banner__total.length)
} ;
    //Banner__order__click
        //render
var html = ''

banner__total.forEach((element,index) => {
    
        html = html + '<div class="banner__order-item"></div>';
    
});

banner__order__list.innerHTML = html;

        //click
const banner__order__items = $$('.banner__order-item');

banner__order__items.forEach( function(item,index) {
    item.onclick = function() {
        banner.style.marginLeft = (index*100*(-1)) + '%';
        set__banner__active(index)
    }
})

    //Set__banner__active
const set__banner__active = function(index__active) {
    for (var i = 0; i < banner__total.length; i++) {
        banner__order__items[i].classList.remove('active');
    }
    banner__order__items[index__active].classList.add('active');
}

banner__order__items[0].classList.add('active');

// setInterval(function() {
//     banner__slide__right(banner__total.length)
// },10000);