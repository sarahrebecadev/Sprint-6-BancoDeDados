// Banco e collections do Sistema Acadêmico.
db = db.getSiblingDB("sistema_academico");
db.createCollection("alunos");
db.createCollection("matriculas");
db.createCollection("eventos_academicos");
db.alunos.createIndex({ email: 1 }, { unique: true });
print("Banco e collections preparados.");
