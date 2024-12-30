function play() {
    document.getElementById("AudioAtocarNoInicio").play();
}


console.log('js funcionando');

let acertouOuErrou = document.getElementById('acertouOuErrou');
acertouOuErrou.style.display = 'none';


let pontosGuardados = [];
let tentativas = 3;
let tentativasGuardadas = [];

let textoTentativa = document.getElementById('tentativas');


let bodyAlteracao = document.getElementById('bodyAlteracao');
let sigaRedeSociais = document.getElementById('sigaRedeSociais');


let miranhaGanhouJogo = document.getElementById('miranhaGanhouJogo');
let botaoComecarJogo = document.getElementById('botaoComecarJogo');
let botaoReiniciarJogo = document.getElementById('botaoReiniciarJogo');

let tuturialInicial = document.getElementById('tuturialInicial');
let tituloDinamico = document.getElementById('titulo-dinamico');
let tituloDinamicoInicial = document.getElementById('titulo-dinamico-inicial');


let pontos = document.getElementById('pontos');
let suasTentativas = document.getElementById('tentativas');

let divDoPontoETentativas = document.getElementById('divDoPontoETentativas');

let divPaiDosMiranhas = document.getElementById('imagensDosMiranhasDivPai');
divPaiDosMiranhas.style.display = 'none';


function novaPartida() {
    play();
    
        document.getElementById('bodyAlteracao').style.backgroundImage = "url(./src/img/varios-miranhas.jpg)";

    
   
   

    tuturialInicial.style.display = 'none';
    divPaiDosMiranhas.style.display = 'flex';
    tituloDinamicoInicial.style.display = "none"
    botaoComecarJogo.innerText = 'Novo Jogo'
    let numeroAleatorio = (Math.floor(Math.random(1) * 20));
    console.log(numeroAleatorio);
    

if (numeroAleatorio == 0) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">2 impostores</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
   
<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
         <div id="miranhaImpostor1" class="imagems impostor">
            <img src="./src/img/kk8.jpg" alt="homem aranha">
        </div>
   
`;
}

if (numeroAleatorio == 1) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
         <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>
   
`;

}
if (numeroAleatorio == 2) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>

<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
    
`;

}

if (numeroAleatorio == 3) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>

 <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>


        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
    
`;

}

if (numeroAleatorio == 4) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">2 impostores</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>

<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        
     <div id="miranhaImpostor1" class="imagems impostor">
            <img src="./src/img/kk8.jpg" alt="homem aranha">
        </div>
`;

}

if (numeroAleatorio == 5) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>

<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>


        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        


    
`;

}

if (numeroAleatorio == 6) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
    
`;

}

if (numeroAleatorio == 7) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
         <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>
        
    
`;

}

if (numeroAleatorio == 8) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
    
`;

}


if (numeroAleatorio == 9) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>

<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>


        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
    
`;

}

if (numeroAleatorio == 10) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>

<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
    
`;

}

if (numeroAleatorio == 11) {
    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
    divPaiDosMiranhas.innerHTML = `
    <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
   
`;

    }

    if (numeroAleatorio == 12) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
    

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>

<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
   
`;

    }

    if (numeroAleatorio == 13) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
    <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>
        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
   
`;

    }
    if (numeroAleatorio == 14) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>

 <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>
        
   
`;

    }

    if (numeroAleatorio == 15) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>


         <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>
        
   
`;

    }
    if (numeroAleatorio == 16) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   
<div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        
        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>


         
   
`;

    }
    if (numeroAleatorio == 17) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>

 <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>


        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>


        
        
   
`;

    }
    if (numeroAleatorio == 18) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   
 <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>


        
        
   
`;

    }
    if (numeroAleatorio == 19) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>

  <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>


        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>


       
        
   
