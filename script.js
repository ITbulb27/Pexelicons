
// preloader script............
    
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    setTimeout(function() {
        loader.style.display = "none";
        document.body.classList.add('scroll-enable');
        }, 0);
  
  
})

const visualTogglebutton = document.getElementById('visual-toggle-button');
const checkbox = document.getElementById('visual-toggle');

function visualMode(){
    if(checkbox.checked){
        visualTogglebutton.classList.toggle('lightmode');
        document.body.classList.toggle('lightcolors');
    }
    else{
        visualTogglebutton.classList.toggle('animate')
    }
}


const downloadBtn = document.querySelectorAll('.download-icon');
downloadBtn.forEach((currentBtn) =>{
    currentBtn.addEventListener("click",() =>{
        let fileFetch = currentBtn.previousElementSibling.querySelector('h5');
        var fileName = fileFetch.innerHTML;
        var image = currentBtn.previousElementSibling.querySelector('img');

        var imgPath = image.getAttribute('src');
       console.log(imgPath);
       saveAs(imgPath, fileName);  

    });
})

// Toggle image when clicking Pexelicons logo
const logoText = document.getElementById('logo-text');
const toggleImage = document.getElementById('toggle-image');
if(logoText && toggleImage) {
    logoText.style.cursor = 'pointer';
    logoText.addEventListener('click', function(e) {
        e.preventDefault();
        toggleImage.setAttribute('src', 'assets/images/rj.png');
    });
}
     