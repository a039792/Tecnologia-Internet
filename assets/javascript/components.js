// Função para carregar o Menubar
function carregarMenubar() {
    fetch('../components/Menubar.html')
        .then(response => response.text())
        .then(data => {
            const cabecalho = document.getElementById('cabecalho');
            if (cabecalho) {
                cabecalho.innerHTML = data;
            }
        })
        .catch(erro => console.error('Erro ao carregar o Menubar:', erro));
}

// Função para carregar o Rodapé
function carregarRodape() {
    fetch('../components/Rodape.html')
        .then(response => response.text())
        .then(data => {
            const rodape = document.getElementById('rodape');
            if (rodape) {
                rodape.innerHTML = data;
            }
        })
        .catch(erro => console.error('Erro ao carregar o Rodapé:', erro));
}

// Chamar as funções quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarMenubar();
    carregarRodape();
});
