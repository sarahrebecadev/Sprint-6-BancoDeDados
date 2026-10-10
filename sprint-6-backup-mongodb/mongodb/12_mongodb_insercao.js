// Dados fictícios do domínio acadêmico. Campos opcionais demonstram esquema flexível.
db = db.getSiblingDB("sistema_academico");
db.alunos.insertMany([
{_id:1,nome:"Ana Souza",email:"ana@email.com",curso:"Engenharia de Software",ativo:true,contato:{telefone:"9999-1001",endereco:{cidade:"São Luís",uf:"MA"}}},
{_id:2,nome:"Carlos Lima",email:"carlos@email.com",curso:"Ciência da Computação",ativo:true,contato:{telefone:"9999-1002"}},
{_id:3,nome:"Mariana Alves",email:"mariana@email.com",curso:"Sistemas de Informação",ativo:true,bolsas:["iniciação científica"]},
{_id:4,nome:"João Silva",email:"joao@email.com",curso:"Engenharia de Software",ativo:false},
{_id:5,nome:"Lucas Ferreira",email:"lucas@email.com",curso:"Banco de Dados",ativo:true,contato:{endereco:{cidade:"Imperatriz",uf:"MA"}}},
{_id:6,nome:"Beatriz Santos",email:"beatriz@email.com",curso:"Ciência de Dados",ativo:true,preferencias:{notificacoes:true,idioma:"pt-BR"}}
]);
db.matriculas.insertMany([
{_id:101,alunoId:1,disciplinaId:1,disciplina:"Banco de Dados",semestre:"2026.2",status:"ativa"},
{_id:102,alunoId:2,disciplinaId:2,disciplina:"Programação Java",semestre:"2026.2",status:"ativa"},
{_id:103,alunoId:3,disciplinaId:3,disciplina:"Engenharia de Software",semestre:"2026.2",status:"concluída"},
{_id:104,alunoId:4,disciplinaId:1,disciplina:"Banco de Dados",semestre:"2026.2",status:"trancada"}
]);
db.eventos_academicos.insertMany([
{alunoId:1,turmaId:1,tipo:"frequencia",data:ISODate("2026-09-10T12:00:00Z"),presente:true},
{alunoId:1,turmaId:1,tipo:"nota",data:ISODate("2026-10-01T12:00:00Z"),valor:9.5},
{alunoId:2,turmaId:2,tipo:"frequencia",data:ISODate("2026-09-10T12:00:00Z"),presente:true},
{alunoId:3,turmaId:3,tipo:"frequencia",data:ISODate("2026-09-10T12:00:00Z"),presente:false}
]);
print("Inseridos 14 documentos: 6 alunos, 4 matrículas e 4 eventos.");
