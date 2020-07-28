
const skinStyles = document.querySelectorAll('.skin-style');

function setActiveStyle(color){
    for(let skin of skinStyles){
        if(color === skin.getAttribute('title')){
            skin.removeAttribute('disabled')
        }else{
            skin.setAttribute('disabled', 'true')
        }
    }
}

const styleSwitcherToggle = document.querySelector('.style-switcher__toggle');
const styleSwitcher = document.querySelector('.style-switcher')

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open')
});

const bodySkin = document.querySelectorAll('.body-skin');

for(let item of bodySkin){
    item.addEventListener('change', function() {
     if(this.value === 'dark'){
         document.body.className = 'dark';
     }else{
        document.body.className = '';
     }
    })
    
}


const nav = document.querySelector('.nav').children;
const allSections = document.querySelectorAll('.section');

for(let link of nav){
    const a = link.querySelector('a');
    a.addEventListener('click', function(){

        // remove Bact-section class from section
        for(let section of allSections){
            section.classList.remove('back-section')
        }     

        for(let i=0; i < nav.length; i++){
            if(nav[i].querySelector('a').classList.contains('active')){
                // add back-section class to section
                allSections[i].classList.add('back-section')
            }
            // Remove active Class from links
            nav[i].querySelector('a').classList.remove('active');
        }
        // Add Active Class to links
        this.classList.add('active');
        showSection(this);
    })
}

// Show Sections
function showSection(element){
    for(let section of allSections){
        section.classList.remove('active')
    }
     const target =  element.getAttribute('href').split('#')[1]
     document.querySelector('#'+target).classList.add('active')
}


const navToggleBtn = document.querySelector('.nav-toggle');
const aside = document.querySelector('.aside');


navToggleBtn.addEventListener('click', asideSectionToggle);


function asideSectionToggle () {
    aside.classList.toggle('open');
    navToggleBtn.classList.toggle('open');
    for(let section of allSections){
        section.classList.toggle('open')
    }
}