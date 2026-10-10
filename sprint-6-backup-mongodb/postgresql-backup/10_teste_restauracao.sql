-- Executar no banco original e no banco restaurado; comparar as contagens.
SELECT 'aluno' AS tabela, COUNT(*) AS total FROM aluno
UNION ALL SELECT 'professor', COUNT(*) FROM professor
UNION ALL SELECT 'disciplina', COUNT(*) FROM disciplina
UNION ALL SELECT 'matricula', COUNT(*) FROM matricula
UNION ALL SELECT 'curso', COUNT(*) FROM curso
UNION ALL SELECT 'turma', COUNT(*) FROM turma
UNION ALL SELECT 'avaliacao', COUNT(*) FROM avaliacao
UNION ALL SELECT 'nota', COUNT(*) FROM nota
UNION ALL SELECT 'frequencia', COUNT(*) FROM frequencia
UNION ALL SELECT 'curso_disciplina', COUNT(*) FROM curso_disciplina
ORDER BY tabela;

-- Inventário de constraints: PK, FK, UNIQUE e CHECK.
SELECT conrelid::regclass AS tabela, conname AS constraint_name, contype AS tipo
FROM pg_constraint
WHERE connamespace = 'public'::regnamespace
ORDER BY tabela::text, constraint_name;

-- Inventário de índices no schema public.
SELECT schemaname, tablename, indexname, indexdef
FROM pg_indexes WHERE schemaname = 'public'
ORDER BY tablename, indexname;
