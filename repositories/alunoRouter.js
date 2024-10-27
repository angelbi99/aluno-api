const express = require('express');
const router = express.Router();
const alunoController = require('./alunoController'); // Importa o controller

// Definição das rotas para alunos
router.post('/', alunoController.create);      // Criar aluno
router.get('/', alunoController.getAll);       // Listar todos os alunos
router.get('/:id', alunoController.getOne);    // Buscar aluno por ID
router.put('/:id', alunoController.update);    // Atualizar aluno por ID
router.delete('/:id', alunoController.delete); // Excluir aluno por ID

module.exports = router;
