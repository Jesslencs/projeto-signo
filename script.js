function CalculateSign() {

    const formSection = document.querySelector('section');
    const resultContainer = document.getElementById('result-container');
    const signInfoSection = document.querySelector('.textinfo');
    
    

    const name = document.getElementById('name').value;
    const dateOfBirth = new Date(document.getElementById('dateof').value);
    const month = dateOfBirth.getMonth() + 1;
    const day = dateOfBirth.getDate();

    let sign = '';
    let signText = '';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'Áries';
        signText = 'Áries, o primeiro signo do zodíaco, é associado a pessoas impulsivas e corajosas, que não se curvam diante de desafios. Valorizando profundamente a individualidade e sinceridade, os arianos são conhecidos por sua ousadia. Além disso, têm um apreço peculiar pelo humor, especialmente ao compartilhar risadas com memes na internet.  ';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'Touro';
        signText = 'Os taurinos apreciam o conforto e têm um profundo entendimento do que é bom na vida. Conhecidos por sua lealdade, conseguem manter a calma e uma abordagem pragmática mesmo nos momentos mais críticos. Além disso, têm uma paixão pela boa comida, ficando descontentes quando a culinária não está à altura. Touro é sinônimo de estabilidade e firmeza!';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = 'Gêmeos';
        signText = 'Devido à sua versatilidade, os geminianos são frequentemente rotulados como volúveis e inseguros. A mutabilidade, uma característica-chave do signo de Gêmeos, permite que conciliem uma variedade de interesses. Gêmeos possui uma mente ampla, capaz de enxergar as coisas por meio de diversas perspectivas, o que, na verdade, é uma qualidade positiva.';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = 'Câncer';
        signText = 'Os cancerianos são verdadeiros sonhadores, dotados de empatia e profundidade sentimental, com uma imaginação sem limites. Sua natureza dócil, gentil e romântica se destaca, assim como sua preocupação profunda com amigos, família e lar. Entre suas virtudes notáveis estão a sensibilidade aguçada e um forte senso de coletividade.';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'Leão';
        signText = 'As pessoas nascidas sob o signo de Leão são conhecidas por sua confiança, altivez, criatividade e prontidão para se destacarem como seres únicos. São idealistas e leais por natureza, por vezes surpreendendo-se com a maldade e mesquinhez humanas, pois esses sentimentos estão longe de fazerem parte de sua própria personalidade';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'Virgem';
        signText = 'Indivíduos nascidos sob o signo de Virgem são notáveis por sua inteligência, atenção aos detalhes, abordagem metódica, organização, discrição e perfeccionismo. Trabalham incansavelmente em direção à segurança e estabilidade financeira, impulsionados pela regência de Mercúrio, sempre ávidos por adquirir conhecimento';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        sign = 'Libra';
        signText = 'Librianos são frequentemente procurados por seus amigos devido ao seu charme e elegância inegáveis. São entusiastas de boas conversas, porém, sua inclinação para a superficialidade, leviandade e timidez excessiva pode ser notada. Além disso, aqueles com o Sol em Libra podem enfrentar desafios de indecisão, mudando de opinião a cada três dias.';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        sign = 'Escorpião';
        signText = 'Escorpianos são introvertidos, pensadores, sensíveis, orgulhosos, determinados, obstinados e lógicos. Com tudo isso, não poderiam ser pessoas relaxadas. A palavra mais apropriada para definir seus sentimentos é desafio. Escorpião também é o mais independente dos signos, mas precisam e lutam pelo poder custe o que custar';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'Sagitário';
        signText = 'Indivíduos nascidos sob o signo de Sagitário estão continuamente abertos a novas experiências e desejam aprender. Com mente aberta e intuitiva, possuem uma personalidade inquieta e mutável. O sagitariano é alguém que aprecia viver e descobrir tudo o que o mundo tem a oferecer.';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'Capricórnio';
        signText = '"Pessoas do signo de Capricórnio são práticas, autoconfiantes e ambiciosas. Em especial, amam progredir na vida e sabem fazê-lo com maestria. Os capricornianos geralmente mantêm círculos de amizade mais restritos, mas são leais e oferecem apoio constante aos seus amigos e entes queridos';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'Aquário';
        signText = '"São pessoas criativas e inteligentes que buscam sempre inovações tecnológicas e costumam ser muito inventivos e únicos. Para os aquarianos, a liberdade é um lema, e eles fazem o possível para serem independentes em todos os aspectos da vida, por isso, é comum serem vistos como frios, calculistas e desapegados.';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)){
        sign = 'Peixes';
        signText = '"Piscianos costumam ter forte intuição e guiam suas ações com base nas emoções. Peixes estão ligados a diversas virtudes, sendo compreensivos, compassivos, empáticos e humildes. Por amor ao próximo, são capazes de se dedicar totalmente a algum objetivo, às vezes até esquecendo de si mesmos.';
    }


    


    resultContainer.style.display = 'block';
    
    // Atualizando nome do resultado
    const resultName = document.getElementById('result-name');
    resultName.textContent = name;
    
    // Atualizando o resultado do signo
    const resultSign = document.getElementById('result-sign');
    resultSign.textContent = sign;
    
    // Adicionando o texto do siigno
    const signTextElement = document.getElementById('sign-text');
    signTextElement.style.display = 'block';
    signTextElement.innerHTML = `<p>${signText}</p>`;
    
    // Removendo a classe não utilizada
    resultContainer.classList.add('result-container');
    
    formSection.style.display = 'none';
    footer.style.display = 'none';
    
    const textInfoArticle = document.querySelector('.textinfo');
    textInfoArticle.style.display = 'none';
    
    







    
}