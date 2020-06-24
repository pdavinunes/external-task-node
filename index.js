const { Client, logger } = require('camunda-external-task-client-js');

// Configuração do cliente:
//  - 'baseUrl': url do Process Engine
//  - 'logger': Utiliza automaticamente log para mostrar os eventos
//  - 'asyncResponseTimeout': long polling timeout (Um novo pedido será emitido)
const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

// Cria uma instância do cliente com a configurações acima
const client = new Client(config);

// Se inscrive no tópico: 'save_user'
client.subscribe('save_user', async function({ task, taskService }) {

  // Pega a variaveis do processo
  const username = task.variables.get('username');
  const email = task.variables.get('email');

  console.log(`Salvando o usuário ${username} com o email '${email}'...`);

  // Complete a atividade
  await taskService.complete(task);
});

// Se inscrive no tópico: 'send_email'
client.subscribe('send_email', async function({ task, taskService }) { 

    const email = task.variables.get('email');

    console.log(`Enviando email para ${email}.`);
    
    await taskService.complete(task);
});