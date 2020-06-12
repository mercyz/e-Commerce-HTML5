

$(".background_bg").each(function() {
    let attr = $(this).attr('data-img-src');
    if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background-image', 'url(' + attr + ')');
    }
});

const productToggleLinks = document.querySelector(".nav-tabs")
const productContainer = document.querySelectorAll('.tab-pan')
let tabCounter = 0;
productToggleLinks.addEventListener('click', function(e){
    productContainer.forEach((item, indx) => {
        if(indx == tabCounter){
            item.classList.add('active_tab')
            console.log(item)
            return
        }else{
            item.classList.remove('active_tab');
        }
    })
    tabCounter += 1;
})

