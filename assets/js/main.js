function relogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let s = 0;
    let timer;

    function criaRelogio () {
        timer = setInterval(function() {
            s++; 
            relogio.innerHTML = criaHora(s);
        }, 1000);

    }

    function criaHora(s) {
        const data = new Date(s * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, 
            timeZone: 'UTC'
        }); 

    }

    document.addEventListener('click', function(event){
        const elemento = event.target;

        if(elemento. classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            s = 0;
        }
        if(elemento. classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if(elemento. classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            criaRelogio();
        }
    });
};

relogio();