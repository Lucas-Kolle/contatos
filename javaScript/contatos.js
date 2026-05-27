// Link do backend hospedado no Render
const URL = 'https://bakcend-fecaf-render.onrender.com/contatos';

// Função para buscar todos os contatos cadastrados
export async function getContatos() {
    // Faz uma requisição GET para a URL base
    const response = await fetch(URL);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) throw new Error('Erro ao criar um novo contato!');

    // Retorna os dados da resposta convertidos para JSON
    return response.json();
}

// Função para buscar um contato pelo ID
export async function getContato(id) {
    // Faz uma requisição GET para a URL com o ID do contato
    const response = await fetch(`${URL}/${id}`);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) throw new Error(`Erro ao listar o contato ${id}!`);

    // Retorna os dados da resposta convertidos para JSON
    return response.json();
}

// Função para cadastrar um novo contato
export async function postContato(contato) {
    // Configurações da requisição POST
    const options = {
        method: "POST", // Define o método HTTP como POST
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(contato) // Converte o objeto contato para uma string JSON
    };

    // Faz a requisição POST para a URL base com as opções configuradas
    const response = await fetch(URL, options);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) throw new Error('Error ao criar um novo contato!');

    // Retorna os dados da resposta convertidos para JSON
    return response.json();
}

// Função para atualizar um contato existente
export async function putContato(id, contato) {
    // Configurações da requisição PUT
    const options = {
        method: "PUT", // Define o método HTTP como PUT
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(contato) // Converte o objeto contato para uma string JSON
    };

    // Faz a requisição PUT para a URL com o ID do contato
    const response = await fetch(`${URL}/${id}`, options);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) throw new Error(`Error ao atualizar o contato!`);

    // Retorna os dados da resposta convertidos para JSON
    return response.json();
}

// Função para deletar um contato pelo ID
export async function deleteContato(id) {
    // Configurações da requisição DELETE
    const options = {
        method: "DELETE" // Define o método HTTP como DELETE
    };

    // Faz a requisição DELETE para a URL com o ID do contato
    const response = await fetch(`${URL}/${id}`, options);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) throw new Error(`Error ao excluir o contato!`);

    // Retorna true para indicar que a exclusão foi bem-sucedida
    return true;
}