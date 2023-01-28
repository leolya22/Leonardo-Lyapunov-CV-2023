const presentationButton = document.getElementById("presentation_button");
const presentation = document.getElementById("presentation");

const idiomasButton = document.getElementById("idiomas_button");
const idiomas = document.getElementById("idiomas");

const estudiosButton = document.getElementById("estudios_button");
const estudios = document.getElementById("estudios");

const cursosButton = document.getElementById("cursos_button");
const cursos = document.getElementById("cursos");

const habButton = document.getElementById("hab_button");
const hab = document.getElementById("hab");

const hobbieButton = document.getElementById("hobbie_button");
const hobbie = document.getElementById("hobbie");

const workButton = document.getElementById("work_button");
const work = document.getElementById("work");

let block = Array.from( document.getElementsByClassName("block") );

let buttons = Array.from( document.getElementsByClassName("nav_item") );



buttons.forEach( (button, index) => {
    button.onclick = () => {
        block.forEach(el => el.classList.remove('visible') );
        block[index].classList.add('visible');
    };
});