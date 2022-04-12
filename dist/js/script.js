// const tabsBtn = document.querySelectorAll(".events__menu-item");
// const tabsItems = document.querySelectorAll(".events__images-item");


// tabsBtn.forEach(function(item) {
//     item.addEventListener("click", function(){

//         let tabId = item.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId);

//         tabsBtn.forEach(function(item){
//             item.classList.remove("menu_active");
//         });

//         tabsItems.forEach(function(item){
//             item.classList.remove("active");
//         });

//         item.classList.add("menu_active");
//         currentTab.classList.add("active");

//     });
// });


$('div.events__menu').on('click', '.events__menu-item:not(.menu_active)', function() {
    $(this)
        .addClass('menu_active').siblings().removeClass('menu_active')
        .closest('div.container').find('div.events__images').removeClass('events__images-active').eq($(this).index()).addClass('events__images-active');
});

$('.advantages__readmore').on('click', function() {
    $('.advantages__text').removeClass('advantages__text-overlay')
})

const block = `<div class="suspension__catalog-items">
<div class="suspension__catalog-item">
    <div class="suspension__catalog-imgae"><img src="img/suspension/susp_item.png" alt="img"></div>
    <div class="suspension__catalog-category">Подвеска</div>
    <div class="suspension__catalog-brand">Dolce & Gabanna</div>
    <button class="button suspension__button-price">175 000 $</button>
</div>
<div class="suspension__catalog-item">
    <div class="suspension__catalog-imgae"><img src="img/suspension/susp_item.png" alt="img"></div>
    <div class="suspension__catalog-category">Подвеска</div>
    <div class="suspension__catalog-brand">Dolce & Gabanna</div>
    <button class="button suspension__button-price">175 000 $</button>
</div>
<div class="suspension__catalog-item">
    <div class="suspension__catalog-imgae"><img src="img/suspension/susp_item.png" alt="img"></div>
    <div class="suspension__catalog-category">Подвеска</div>
    <div class="suspension__catalog-brand">Dolce & Gabanna</div>
    <button class="button suspension__button-price">175 000 $</button>
</div>
</div>`;

$(".show-more").on("click", function() {
    $(".suspension__catalog").append(block)
})


$('div.hamburger').on('click', () => {
    if ($('div.hamburger').hasClass('hamburger-active')) {
        $('.menu').removeClass('menu-active');
        $('.hamburger-active').removeClass('hamburger-active');
    } else {
        $('.menu').addClass('menu-active');
        $('.hamburger').addClass('hamburger-active');
    }
})

// $('.hamburger-active').on('click', () => {
//     $('.menu').removeClass('menu-active')
//     $('.hamburger-active').removeClass('hamburger-active')
// })
