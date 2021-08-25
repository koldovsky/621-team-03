(function () {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            let panel =  this.nextElementSibling;
            this.classList.toggle("active");
            for(let j = 0; j <accordions.length; j++){
                if(j!==i){
                    accordions[j].classList.remove("active");
                    accordions[j].nextElementSibling.style.display = "none";
                }
            }
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
})();