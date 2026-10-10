// Compare COLLSCAN/IXSCAN, totalDocsExamined e executionTimeMillis.
// Execute e salve a saída real; coleções pequenas podem continuar usando COLLSCAN.
db = db.getSiblingDB("sistema_academico");
print("Índice 1 — ANTES:");
printjson(db.alunos.find({curso:"Engenharia de Software",ativo:true}).explain("executionStats"));
db.alunos.createIndex({curso:1,ativo:1},{name:"idx_alunos_curso_ativo"});
print("Índice 1 — DEPOIS:");
printjson(db.alunos.find({curso:"Engenharia de Software",ativo:true}).explain("executionStats"));

print("Índice 2 — ANTES:");
printjson(db.eventos_academicos.find({alunoId:1,data:{$gte:ISODate("2026-09-01T00:00:00Z")}}).explain("executionStats"));
db.eventos_academicos.createIndex({alunoId:1,data:-1},{name:"idx_eventos_aluno_data"});
print("Índice 2 — DEPOIS:");
printjson(db.eventos_academicos.find({alunoId:1,data:{$gte:ISODate("2026-09-01T00:00:00Z")}}).explain("executionStats"));
// Documente os valores reais e não presuma ganho sem medir.