`;

    }
    if (numeroAleatorio == 20) {
        tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo">QUAL MIRANHA É O <span class="span-cor">IMPOSTOR?</span><p>3 inocentes e  <span class="span-cor">1 impostor</span></p></h1>`
        divPaiDosMiranhas.innerHTML = `
   

        <div id="miranhaNormal" class="imagems">
            <img src="./src/img/kk1.jpg" alt="homem aranha">
        </div>

         <div id="miranhaImpostor" class="imagems impostor">
            <img src="./src/img/kk4.jpg" alt="homem aranha">
        </div>


        <div id="miranhaNormal2" class="imagems">
            <img src="./src/img/kk2.jpg" alt="homem aranha">
        </div>



        <div id="miranhaNormal3" ​​class="imagems">
            <img src="./src/img/kk3.jpg" alt="homem aranha">
        </div>


        
        
   
`;

    }



    function reproduzirMaryJane() {  
        
        let MaryJaneCadeVoce = document.getElementById('MaryJaneCadeVoce');
        MaryJaneCadeVoce.play();
        
    }

    function reproduzirgameOverMiranha() {
        let gameOverMiranha = document.getElementById('gameOverMiranha');
        gameOverMiranha.play()
    }
    
  
    let miranha1 = document.getElementById('miranhaNormal');
    let miranha2 = document.getElementById('miranhaNormal2');
    let miranha3 = document.getElementById('miranhaNormal3');
    let miranhaDoMal = document.getElementById('miranhaImpostor');
    
    function miranhasNormais() {
        if (tentativas === 1 && pontosGuardados) {
            sigaRedeSociais.style.display = 'block';
            document.getElementById('bodyAlteracao').style.backgroundImage = "url(./src/img/miranha.imagem.game.over.jpg)";
            
            reproduzirgameOverMiranha();
            document.getElementById('MaryJaneCadeVoce').pause();
            document.getElementById("AudioAtocarNoInicio").pause()

            acertouOuErrou.style.display = 'flex';
            botaoReiniciarJogo.style.display = 'flex';
          
            acertouOuErrou.classList.remove('texto-errou');
            acertouOuErrou.classList.remove('texto-acertou');
            acertouOuErrou.classList.add('texto-perdeu');

            acertouOuErrou.innerText = 'Game Over';

            divDoPontoETentativas.style.display = 'none';



            if(pontosGuardados.length >1) {
                tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo"><span class="span-cor">Você Terminou o Jogo com</span> ${pontosGuardados.length}
             Pontos</h1>
             <button id="botaoReiniciarJogo" onclick="reiniciarJogo()"></button><br>`;
                divPaiDosMiranhas.innerHTML = ' ';
                divPaiDosMiranhas.style.display = 'none';
                
               
            } else {
                tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo"><span class="span-cor">Você Terminou o Jogo com</span> ${pontosGuardados.length}
             Ponto</h1><br>`;
                divPaiDosMiranhas.innerHTML = ' ';
                divPaiDosMiranhas.style.display = 'none';
                
                
            } 
            botaoComecarJogo.style.display = "none"
            botaoReiniciarJogo.style.display = 'block';
            textoTentativa.innerText = '0'
            return
            
        }


        //if (tentativas == 0) {
        // alert('Você Perdeu');
        //return ativar ele depois que Fizer o codigo
        // } 

        if (miranha1 && miranha2 && miranha3) {
            
            tentativas = tentativas - 1;
            tentativasGuardadas.push(+1);
            suasTentativas.innerText = `${tentativas} Tentativas`;
            reproduzirMaryJane();
            acertouOuErrou.classList.remove('texto-acertou');
            acertouOuErrou.classList.add('texto-errou');
            acertouOuErrou.style.display = 'flex';
            
            acertouOuErrou.innerText = "Errou";
            
        }

        console.log('funcionando o addEventListener')
        console.log(tentativas);
    }





    function miranhaImpostor() {
        if (miranhaDoMal){
            

            tentativas = tentativas + 1;


            pontosGuardados.push(+1)
            tentativasGuardadas.push(+1);


            console.log(tentativasGuardadas)
            console.log(pontosGuardados);
            suasTentativas.innerText = `${tentativas} Tentativas`;

            acertouOuErrou.classList.remove('texto-errou');
            acertouOuErrou.classList.add('texto-acertou');
            acertouOuErrou.style.display = 'flex';

            acertouOuErrou.innerText = "Acertou";

            pontos.textContent = `${pontosGuardados.length} Ponto`;

            if (pontosGuardados.length == 10) {
                
                document.getElementById('bodyAlteracao').style.backgroundImage = "url(./src/img/jogoganhomiranha.jpg)";
               

                
                document.getElementById('MaryJaneCadeVoce').pause();
                document.getElementById("AudioAtocarNoInicio").pause()

                acertouOuErrou.style.display = 'flex';
                botaoReiniciarJogo.style.display = 'flex';
                sigaRedeSociais.style.display = 'block';
                
                miranhaGanhouJogo.style.display = 'flex';
                miranhaGanhouJogo.play();
                
                acertouOuErrou.classList.remove('texto-errou');
                acertouOuErrou.classList.remove('texto-acertou');
                acertouOuErrou.classList.add('texto-ganhou-jogo');

                acertouOuErrou.innerText = 'PARABÉNS VOCÊ GANHOU';

                divDoPontoETentativas.style.display = 'none';



                if (pontosGuardados.length > 1) {
                    tituloDinamico.innerHTML = `<h1 id="titulo-dinamico" class="h1-titulo"><span class="span-cor">Você Terminou o Jogo com</span> 10 Pontos</h1>
             <button id="botaoReiniciarJogo" onclick="reiniciarJogo()"></button><br>`;
                    divPaiDosMiranhas.innerHTML = ' ';
                    divPaiDosMiranhas.style.display = 'none';


                } 
                botaoComecarJogo.style.display = "none"
                botaoReiniciarJogo.style.display = 'block';
                textoTentativa.innerText = '0'
                return

            }



            novaPartida();

       
















        
            

            
            


            
        }
    }







    document.getElementById('miranhaNormal').addEventListener('click', miranhasNormais,);

    document.getElementById('miranhaNormal2').addEventListener('click', miranhasNormais,);

    document.getElementById('miranhaNormal3').addEventListener('click', miranhasNormais,);

    document.getElementById('miranhaImpostor').addEventListener('click', miranhaImpostor);

    document.getElementById('miranhaImpostor1').addEventListener('click', miranhaImpostor,);

}

function reiniciarJogo() {
    window.location.reload()
}

