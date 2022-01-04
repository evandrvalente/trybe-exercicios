# DIA 1

O objetivo dos exercícios desse dia foi aprender aprender sobre formulários em HTML.

###Parte prática - Visualizando o Box Model na prática:
1 - Reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo index.html e um arquivo style.css.
-Instruções nos comentários do arquivo CSS.
[Arquivo html desta atividade](index01.html)
[Arquivo css desta atividade](style01.css)

###Parte prática - Posicionamento de Elementos:
1 - Posicione o Mário acima do Goomba.
2 - Posicione a tag p para que fique dentro do balão de fala.
3 - Posicione o balão para que se torne uma fala de Bowser.
Personagens pertencentes à Nintendo©
[Arquivo html desta atividade](index02.html)
[Arquivo css desta atividade](style02.css)

###Parte prática - Parte I e II:
Criando uma tela de login🔥
1 - Adicione os campos de entrada para email e senha.
2 - Adicione um checkbox com o texto Lembre-me .
3 - Adicione um botão com o texto Entrar .
4 - Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
5 - Adicione o atributo required para os campos de email e senha.
6 - Adicione o atributo autocomplete="off" para o campo de email.
7 - Adicione o atributo autofocus para o campo de email.
[Arquivo html desta atividade](aula1.html)

###Parte prática - Prevent default:
1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. 
[Arquivo html desta atividade](aula2.html)
[Arquivo css desta atividade](aula2.css)

###Exercícios

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:
Faça as validações inicialmente pelo HTML
Crie um <fieldset> para os seguintes dados pessoais:
Nome - Texto
Limite de 40 caracteres
Campo obrigatório
Email - Texto
Limite de 50 caracteres
Campo obrigatório
CPF - Texto
Limite de 11 caracteres
Campo obrigatório
Endereço - Texto
Limite de 200 caracteres
Campo obrigatório
Cidade - Texto
Limite de 28 caracteres
Campo obrigatório
Estado - Select
Todos os estados do Brasil
Utilize estruturas de repetição via JavaScript para gerar os <option>
Campo obrigatório
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório
Crie outro <fieldset> para dados do seu último emprego
Resumo do currículo - TextArea
Limite de 1000 caracteres
Campo obrigatório
Cargo - Texto
Limite de 40 caracteres
Campo obrigatório
Descrição do cargo - Texto
Limite de 500 caracteres
Campo obrigatório
Data de início - Texto
Verificar o formato da data dd/mm/aaaa .
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
Campo obrigatório
Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

[Arquivo html desta atividade](index.html)
[Arquivo css desta atividade](style.css)
[Arquivo js desta atividade](script.js)