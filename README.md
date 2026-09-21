        -Funcionalidades

A aplicação permite:

Criar um novo ticket de atendimento;
Informar o nome do cliente;
Selecionar o canal de origem:
Email;
Chat;
Telefone;
Informar a descrição do problema;
Criar automaticamente novos tickets com status aberto;
Listar todos os tickets cadastrados;
Visualizar nome do cliente, canal, descrição e status;
Resolver tickets que estão abertos;
Impedir que um ticket já resolvido seja resolvido novamente;
Validar campos obrigatórios;
Impedir a criação de tickets com canais inválidos;
Exibir mensagens de erro e sucesso na interface;
Atualizar a lista após a criação ou resolução de um ticket.

        -Tecnologias utilizadas

    Back-end:
Node.js
Express
JavaScript
CORS

    Front-end:
HTML5
CSS3
JavaScript
Fetch API
Testes
Jest

    Versionamento:
Git
GitHub

        -Persistência dos dados

Para este projeto foi utilizada persistência em memória.

Os tickets são armazenados em um array JavaScript durante a execução do servidor.

Por esse motivo, ao reiniciar o servidor, os tickets cadastrados anteriormente são removidos.

Não foi utilizado banco de dados.

        -Decisões técnicas

O projeto foi desenvolvido utilizando JavaScript tanto no front-end quanto no back-end para manter uma única linguagem durante todo o desenvolvimento.

Front-end sem framework

Foi utilizado HTML, CSS e JavaScript puro.

Como a aplicação possui um escopo pequeno, essa abordagem permite manter a implementação simples e concentrar o desenvolvimento nas funcionalidades e na integração com a API.

Express

Express foi utilizado para simplificar a criação da API REST e o gerenciamento das rotas HTTP.

        -Regras de negócio

As principais regras implementadas são:

Todo ticket deve possuir nome do cliente;
Todo ticket deve possuir uma descrição;
O canal deve ser email, chat ou telefone;
Todo novo ticket deve nascer com status aberto;
Um ticket aberto pode ser marcado como resolvido;
Um ticket resolvido não pode ser resolvido novamente;
A lista apresentada no front-end deve refletir os dados mantidos pelo back-end.