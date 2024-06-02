// Crie uma lista de 10 alunos onde cada aluno deve ter nome, sobrenome, serie/ano, notas das 4 provas

// tire a media de cada aluno e mostre o nome, sobrenome e a media
// Ex: Erick Staviasz media 8.0

// Faça uma lista com nome, sobrenome, media, resultado(aprovado/recuperação/reprovado)
// Aprovado se a media for maior ou igual a 7.0
// Recuperação se a media for entre 5.0 e 6.9
// Reprovado se a media for menor que 5.9

const Nome = ['Rafael', 'Kaue', 'Ana', 'Cristina', 'Lorena', 'Pedro', 'Joao', 'Aquiles', 'Kauan', 'Lua'];
const SobreNome = ['Santos', 'Severiano', 'Viana', 'Pereira','Palmeiras','Delfim', 'Cimentos', 'Clementos', 'Ferreira', 'Medina'];
const Serie = ['1 ano', '2 ano', '3 ano'];

let Nota1 = 5;
let Nota2 = 4;
let Nota3 = 7;
let Nota4 = 6;

const Media = (Nota1 + Nota2 + Nota3 + Nota4) / 4;

if (Media >= 7) 
    console.log('Aprovado')
    
else if (Media <= 5.0 && 6.9) 
    console.log('Recuperacao')

else (Media => 5.9)
    console.log('Reprovado')

console.log(Nome, SobreNome, Serie, Media)