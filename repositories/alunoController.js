const {
    create,
    findAll,
    findById,
    update,
    remove
} = require('./alunoRepository'); // Importa o repositório

// POST - Criar um novo aluno
function createAluno(req, res) {
    const { nome, email, nome_curso } = req.body;
    if (!nome || !email || !nome_curso) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }
    const aluno = create({ nome, email, nome_curso });
    res.status(201).json(aluno);
}

// GET - Listar todos os alunos
function getAllAlunos(req, res) {
    const alunos = findAll();
    res.json(alunos);
}

// GET - Buscar um aluno por ID
function getAlunoById(req, res) {
    const { id } = req.params;
    const aluno = findById(id);
    if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado!' });
    }
    res.json(aluno);
}

// PUT - Atualizar um aluno por ID
function updateAluno(req, res) {
    const { id } = req.params;
    const { nome, email, nome_curso } = req.body;
    const aluno = update(id, { nome, email, nome_curso });
    if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado!' });
    }
    res.json(aluno);
}

// DELETE - Excluir um aluno por ID
function deleteAluno(req, res) {
    const { id } = req.params;
    const deleted = remove(id);
    if (!deleted) {
        return res.status(404).json({ error: 'Aluno não encontrado!' });
    }
    res.status(204).send();
}

module.exports = {
    create: createAluno,
    getAll: getAllAlunos,
    getOne: getAlunoById,
    update: updateAluno,
    delete: deleteAluno
};
