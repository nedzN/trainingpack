let menu = document.querySelector('nav .menu');
    function anima(){
        let body = document.querySelector('body');
        body.classList.toggle('ativado')
    }

menu.addEventListener('click', anima);