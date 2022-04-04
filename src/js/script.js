const tabsBtn = document.querySelectorAll(".events__menu-item");
const tabsItems = document.querySelectorAll(".events__images-item");


tabsBtn.forEach(function(item) {
    item.addEventListener("click", function(){

        let tabId = item.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item){
            item.classList.remove("menu_active");
        });

        tabsItems.forEach(function(item){
            item.classList.remove("active");
        });

        item.classList.add("menu_active");
        currentTab.classList.add("active");

    });
});
