window.addEventListener('scroll', function(){
    let header = document.querySelector ('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function MudaDesenho(){
    const paragrafo = document.querySelector("h4");
    const texto = document.querySelector("h3");
    const valorDia = parseInt(document.getElementById("valorDia").value);
    const valorMes = parseInt(document.getElementById("valorMes").value);

    
    if ((valorMes === 3 && valorDia >= 21) || (valorMes === 4 && valorDia <= 19)) {
        texto.innerHTML = "Seu signo é Áries.";
        paragrafo.innerHTML = "Seiya é o Cavaleiro de Pégaso, representando o signo de Áries. Ele é um jovem destemido e apaixonado, conhecido por sua lealdade inabalável e determinação incansável. Sua armadura é adornada com asas majestosas e ele é reconhecido por sua velocidade e agilidade em combate. Seiya é um modelo de heroísmo, sempre disposto a lutar contra as forças do mal para proteger aqueles que ama.";

    } else if ((valorMes === 4 && valorDia >= 20) || (valorMes === 5 && valorDia <= 20)) {
        texto.innerHTML = "Seu signo é Touro.";
        paragrafo.innerHTML = "Aldebaran é o Cavaleiro de Touro, representando o signo de Touro. Ele é conhecido por sua força colossal e coração generoso. Sua armadura de Touro é uma das mais resistentes, simbolizando sua determinação e resistência. Aldebaran é leal aos seus companheiros e sempre disposto a protegê-los com sua imensa força.";

    } else if ((valorMes === 5 && valorDia >= 21) || (valorMes === 6 && valorDia <= 20)) {
        texto.innerHTML = "Seu signo é Gêmeos.";
        paragrafo.innerHTML = "Os irmãos Saga e Kanon compartilham a armadura de Gêmeos, representando o signo de Gêmeos. Saga é conhecido por sua dualidade, com uma personalidade dividida entre bem e mal. Kanon, apesar de sua inicial maldade, eventualmente se redime. Sua armadura de Gêmeos reflete essa dualidade, simbolizando a dualidade inerente ao signo.";

    } else if ((valorMes === 6 && valorDia >= 21) || (valorMes === 7 && valorDia <= 22)) {
        texto.innerHTML = "Seu signo é Câncer.";
        paragrafo.innerHTML = "Deathmask é o Cavaleiro de Câncer, representando o signo de Câncer. Sua personalidade é complexa, mostrando crueldade e sadismo. Sua armadura de Câncer possui uma concha que protege seu peito, refletindo o caráter protetor do signo. Deathmask é um adversário implacável, com técnicas sombrias que ecoam as profundezas emocionais associadas a Câncer.";

    } else if ((valorMes === 7 && valorDia >= 23) || (valorMes === 8 && valorDia <= 22)) {
        texto.innerHTML = "Seu signo é Leão.";
        paragrafo.innerHTML = "Aiolia é o Cavaleiro de Leão, representando o signo de Leão. Ele emana nobreza e confiança, sempre pronto para proteger os oprimidos. Sua armadura de Leão é majestosa e imponente, refletindo sua autoridade. Aiolia é um defensor da justiça e um exemplo de bravura para os Cavaleiros mais jovens.";

    } else if ((valorMes === 8 && valorDia >= 23) || (valorMes === 9 && valorDia <= 22)) {
        texto.innerHTML = "Seu signo é Virgem.";
        paragrafo.innerHTML = "Shaka é o Cavaleiro de Virgem, representando o signo de Virgem. Ele é um dos mais poderosos e sábios Cavaleiros, conhecido por sua natureza tranquila e profunda compreensão do universo. Sua técnica Tesouro do Céu é devastadora em batalha. Shaka personifica a pureza e a perfeição associadas ao signo de Virgem.";

    } else if ((valorMes === 9 && valorDia >= 23) || (valorMes === 10 && valorDia <= 22)) {
        texto.innerHTML = "Seu signo é Libra.";
        paragrafo.innerHTML = "Dohko é o Cavaleiro de Libra, representando o signo de Libra. Ele é um dos mais antigos e experientes Cavaleiros, mentor de Shiryu. Sua aparência jovial é contrastada por sua sabedoria e senso de justiça. Dohko é um defensor da harmonia e do equilíbrio, valores intrínsecos ao signo de Libra.";

    } else if ((valorMes === 10 && valorDia >= 23) || (valorMes === 11 && valorDia <= 21)) {
        texto.innerHTML = "Seu signo é Escorpião.";
        paragrafo.innerHTML = "Ikki é o Cavaleiro de Fênix, representando o signo de Escorpião. Ele é uma figura complexa, com uma personalidade solitária e intensa. Sua armadura de Fênix é ressurreta das cinzas, simbolizando sua capacidade de superar desafios. Ikki é um guerreiro formidável, capaz de infligir ferimentos ardentes aos seus adversários.";

    } else if ((valorMes === 11 && valorDia >= 22) || (valorMes === 12 && valorDia <= 21)) {
        texto.innerHTML = "Seu signo é Sagitário.";
        paragrafo.innerHTML = "Aiolos é o Cavaleiro de Sagitário, representando o signo de Sagitário. Ele é lembrado como um herói lendário, cuja coragem e altruísmo inspiraram gerações futuras de Cavaleiros. Sua armadura de Sagitário simboliza a busca pela verdade e a aventura, características associadas ao signo de Sagitário.";

    } else if ((valorMes === 12 && valorDia >= 22) || (valorMes === 1 && valorDia <= 19)) {
        texto.innerHTML = "Seu signo é Capricórnio.";
        paragrafo.innerHTML = "Shiryu é o Cavaleiro de Dragão, representando o signo de Capricórnio. Ele é uma figura sábia e calma, possuindo uma grande força física e espiritual. Sua armadura de Dragão é resistente e durável, simbolizando sua determinação inabalável. Shiryu é conhecido por sua técnica Cólera do Dragão, uma manifestação impressionante de sua força interior.";

    } else if ((valorMes === 1 && valorDia >= 20) || (valorMes === 2 && valorDia <= 18)) {
        texto.innerHTML = "Seu signo é Aquário.";
        paragrafo.innerHTML = "Hyoga é o Cavaleiro de Cisne, representando o signo de Aquário. Ele é um indivíduo compassivo e introspectivo, capaz de manipular o gelo com habilidade extraordinária. Sua armadura reflete a elegância e a serenidade do cisne. Hyoga luta com um coração gentil, sempre pronto para proteger seus amigos e lutar pela justiça.";

    } else if ((valorMes === 2 && valorDia >= 19) || (valorMes === 3 && valorDia <= 20)) {
        texto.innerHTML = "Seu signo é Peixes.";
        paragrafo.innerHTML = "Shun é o Cavaleiro de Andrômeda, representando o signo de Peixes. Ele é uma alma sensível e compassiva, desafiando estereótipos de masculinidade com sua natureza gentil. Sua corrente de Andrômeda é versátil e eficaz em combate. Shun acredita no poder do amor e da amizade, sendo uma fonte constante de apoio emocional para seus companheiros.";

    } else {
        texto.innerHTML = "Data de nascimento inválida.";
    }
}