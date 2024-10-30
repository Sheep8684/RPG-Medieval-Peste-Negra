// Definindo status do jogador
let player = {
    health: 100,
    hasPotion: false,
    isImmune: false
};

const scenes = [
    { 
        id: 1, 
        text: "Você está em uma vila devastada pela peste negra. À sua frente, uma figura encapuzada faz uma oferenda estranha ao lado de uma catapulta carregada com corpos infectados.",
        choices: [
            { text: "Investigar a figura", nextId: 2 },
            { text: "Fugir do local", nextId: 3 }
        ]
    },
    { 
        id: 2, 
        text: "A figura revela-se um curandeiro, que oferece uma poção que pode fortalecer sua imunidade.",
        choices: [
            { text: "Aceitar a poção", nextId: 4 },
            { text: "Recusar e seguir caminho", nextId: 5 }
        ]
    },
    { 
        id: 3, 
        text: "Você foge do local, mas ouve o som de uma catapulta sendo acionada, jogando corpos infectados na vila próxima.",
        choices: [
            { text: "Investigar a vila próxima", nextId: 6 },
            { text: "Ignorar e fugir", nextId: 7 }
        ]
    },
    { 
        id: 4, 
        text: "Você bebe a poção. Sua imunidade aumenta, mas o efeito é temporário.",
        effect: () => { player.isImmune = true; },
        choices: [
            { text: "Seguir em frente", nextId: 5 }
        ]
    },
    { 
        id: 5, 
        text: "Você se depara com um grupo de guardas que discutem sobre atacar uma cidade próxima para evitar o avanço da peste.",
        choices: [
            { text: "Conversar com os guardas", nextId: 8 },
            { text: "Continuar sozinho", nextId: 9 }
        ]
    },
    { 
        id: 6, 
        text: "Na vila, os sobreviventes estão em pânico. Um grupo armado desafia você.",
        choices: [
            { text: "Lutar", nextId: 10 },
            { text: "Tentar acalmá-los", nextId: 11 }
        ]
    },
    { 
        id: 7, 
        text: "Você escapa com sucesso, mas sente que alguém está seguindo você.",
        choices: [
            { text: "Esconder-se", nextId: 12 },
            { text: "Preparar-se para lutar", nextId: 13 }
        ]
    },
    { 
        id: 8, 
        text: "Os guardas decidem deixá-lo passar, avisando sobre os perigos à frente.",
        choices: [
            { text: "Seguir em frente", nextId: 14 }
        ]
    },
    { 
        id: 9, 
        text: "Sozinho, você avista um grupo de bandidos na estrada.",
        choices: [
            { text: "Esconder-se", nextId: 12 },
            { text: "Enfrentar os bandidos", nextId: 15 }
        ]
    },
    { 
        id: 10, 
        text: "Luta! Você sofre alguns ferimentos, mas derrota o grupo.",
        effect: () => { player.health -= 20; },
        choices: [
            { text: "Explorar a vila", nextId: 14 }
        ]
    },
    { 
        id: 11, 
        text: "Você acalma os sobreviventes e é recebido no grupo. Eles lhe oferecem ajuda.",
        choices: [
            { text: "Aceitar ajuda", nextId: 16 },
            { text: "Recusar e seguir sozinho", nextId: 14 }
        ]
    },
    { 
        id: 12, 
        text: "Você se esconde com sucesso, evitando o confronto.",
        choices: [
            { text: "Seguir em frente", nextId: 14 }
        ]
    },
    { 
        id: 13, 
        text: "Você se prepara para lutar e derrota o oponente com sucesso.",
        choices: [
            { text: "Seguir em frente", nextId: 14 }
        ]
    },
    { 
        id: 14, 
        text: "Você chega a uma cidade devastada. Os cadáveres são jogados por catapultas para impedir que sobreviventes entrem.",
        choices: [
            { text: "Fugir rapidamente", nextId: 17 },
            { text: "Buscar abrigo", nextId: 18 }
        ]
    },
    { 
        id: 15, 
        text: "Você enfrenta os bandidos, mas sofre danos graves.",
        effect: () => { player.health -= 30; },
        choices: [
            { text: "Buscar ajuda", nextId: 16 }
        ]
    },
    { 
        id: 16, 
        text: "Um curandeiro ajuda a recuperar um pouco de sua saúde.",
        effect: () => { player.health += 20; },
        choices: [
            { text: "Continuar sua jornada", nextId: 19 }
        ]
    },
    { 
        id: 17, 
        text: "Você foge da cidade e encontra um grupo de sobreviventes que planejam uma fuga.",
        choices: [
            { text: "Juntar-se a eles", nextId: 20 },
            { text: "Seguir sozinho", nextId: 18 }
        ]
    },
    { 
        id: 18, 
        text: "Você encontra abrigo e sobrevive à noite, mas a peste continua a se espalhar.",
        choices: []
    },
    { 
        id: 19, 
        text: "Você se une ao grupo, e juntos conseguem encontrar uma saída segura.",
        choices: []
    },
    { 
        id: 20, 
        text: "Você sobrevive ao lado do grupo, evitando o contágio e escapando da região infectada.",
        choices: []
    }
];

function startGame() {
    player.health = 100; // Reinicializa a saúde
    player.isImmune = false; // Reinicializa a imunidade
    document.getElementById('restart-button').style.display = 'none'; // Esconde o botão de reinício
    showScene(1);
}

function showScene(id) {
    const scene = scenes.find(s => s.id === id);
    document.getElementById('story').textContent = scene.text;
    
    if (scene.effect) scene.effect();

    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    if (scene.choices.length > 0) {
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => showScene(choice.nextId);
            choicesDiv.appendChild(button);
        });
    } else {
        document.getElementById('restart-button').style.display = 'block';
    }

    updateStatus();
}

function updateStatus() {
    document.getElementById('status').innerHTML = `Saúde: ${player.health}`;
}

document.getElementById('restart-button').onclick = startGame;

startGame();
