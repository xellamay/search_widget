function initSearchBtn() {
    const btnSearch = document.getElementById("search_btn");
    const input = document.getElementById("input");

    if (btnSearch) {
        btnSearch.addEventListener("click", function (){
            input.classList.toggle("search__active");
            input.focus();
        });
    }
}

function init() {
    initSearchBtn()
}

document.addEventListener("DOMContentLoaded", function (){
    init();
})

