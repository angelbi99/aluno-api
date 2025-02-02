const { v4: uuidv4 } = require('uuid');

let alunos = [];

// Criar um novo aluno
function create({ nome, email, nome_curso }) {
    const aluno = {
        id: uuidv4(),
        nome,
        email,
        nome_curso
    };
    alunos.push(aluno);
    return aluno;
}

// Listar todos os alunos
function findAll() {
    return alunos;
}

// Buscar um aluno por ID
function findById(id) {
    return alunos.find(aluno => aluno.id === id) || null;
}

// Atualizar um aluno por ID
function update(id, { nome, email, nome_curso }) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) return null;

    alunos[index] = { id, nome, email, nome_curso };
    return alunos[index];
}

// Remover um aluno por ID
function remove(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) return false;

    alunos.splice(index, 1);
    return true;
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
};
