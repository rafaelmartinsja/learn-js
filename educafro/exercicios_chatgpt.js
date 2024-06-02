    const alunos = [
    { nome: 'Rafael', sobrenome: 'Santos', serie: '1 ano', notas: [5, 4, 7, 6] },
    { nome: 'Kaue', sobrenome: 'Severiano', serie: '2 ano', notas: [8, 7, 6, 9] },
    { nome: 'Ana', sobrenome: 'Viana', serie: '3 ano', notas: [6, 5, 6, 7] },
    { nome: 'Cristina', sobrenome: 'Pereira', serie: '1 ano', notas: [3, 4, 5, 2] },
    { nome: 'Lorena', sobrenome: 'Palmeiras', serie: '2 ano', notas: [9, 8, 7, 10] },
    { nome: 'Pedro', sobrenome: 'Delfim', serie: '3 ano', notas: [6, 5, 6, 7] },
    { nome: 'Joao', sobrenome: 'Cimentos', serie: '1 ano', notas: [4, 3, 2, 5] },
    { nome: 'Aquiles', sobrenome: 'Clementos', serie: '2 ano', notas: [10, 9, 8, 7] },
    { nome: 'Kauan', sobrenome: 'Ferreira', serie: '3 ano', notas: [6, 7, 5, 8] },
    { nome: 'Lua', sobrenome: 'Medina', serie: '1 ano', notas: [5, 5, 6, 7] },
];

const calcularMedia = (notas) => {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / notas.length;
};

const determinarResultado = (media) => {
    if (media >= 7.0) return 'Aprovado';
    if (media >= 5.0 && media < 7.0) return 'Recuperação';
    return 'Reprovado';
};

const listaResultados = alunos.map(aluno => {
    const media = calcularMedia(aluno.notas);
    const resultado = determinarResultado(media);
    return { ...aluno, media, resultado };
});

listaResultados.forEach(aluno => {
    console.log(`${aluno.nome} ${aluno.sobrenome} média ${aluno.media.toFixed(1)} - ${aluno.resultado}`);
});

