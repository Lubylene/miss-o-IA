const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual atitude contribui para a redução da poluição da água?",
        alternativas: [
            {
                texto: "Evitar o descarte de lixo, óleo e produtos químicos em rios e lagos.",
                afirmacao: "Pessoa consciente e responsável, que se preocupa com a preservação ambiental."
                afirmacao: "Pessoa cuidadosa e sustentável, que busca reduzir impactos negativos no meio ambiente."
            },
            {
                texto:  "Participar de ações de limpeza e preservação de rios e nascentes.",
                afirmacao: "Pessoa participativa e colaborativa, que contribui ativamente para melhorias ambientais."
                afirmacao: "Pessoa engajada e solidária, que valoriza ações coletivas em benefício da comunidade."
            }    
           
        ]
    },
    {
       
            enunciado: "Quais são consequências da poluição da água?",
",
            alternativas: [
                {
                    texto: "Redução da qualidade da água e aumento dos riscos à saúde"
                    afirmacao: "Pessoa atenta e preventiva, que reconhece a importância da água de qualidade."
                    afirmacao: "Pessoa responsável com a saúde, que compreende a relação entre ambiente e qualidade de vida."
                },
                {
                    texto:  "Desequilíbrio dos ecossistemas aquáticos e perda de biodiversidade.",
                    afirmacao: "Pessoa ecologicamente consciente, que reconhece a importância dos ecossistemas."
                    afirmacao: "Pessoa protetora da natureza, que valoriza a preservação dos animais e das plantas."
                }    
               
            ]
        },
        {
            enunciado: "Como a sociedade pode contribuir para preservar a água?",

            alternativas: [
                {
                    texto: "Evitando o desperdício e reduzindo o consumo excessivo de água.",
                    afirmacao: "Pessoa econômica e consciente, que utiliza os recursos naturais de forma responsável."
                    afirmacao: "Pessoa sustentável e responsável, que procura adotar hábitos que diminuam o desperdício."
                },
                {
                    texto:    "Incentivando a educação ambiental e a conscientização da população.",
               
                    afirmacao: "Pessoa educadora e comunicativa, que gosta de compartilhar informações importantes."
                    afirmacao: "Pessoa engajada e transformadora, que acredita que o conhecimento pode contribuir para mudanças positivas."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio (opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}

function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

