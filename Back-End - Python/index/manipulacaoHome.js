async function carregarDados(){
    const response = await axios.get('http://127.0.0.1:8000/pessoas');

    const pessoas = response.data;

    const lista = document.getElementById('mid-container');

    lista.innerHTML = ''

    pessoas.forEach(pessoa => {
        const item = document.createElement('div')
        item.innerHTML = `<div class="card">
                                        <ul>
                                            <li>${pessoa.nome}</li>
                                            <li>${pessoa.idade}</li>
                                            <li>${pessoa.genero}</li>
                                        </ul>
                                    </div>`
        lista.appendChild(item)
    });
}

function manipularFormulario(){
    const formElement = document.getElementById('formulario');
    const input_nome = document.getElementById('nome');
    const input_idade = document.getElementById('idade');
    const input_genero = document.getElementById('genero');

    formElement.onsubmit = (event)=>{
        event.preventDefault();
        const nome_pessoa = input_nome.value;
        const idade_pessoa = input_idade.value;
        const genero_pessoa = input_genero.value;

        axios.post('http://127.0.0.1:8000/pessoas', {
            nome: nome_pessoa,
            idade: idade_pessoa,
            genero: genero_pessoa,
        });

        carregarDados();
    };
}


function app(){
    console.log("App Iniciada");
    carregarDados();
    manipularFormulario();
};

app();