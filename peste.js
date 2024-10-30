const scenes = [
    { 
        id: 1, 
        text: "Você está em uma vila deserta devastada pela peste negra. O cheiro da morte está no ar. À distância, vê uma figura encapuzada e ouve gritos vindos de uma cabana.",
        choices: [
            { text: "Se aproximar da figura", nextId: 2 },
            { text: "Investigar a cabana", nextId: 3 },
            { text: "Fugir da vila", nextId: 4 }
        ]
    },
    { 
        id: 2, 
        text: "A figura encapuzada revela-se um curandeiro. Ele lhe oferece uma poção para proteção, mas avisa que possui efeitos colaterais desconhecidos.",
        choices: [
            { text: "Aceitar a poção", nextId: 5 },
            { text: "Recusar a oferta e seguir adiante", nextId: 6 }
        ]
    },
    { 
        id: 3, 
        text: "Ao entrar na cabana, você encontra uma família doente. Eles pedem ajuda, mas você percebe que também pode se infectar.",
        choices: [
            { text: "Ajudar a família", nextId: 7 },
            { text: "Sair rapidamente da cabana", nextId: 8 }
        ]
    },
    { 
        id: 4, 
        text: "Você tenta fugir da vila, mas é interceptado por guardas que não permitem que ninguém saia para evitar a propagação da peste.",
        choices: [
            { text: "Tentar convencer os guardas", nextId: 9 },
            { text: "Buscar outra rota de fuga", nextId: 10 }
        ]
    },
    { 
        id: 5, 
        text: "Você bebe a poção e sente uma fraqueza momentânea. Contudo, parece que está imune à peste... por enquanto.",
        choices: [
            { text: "Seguir adiante pela vila", nextId: 6 }
        ]
    },
    { 
        id: 6, 
        text: "Ao caminhar mais fundo na vila, encontra um grupo de sobreviventes escondidos em um porão, planejando escapar.",
        choices: [
            { text: "Juntar-se ao grupo", nextId: 11 },
            { text: "Continuar sozinho", nextId: 12 }
        ]
    },
    { 
        id: 7, 
        text: "Ao ajudar a família, você contrai a peste e começa a sentir os sintomas. Sua jornada termina ali.",
        choices: []
    },
    { 
        id: 8, 
        text: "Você sai rapidamente da cabana, evitando o contágio, e decide seguir adiante.",
        choices: [
            { text: "Explorar outras áreas da vila", nextId: 6 }
        ]
    },
    { 
        id: 9, 
        text: "Os guardas recusam sua súplica e ordenam que você retorne à vila.",
        choices: [
            { text: "Obedecer aos guardas", nextId: 6 }
        ]
    },
    { 
        id: 10, 
        text: "Você encontra uma passagem secreta fora da vila, mas precisa decidir se deseja explorar mais ou fugir imediatamente.",
        choices: [
            { text: "Explorar mais", nextId: 6 },
            { text: "Escapar", nextId: 13 }
        ]
    },
    { 
        id: 11, 
        text: "Você se junta ao grupo de sobreviventes, e juntos vocês encontram uma saída segura, sobrevivendo à peste.",
        choices: []
    },
    { 
        id: 12, 
        text: "Sozinho, você vagueia pela vila e acaba encontrando um local seguro para se esconder até que a peste passe.",
        choices: []
    },
    { 
        id: 13, 
        text: "Você finalmente escapa da vila, sobrevivendo à peste e deixando o horror para trás.",
        choices: []
    }
];

function startGame() {
    showScene(1);
}

function showScene(id) {
    const scene = scenes.find(s => s.id === id);
    document.getElementById('story').textContent = scene.text;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showScene(choice.nextId);
        choicesDiv.appendChild(button);
    });
}

startGame();
