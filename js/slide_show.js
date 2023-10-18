// criando o slideshow da página home

// imagens dentro de um array
const imagens = [
    '/img/banner-velozes-e-furiosos-9.jpg',
    // '/img/sugestão2.jpg',
    // '/img/sugestao3.jpg',
];
//declarando a posição de inicio
let index = 0;
//declarando o tempo que as imagens vão passar em milisegundos
const SLIDE_SHOW_TIME_IN_MILLISECONDS = 3_000;

//criando a função chamada slideshow
function slideShow() {
    // pegando a imagem no HTML pelo id e carregando as imagens
    window.document.getElementById('SlideShowww').src = imagens[index];
    // incrementando as imagens ex. se inicia na posição 0, depois 1, 2 e assim por diante
    index++;
    // se a posição da imagem for imagem a quantidade de imagens no array
    if (index === imagens.length) {
        index = 0;
    }
    // setTimeout é uma função em javascript que executa o tempo nesse caso chama função e inicia o tempo
    window.setTimeout(slideShow, SLIDE_SHOW_TIME_IN_MILLISECONDS);
}
//executa toda a função slideShow
slideShow();

