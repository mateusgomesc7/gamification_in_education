# API Gamification

Este é um REST API, o qual é acessado viu protocolo HTTP, utilizando as URLs.

# Base URL
___
```
http://localhost:3333
```

# Users CRUD
___
## Leitura

### Todos os users
Para visualizar todos os users, utilizando o `método GET`:
```
http://localhost:3333/users
```
Exemplo da resposta:
```
[
   {
      "id": 1,
      "nome": "Mateus Gomes",
      "email": "mateusgomesc7@gmail.com",
      "usuario": "mateusg",
      "senha": "123",
      "recuperar_senha": null,
      "chave_descadastro": null,
      "conf_email": null,
      "imagem": null,
      "createdAt": "2020-05-06T00:44:14.000Z",
      "updatedAt": "2020-05-06T00:44:14.000Z"
   },
   {
      "id": 2,
      "nome": "Laura Macaiba",
      "email": "lauramacaiba@gmail.com",
      "usuario": "lauram",
      "senha": "123",
      "recuperar_senha": null,
      "chave_descadastro": null,
      "conf_email": null,
      "imagem": null,
      "createdAt": "2020-05-06T00:47:34.000Z",
      "updatedAt": "2020-05-06T00:47:34.000Z"
   }
]
```

### Apenas um user
Para visualizar um user específico, utilizando o `método GET`.
No lugar de `:user_id`, substituir com o id do user requerido:
```
http://localhost:3333/users/:user_id
```
Exemplo da resposta:
```
{
   "nome": "Mateus Gomes",
   "email": "mateusgomesc7@gmail.com",
   "usuario": "mateusg",
   "senha": "123"
}
```

## Criação

### Criar um user
Para cadastrar um user, utilizando o `método POST`:
```
http://localhost:3333/users
```
Exemplo do corpo da requisição:
```
{
	"nome": "Laura Macaiba",
	"email": "lauramacaiba@gmail.com",
	"usuario": "lauram",
	"senha": "123"
}
```

## Deletar

### Deletar um user
Para deletar um user, utilizando o `método DELETE`.
Para fazer esse tipo de ação é preciso ter autorização, caso esteja sendo aplicado sem autorização, é preciso implementar:
```
/users
```
Exemplo do corpo da requisição:
```
{
	"usuario": "joao"
}
```

# Perguntas CRUD
___
## Leitura

### Todas as perguntas de um user
Para visualizar todos as perguntas relacionadas a um user, utilizando o `método GET`.
No lugar de `:user_id`, substituir com o id do user requerido:
```
http://localhost:3333/users/:user_id/perguntas
```
Exemplo da resposta:
```
[
   {
      "id": 1,
      "titulo": "Primeira pergunta",
      "conteudo": "Testando primeira pergunta utilizando o node.",
      "imagens": null,
      "qnt_acesso": null
   },
   {
      "id": 2,
      "titulo": "Segunda pergunta",
      "conteudo": "Testando Segunda pergunta utilizando o node.",
      "imagens": null,
      "qnt_acesso": null
   },
   {
      "id": 3,
      "titulo": "Terceira pergunta",
      "conteudo": "Testando terceira pergunta utilizando o node.",
      "imagens": null,
      "qnt_acesso": null
   }
]
```

### Todas as perguntas
Para visualizar todos as perguntas, utilizando o `método GET`.
```
http://localhost:3333/perguntas
```
Exemplo da resposta:
```
[
   {
      "id": 1,
      "titulo": "Primeira pergunta",
      "conteudo": "Testando primeira pergunta utilizando o node.",
      "imagens": null,
      "qnt_acesso": null,
      "user": {
         "id": 1,
         "nome": "Mateus Gomes",
         "usuario": "mateusg"
      }
   },
   {
      "id": 2,
      "titulo": "Segunda pergunta",
      "conteudo": "Testando Segunda pergunta utilizando o node.",
      "imagens": null,
      "qnt_acesso": null,
      "user": {
         "id": 1,
         "nome": "Mateus Gomes",
         "usuario": "mateusg"
      }
   }
]
```

## Criação

### Criar uma pergunta
Para cadastrar uma pergunta feita por um user, utilizando o `método POST`.
No lugar de `:user_id`, substituir com o id do user:
```
http://localhost:3333/users/:user_id/perguntas
```
Exemplo do corpo da requisição:
```
{
	"titulo": "Primeira pergunta",
	"conteudo": "Testando primeira pergunta utilizando o node."
}
```

## Deletar

