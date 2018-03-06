
Para rodar o projeto são necessários alguns itens para o desenvolvimento:

1. nodejs
2. bower
3. gulp

Para instalar o node va em nodejs.org e faca o download para o seu OS

após o node instalado va ao terminal (no mac sugiro iterm2 e no windows sugiro o cmder) e digite

`npm install -g gulp-cli && bower`

Com isso vc instalará as duas dependencias para RODAR o projeto

Após isso entre na pasta do projeto e digite no terminal:

`npm install --save && bower install --save`

Estes comandos instalarão as dependências DO PROJETO (angular, bootstrap e etc)

Usamos o firebase como banco de dados e host do projeto

Após alterar o projeto rode `gulp build` para gerar uma versao final do projeto e para subi-lo ao ar `firebase deploy`

para usar o firebase vc precisa estar cadastrado nele e ter uma permissao dada pelo administrador do projeto.

Att
