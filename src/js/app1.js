
import css from '../css/app1.css';

particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
var ind = document.querySelectorAll(".menu__item");
        ind.forEach(function(elem){
            elem.addEventListener("click", function(){
                var story = document.getElementById("story_ind");
                var close = document.getElementById("story_close");
                ind.forEach(function(elem){
                    elem.classList.remove("is-selected");
                })
                this.classList.add("is-selected");
                story.classList.add("is-active");
                var content = document.getElementById('story_ind__content');
                content.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
                close.classList.add("is-active");
                close.addEventListener("click", function(){
                    story.classList.remove("is-active");
                    this.classList.remove("is-active");
                    ind.forEach(function(elem){
                        elem.classList.remove("is-selected");
                    })
                })
            })
        });