### Deletar uma pergunta pelo user resposável
Para deletar uma pergunta feita pelo user resposável, utilizando o `método DELETE`.
Para fazer esse tipo de ação é preciso está logado com a conta do user que fez a pergunta, caso esteja sendo aplicado sem autorização, é preciso implementar:
```
/users/:user_id/perguntas
```
Exemplo do corpo da requisição, enviar o id da pergunta:
```
{
	"pergunta_id": 5
}
```

### Deletar uma pergunta por um administrador
Para deletar uma pergunta, utilizando o `método DELETE`.
Para fazer esse tipo de ação é preciso ter autorização, caso esteja sendo aplicado sem autorização, é preciso implementar:
```
/perguntas
```
Exemplo do corpo da requisição:
```
{
	"id": 5
}
```

# Comentários CRUD
___
## Leitura

### Todos os comentários de um User
Para visualizar todos os comentários relacionadas a um user, utilizando o `método GET`.
No lugar de `:user_id`, substituir com o id do user requerido:
```
/users/:user_id/comentarios
```
Exemplo da resposta:
```
[
   {
      "pergunta_id": 1,
      "pergunta_titulo": "Título da pergunta teste 1",
      "conteudo": "Comentário teste 1"
   },
   {
      "pergunta_id": 2,
      "pergunta_titulo": "Título da pergunta teste 2",
      "conteudo": "Comentário teste 2"
   },
   {
      "pergunta_id": 3,
      "pergunta_titulo": "Título da pergunta teste 3",
      "conteudo": "Comentário teste 3"
   }
]
```

### Todos os comentários de uma Pergunta
Para visualizar todos os comentários relacionadas a uma pergunta, utilizando o `método GET`.
No lugar de `:pergunta_id`, substituir com o id da pergunta requerida:
```
/perguntas/:pergunta_id/comentarios
```
Exemplo da resposta:
```
[
   {
      "user_usuario": 1,
      "conteudo": "Comentário teste 1"
   },
   {
      "user_usuario": 2,
      "conteudo": "Comentário teste 2"
   },
   {
      "user_usuario": 3,
      "conteudo": "Comentário teste 3"
   }
]
```

## Criação

### Criar um comentário relacionado a uma pergunta
Para cadastrar um comentário de uma pergunta, utilizando o `método POST`.
É preciso estar logado para fazer um comentário.
No lugar de `:pergunta_id`, substituir com o id da pergunta. E no lugar de `:user_id`, no corpo da requisição, substituir com o id do user que fez o comentário:
```
/perguntas/:pergunta_id/comentarios
```
Exemplo do corpo da requisição:
```
{
	"conteudo": "Comentário da pergunta teste 1",
   "user_id": 2
}
```

## Deletar

### Deletar um comentário pelo user resposável
Para deletar um comentário feito pelo user resposável, utilizando o `método DELETE`.
Para fazer esse tipo de ação é preciso está logado com a conta do user que fez o comentário, caso esteja sendo aplicado sem autorização, é preciso implementar:
```
/users/:user_id/comentarios
```
Exemplo do corpo da requisição, enviar o id do comentário:
```
{
	"comentario_id": 5
}
```

### Deletar um comentário por um administrador
Para deletar um comentário, utilizando o `método DELETE`.
Para fazer esse tipo de ação é preciso ter autorização, caso esteja sendo aplicado sem autorização, é preciso implementar:
```
/comentarios
```
Exemplo do corpo da requisição:
```
{
	"id": 5
}
```

# Cursos CRUD
___
## Leitura

### Todos os cursos de um user
Para visualizar todos os cursos relacionadas a um user, utilizando o `método GET`.
No lugar de `:user_id`, substituir com o id do user requerido:
```
/users/:user_id/cursos
```
Exemplo da resposta:
```
[
   {
      "nome": "Engenharia Elétrica"
   },
   {
      "nome": "Engenharia Civil"
   },
   {
      "nome": "Engenharia Mecânica"
   }
]
```

## Criação

### Relacionar/criar um curso com um user
Para cadastrar um curso de um user, utilizando o `método POST`.
Se o curso não estiver cadastrado no Banco de Dados, será criado um novo curso.
No lugar de `:user_id`, substituir com o id do user:
```
/users/:user_id/cursos
```
Exemplo do corpo da requisição:
```
{
	"nome": "Engenharia Elétrica"
}
```

## Deletar

### Deletar relacionamento de curso com user
Para retirar um curso relacionado a um user, utilizando o `método DELETE`.
Neste caso, não exclui o curso, apenas retira o relacionamento do curso com o user.
No lugar de `:user_id`, substituir com o id do user:
```
/users/:user_id/cursos
```
Exemplo do corpo da requisição:
```
{
	"nome": "Engenharia Elétrica"
}
```