let textInput = document.getElementById("text-input");
let progres = document.querySelector(".progres");
let counter = document.querySelector(".counter");
let maxLength = textInput.getAttribute("maxLength");

counter.innerHTML = maxLength;

textInput.oninput = function(){
    counter.innerHTML= maxLength - this.value.length;
    counter.innerHTML == 0 ? counter.classList.add("zero"):counter.classList.remove("zero");
    //set the progres
    progres.style.width=`${(this.value.length * 100/maxLength)}%`;
};
