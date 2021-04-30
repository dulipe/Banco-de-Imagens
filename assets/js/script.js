const container = document.getElementById('container')
const inputPesquisar = document.getElementById("inputPesquisar")
const btnBuscar = document.getElementById("btnBuscar")

btnBuscar.addEventListener("click", recuperarValor);

//RECUPERA VALOR DO INPUT
function recuperarValor(){
    
    let textoPesquisa = inputPesquisar.value
    verificaTexto(textoPesquisa,)
    
}

// FAZ A VERIFICAÇÃO SE O TEXTO É VALIDO
function verificaTexto(textoPesquisa,){
    let qtdNumero = 7
    if(textoPesquisa.trim() !== ""){
        limpar()
        pegarImagens(textoPesquisa,qtdNumero)

    }else{
        console.log("Invalido")
    }
}

//PEGAR IMAGENS TRATADAS DA URL
function pegarImagens(textoPesquisa = "",qtdNumero = 7){
    
    const imagens = [];

    for(let i = 0; i < qtdNumero; i++){
        const urlImagem = montarUrl(textoPesquisa)

        imagens.push(urlImagem);
    }
    
    montarLayout(imagens);
}
pegarImagens()

//TRATAMENTO DA URL
function montarUrl(textoPesquisa = ""){
    const urlBase = "https://source.unsplash.com/random/";
    let urlTratada = `${urlBase}${gerarNumeroAleatorio()}x${gerarNumeroAleatorio()}`;

    if(textoPesquisa !== ""){
        urlTratada = `${urlBase}${gerarNumeroAleatorio()}x${gerarNumeroAleatorio()}/?${textoPesquisa}`;
    }

    return urlTratada
}

//LISTAR IMAGENS NO TEMPLATE
function montarLayout(imagens){
    const listaImagens = imagens
    listaImagens.forEach(function(imagem){
        const img = document.createElement('img');
        img.src = imagem;
        container.appendChild(img);
    });
}

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 10) + 300;
}

function limpar(){
    container.innerHTML = ""
}