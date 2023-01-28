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




presentationButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    presentation.classList.add('visible');
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });
};

idiomasButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    idiomas.classList.add('visible');
    
};

estudiosButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    estudios.classList.add('visible');
};

cursosButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    cursos.classList.add('visible');
};

habButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    hab.classList.add('visible');
    
};

hobbieButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    hobbie.classList.add('visible');
};

workButton.onclick = () => {
    block.forEach(el => el.classList.remove('visible') );
    work.classList.add('visible');
};

