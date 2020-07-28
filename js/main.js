// Preloader
window.addEventListener('load', function(){
    document.querySelector('.preloader').classList.add('opacity');

    setTimeout(() =>{
        document.querySelector('.preloader').style.display = 'none'
    }, 1000)
});

/* Portfolio filter */
const filterContainer = document.querySelector('.port-filter');
const btnFilter = filterContainer.children;
const portfolioItems = document.querySelectorAll('.port-item');

for(let btn of btnFilter){
   
    btn.addEventListener('click', function() {

        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add('active');

        let filterValue = this.getAttribute('data-filter');
        for(let portItem of portfolioItems){

            if(filterValue === portItem.getAttribute('data-category')){
                portItem.classList.remove('hide');
                portItem.classList.add('show');
            }else{
                portItem.classList.remove('show');
                portItem.classList.add('hide');
            }

            if(filterValue === 'all'){
                portItem.classList.remove('hide');
                portItem.classList.add('show');
            }
        }
    });
}

/* Light Box */

const lightBox = document.querySelector('.lightbox');
const captionText = document.querySelector('.caption-text');
const captionCounter = document.querySelector('.caption-counter');
const LightBoxImage = document.querySelector('.lightBox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxCaption = document.querySelector('.lightbox-caption');

let itemIndex = 0;

for(let i=0; i < portfolioItems.length; i++){
    portfolioItems[i].addEventListener('click', function() {
        itemIndex = i;

        toggleLightBox();

        changeItemContent();
    })
}

function toggleLightBox () {
    lightBox.classList.toggle('open');
}

function changeItemContent () {
    let imgSrc = portfolioItems[itemIndex].querySelector('.img img').getAttribute('src');
    LightBoxImage.src = imgSrc;
    captionText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    captionCounter.innerHTML = (itemIndex + 1) + " OF " + portfolioItems.length;

}

function nextItem () {
    if(itemIndex === portfolioItems.length - 1){
        itemIndex = 0
    }else{
        itemIndex++;
    }
    changeItemContent()
}

function prevItem () {
    if(itemIndex === 0){
        itemIndex = portfolioItems.length - 1
    }else{
        itemIndex--;
    }
    changeItemContent()
}

lightBox.addEventListener('click', function(e) {
    if(e.target === lightboxClose || e.target === lightBox || e.target === lightboxCaption){
        toggleLightBox()
    }
})