const alunos = [
    { nome: "Eduardo", notaFinal: 70},
    { nome: "Alana", notaFinal: 65},
    { nome: "Felipe", notaFinal: 70 },
    { nome: "João", notaFinal: 60 }
  ];

  const encontrado = alunos.find(alunos=> alunos.nome === "João");
console.log(encontrado);

//exercício 2
const notas = alunos.filter(alunos => alunos.notaFinal >= 70);
console.log(notas);

//exercício 3
const ordenadosPorNota = alunos.sort((a, b) => a.notaFinal - b.notaFinal);
console.log(ordenadosPorNota);
