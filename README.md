## Usando External Tasks do Camunda com Node.js

Exemplo básico de como se comunicar com a Engine do Camunda via External Tasks, utlizando um cliente Node.js

## Pré-requisitos 

* [Node.js](https://nodejs.org/en/download/)
* [Camunda BPM Platform](https://camunda.com/download/)  
* [Camunda Modeler](https://docs.camunda.org/manual/latest/installation/camunda-modeler/)

## Usando

* Inicie o Camunda BPM Platform de acordo com seu sistema operacional
* Abra o Camunda Modeler, em seguida abra o arquivo `/bpmn/cad-user.bpmn` e faça o deploy do processo.
* Use o comando 

```sh
$ node index.js
```
* Agora você pode testar a aplicação com usando o Postman ou o Insomnia. 

Mais detalhes da implementação pode ser encontrado [aqui](https://www.luiztools.com.br/post/tutorial-de-workflow-bpm-com-node-js-camunda/)! 
