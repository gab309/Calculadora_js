//Captura de todos os elementos 
const inputnum1 = document.getElementById('num1');
const inputnum2 = document.getElementById('num2');
const botaoSomar = document.getElementById('btnSomar');
const botaoLimpar = document.getElementById('btnLimpar');
const pResultado = document.getElementById('resultado');

//Função para somar os números
//Declaração da função acontece com: palavra reservadas function + nome da função + parênteses
// function somar() {
//     //Trasnformando valores em tipo numérico.
//     const valor1 = Number(inputnum1.value);
//     const valor2 = Number(inputnum2.value);

//     const soma = valor1 + valor2;
//     //Sobrescrever o conteúdo do parágrafo resultado

//     pResultado.textContent= "Resultado: " + soma;



// }


//validações e tratamento de exeções
function somar() {
    const valor1 = inputnum1.value;
    const valor2 = inputnum2.value;

    if ( valor1 === "" || valor2 ===""){
        pResultado.textContent = "Preencha os dois campos";
        return;

    };
    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if ( isNaN(numero1) ||  isNaN(numero2)) {
        pResultado.textContent = "Digite apenas números válidos";
        return


    };
    

    const soma = numero1+numero2;
    pResultado.textContent = "Resultado" +soma;


}
//Evento que realiza a soma sendo chamado com click.
botaoSomar.addEventListener('click', somar);

function limpar() {
    inputnum1.value ="";
    inputnum2.value ="";
    pResultado.textContent = "Resultado";
};

botaoLimpar.addEventListener("click",limpar);


