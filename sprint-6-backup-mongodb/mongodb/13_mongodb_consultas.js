// Consultas comentadas do Sistema Acadêmico.
db = db.getSiblingDB("sistema_academico");
// 1. Alunos ativos.
db.alunos.find({ativo:true});
// 2. Identificadores acima de 2 ($gt).
db.alunos.find({_id:{$gt:2}});
// 3. Matrículas de disciplinas escolhidas ($in).
db.matriculas.find({disciplina:{$in:["Banco de Dados","Programação Java"]}});
// 4. Nome contém Silva, sem diferenciar caixa ($regex).
db.alunos.find({nome:{$regex:"silva",$options:"i"}});
// 5. Condições combinadas com $and.
db.alunos.find({$and:[{ativo:true},{curso:"Engenharia de Software"}]});
// 6. Inativos ou do curso Banco de Dados ($or), projeção e ordenação.
db.alunos.find({$or:[{ativo:false},{curso:"Banco de Dados"}]},{nome:1,curso:1,ativo:1}).sort({nome:1});
// 7. Projeção e ordenação das matrículas.
db.matriculas.find({_id:1,alunoId:1,disciplina:1,semestre:1}).sort({semestre:-1,disciplina:1});
// 8. Junta matrículas com aluno referenciado via $lookup.
db.matriculas.aggregate([
 {$lookup:{from:"alunos",localField:"alunoId",foreignField:"_id",as:"dadosAluno"}},
 {$unwind:"$dadosAluno"},
 {$project:{_id:1,disciplina:1,status:1,aluno:"$dadosAluno.nome",curso:"$dadosAluno.curso"}}
]);
