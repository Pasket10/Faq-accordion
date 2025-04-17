const faq = document.querySelector('.faq');
const svgPlus = document.querySelector(".svg-plus");
const answer = document.querySelector('.answer');
const svgMin = document.querySelector('.svg-min');

// console.log(faqAnswer);
faq.addEventListener("click", function(e){
    if (e.target.classList.contains("question") || e.target.classList.contains("svg-plus")) {

        const info = e.target.closest(".faq-item");
        const answer = info.querySelector(".answer");

        // const icon = e.target.closest(".icon");
        const svgPlus = info.querySelector(".svg-plus");
        const svgMin = info.querySelector(".svg-min");

        answer.style.display = 'block';

        svgMin.style.display = 'block';
        svgPlus.style.display = 'none';
        

    }else if (e.target.classList.contains("svg-min") || e.target.classList.contains("answer")) {
        const info = e.target.closest(".faq-item");
        const answer = info.querySelector(".answer");

        // const icon = e.target.closest(".icon");
        const svgPlus = info.querySelector(".svg-plus");
        const svgMin = info.querySelector(".svg-min");

        answer.style.display = 'none';

        svgMin.style.display = 'none';
        svgPlus.style.display = 'block';
        
    }
});