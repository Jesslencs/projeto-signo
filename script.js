function CalculateSign() {

    const formSection = document.querySelector('section');
    const resultContainer = document.getElementById('result-container');
   
    
    

    const name = document.getElementById('name').value;
    const dateOfBirth = new Date(document.getElementById('dateof').value);
    const month = dateOfBirth.getMonth() + 1;
    const day = dateOfBirth.getDate();

    let sign = '';
    let signText = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'Áries';
        signText = 'Signo de Áries é o primeiro do zodíaco e as pessoas regidas por esse signo, geralmente são impulsivas, corajosas e não abaixam a cabeça quando são confrontadas. Além disso, valorizam muito a  individualidade e sinceridade. Também adoram rir de memes na internet.  ';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'Touro';
        signText = 'Taurinos amam conforto e sabem o que é bom nessa vida. Também são amigos fiéis e conseguem ser calmos e pragmáticos em momentos críticos, também adoram comer  e quando a comida esta ruim ficam triste. Touro é firmeza!.';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = 'Gêmeos';
        signText = 'Por serem versáteis, geminianos são, muitas vezes, acusados de serem volúveis e inseguros. Como uma das características do signo de Gêmeos é a mutabilidade, ele concilia inúmeros interesses diferentes. Gêmeos tem mente ampla e enxerga as coisas a partir de uma ótica multiperspectiva - o que é, na realidade, algo bom.';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = 'Câncer';
        signText = 'Os cancerianos são sonhadores, empáticos e sentimentais, e a imaginação deles não tem limites. Dóceis, gentis, românticos e carinhosos, são pessoas que se preocupam profundamente com seus amigos, família e lar. Entre suas melhores qualidades estão a sensibilidade e o senso de coletividade.';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'Leão';
        signText = 'As pessoas do signo de leão costumam ser confiantes, altivas, egocentradas, criativas e prontas para se tornarem criaturas especiais. Mas são pessoas idealistas e leais por natureza. Muitas vezes ainda se assustam com a maldade e mesquinhez do ser humano, porque esses sentimentos não fazem parte de sua personalidade.';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'Virgem';
        signText = 'As pessoas do signo de Virgem costumam ser inteligentes, detalhistas, metódicas, organizadas, discretas e perfeccionistas. “Trabalham para ter segurança e estabilidade financeira. Como são regidas por Mercúrio, estão sempre em busca de conhecimento.';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        sign = 'Libra';
        signText = 'São sempre requisitados por seus amigos e adoram uma boa conversa. Pessoas de Libra exalam charme e elegância. O lado negativo é que podem ser superficiais, levianos e tímidos demais. Além disso, quem tem o Sol em Libra pode ser indeciso e mudar de opinião a cada três dias.';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        sign = 'Escorpião';
        signText = 'É introspectivo, pensador, sensível, orgulhoso, determinado, obstinado e lógico. Com tudo isso, não poderia ser uma pessoa relaxada. Tormento seria a palavra mais adequada para definir seus sentimentos. Escorpião é também o mais independente dos signos, mas precisam e lutam pelo poder custe o que custar.';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'Sagitário';
        signText = 'As pessoas nascidas sob o signo de Sagitário estão sempre abertas a novas experiências e querendo aprender. Mente aberta e intuitiva, possuem uma personalidade inquieta e mutável. O sagitário personalidade é aquela pessoa que gosta de viver e descobrir todas as coisas que o mundo tem a oferecer.';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'Capricórnio';
        signText = 'Eles são práticos, autoconfiantes e ambiciosos, o signo de Capricórnio, em especial, ama progredir na vida e sabem fazer isso muito bem. Os capricornianos tendem a manter pequenos círculos de amizade, mas são leais e sempre apoiam seus amigos e entes queridos.';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'Aquário';
        signText = 'São pessoas criativas e inteligentes que buscam sempre inovações tecnológicas e costumam ser muito inventivos e “diferntões”. Para os aquarianos a liberdade é um lema e eles fazem o possível para serem independentes em todos os aspectos da vida, por isso, é comum serem vistos como frios, calculistas e desapegados.';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)){
        sign = 'Peixes';
        signText = 'Piscianos costumam ter forte intuição e guiam as ações com base nas emoções. Peixes está ligado a diversas virtudes, são compreensivos, compassivos, empáticos e humildes. Por amor ao próximo, são capazes de se doar totalmente a algum objetivo, esquecendo, às vezes, até de si próprios.';
    }
    



    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `<h4>Olá, ${name}!</h4><p>Seu signo é ${sign}.</p><div class="sign-text">${signText}</div>`;
    resultContainer.classList.add('result-container');
   

    formSection.style.display = 'none';

    const footer = document.querySelector('footer');
    footer.style.display = 'none';

    const textInfoElement = document.querySelector('.textinfo');
    textInfoElement.style.display = 'none';

}
    