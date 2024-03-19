document.getElementById('paisBtn').addEventListener('click', function () {
    this.classList.add('selecionado');
    document.getElementById('profissionalBtn').classList.remove('selecionado');

    // Troca a cor de fundo dos elementos .contato-dados e .contato-formulario
    document.querySelector('.contato-dados').style.backgroundColor = '#D47833';
    document.querySelector('.contato-formulario').style.backgroundColor = '#ECB955';
});

document.getElementById('profissionalBtn').addEventListener('click', function () {
    this.classList.add('selecionado');
    document.getElementById('paisBtn').classList.remove('selecionado');

    // Troca a cor de fundo dos elementos .contato-dados e .contato-formulario
    document.querySelector('.contato-dados').style.backgroundColor = '#ECB955';
    document.querySelector('.contato-formulario').style.backgroundColor = '#D47833';
});

function selecionarAba(elemento) {
    // Remove a classe 'selecionado' de todos os elementos .user-type
    let abas = document.querySelectorAll('.user-type div');
    abas.forEach(aba => {
        aba.classList.remove('selecionado');
    });

    // Adiciona a classe 'selecionado' apenas ao elemento clicado
    elemento.classList.add('selecionado');

    // Verifica qual aba está selecionada e troca a cor de fundo dos elementos .contato-dados e .contato-formulario
    if (elemento.id === 'paisBtn') {
        document.querySelector('.contato-dados').style.backgroundColor = '#D47833';
        document.querySelector('.contato-formulario').style.backgroundColor = '#ECB955';
    } else if (elemento.id === 'profissionalBtn') {
        document.querySelector('.contato-dados').style.backgroundColor = '#ECB955';
        document.querySelector('.contato-formulario').style.backgroundColor = '#D47833';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona a classe 'selecionado' ao botão .pais
    document.getElementById('paisBtn').classList.add('selecionado');
});

