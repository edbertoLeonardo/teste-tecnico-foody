# Foody — Sistema de Gerenciamento de Pedidos

Aplicação web desenvolvida como parte de um desafio técnico, com o objetivo de gerenciar pedidos, permitindo autenticação de usuários, criação de pedidos, consulta e atualização de status.

## Tecnologias utilizadas

### Back-end
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- SQLite
- API REST

### Front-end
- React
- JavaScript
- HTML
- CSS

## Funcionalidades

### Autenticação
- Cadastro de usuários com nome, e-mail e senha.
- Login utilizando e-mail e senha.
- Proteção de rotas para usuários autenticados.
- Encerramento de sessão (logout).

### Gerenciamento de pedidos
- Criar pedidos com cliente, itens e endereço de entrega.
- Listar os pedidos do usuário autenticado.
- Buscar um pedido específico pelo ID.
- Atualizar o status de um pedido.
- Restringir o acesso aos pedidos para que cada usuário visualize e altere somente os próprios pedidos.

### Status disponíveis
- `RECEBIDO`
- `EM_PREPARO`
- `SAIU_PARA_ENTREGA`
- `ENTREGUE`
- `CANCELADO`

### Interface web
- Tela de login.
- Tela de cadastro.
- Listagem de pedidos e seus status atuais.
- Formulário para criação de pedidos.
- Atualização de status diretamente na interface.

## Executando o projeto

### Pré-requisitos

- Java instalado, em uma versão compatível com o projeto.
- Maven, caso não esteja utilizando o Maven Wrapper incluído no repositório.
- Node.js e npm.
- Git.

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
cd NOME_DO_REPOSITORIO
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço real do repositório.

### 2. Executar o back-end

Entre na pasta do back-end:

```bash
cd backend
```

Execute a aplicação com o Maven:

```bash
./mvnw spring-boot:run
```

No Windows, utilize:

```bash
mvnw.cmd spring-boot:run
```

Caso o projeto não tenha Maven Wrapper, utilize:

```bash
mvn spring-boot:run
```

A API ficará disponível, por padrão, em:

```text
http://localhost:8080
```

### 3. Executar o front-end

Em outro terminal, entre na pasta do front-end:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

O endereço local do front-end será exibido no terminal. Na configuração atual de desenvolvimento, ele utiliza:

```text
http://localhost:5173
```

## Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/api/auth/register` | Cadastrar usuário |
| `POST` | `/api/auth/login` | Autenticar usuário |
| `GET` | `/api/auth/me` | Consultar usuário autenticado |
| `POST` | `/api/auth/logout` | Encerrar sessão |
| `POST` | `/api/pedidos` | Criar pedido |
| `GET` | `/api/pedidos` | Listar pedidos do usuário |
| `GET` | `/api/pedidos/{id}` | Buscar pedido por ID |
| `PATCH` | `/api/pedidos/{id}/status?novoStatus={status}` | Atualizar status do pedido |

Os endpoints de pedidos exigem autenticação. As rotas de cadastro e login são públicas.

## Persistência e segurança

Os dados são persistidos em banco de dados SQLite.

A aplicação utiliza Spring Security para controlar o acesso aos endpoints protegidos e autenticação baseada em sessão HTTP. O backend também verifica a propriedade dos pedidos para impedir que um usuário consulte ou atualize pedidos pertencentes a outro usuário.

## Versionamento

O projeto utiliza Git para controle de versão e registro do histórico de desenvolvimento.

## Autor

Desenvolvido como parte de um desafio técnico.
