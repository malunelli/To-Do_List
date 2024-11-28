// Referências aos elementos HTML
const form = document.getElementById('form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Função para adicionar tarefa
function addTask(event) {
    event.preventDefault(); // Evitar o envio do formulário

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Criando o item de tarefa
        const li = document.createElement('li');
        li.classList.add('task'); // Adicionar uma classe para a tarefa

        // Adicionar o conteúdo da tarefa e o botão de excluir
        li.innerHTML = `
            ${taskText}
            <button class="delete">Excluir</button>
        `;

        // Adicionar a tarefa à lista
        taskList.appendChild(li);

        // Limpar o campo de input
        taskInput.value = "";

        // Adicionar evento de marcar como concluída
        li.addEventListener('click', function () {
            // Alternar a classe 'completed' para riscar ou desmarcar
            li.classList.toggle('completed');
        });

        // Adicionar evento de excluir tarefa
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', function (e) {
            // Impedir a propagação do evento de click na tarefa
            e.stopPropagation();
            taskList.removeChild(li);
        });
    }
}

// Evento para o envio do formulário
form.addEventListener('submit', addTask);
