# Challange Fullstack Saludii

Repositório do desafio fullstack para a aplicação Saludii, desenvolvida com RedwoodJS, focada em escalabilidade, organização e boas práticas de desenvolvimento.

OBS: Apenas o socket que não foi possível rodar junto devido as limitações do Render e do sqlite

Dê uma olhadinha: [Site](https://challange-fullstack-saludii.onrender.com/)

---

## 🚀 Tecnologias utilizadas

### Framework e Backend
- **RedwoodJS (v8.8.0)** — Framework fullstack React + GraphQL + Prisma focado em produtividade e convenções.
- **Node.js 20.x** — Runtime backend moderno.
- **Fastify** — Servidor HTTP leve e performático, utilizado internamente pelo Redwood.
- **Prisma ORM** — Gerenciamento e migração do banco de dados.
- **SQLite** — Banco de dados utilizado para desenvolvimento (local e deploy).

### Frontend
- **React 18.3.1** — Biblioteca para UI.
- **@mui/material & @mui/icons-material** — Componentes e ícones Material UI para design responsivo e moderno.
- **Formik & Yup** — Gerenciamento e validação de formulários.
- **Day.js** — Manipulação de datas leve.
- **TipTap** — Editor de texto rich text moderno baseado em ProseMirror.
- **Socket.IO client** — Comunicação em tempo real no frontend.

### Backend extras
- **Socket.IO server** — Comunicação em tempo real via WebSocket.
- **Dataloader** — Batch loading para evitar overfetching no GraphQL.

---

## 🧱 Estrutura e Design Patterns aplicados

### Clean Code
- Código organizado e legível.
- Nomeação clara e semântica.
- Funções pequenas, responsabilidades únicas.
- Tratamento adequado de erros.

### Repository Pattern
- Camada de acesso a dados abstraída via Prisma.
- Serviços utilizam repositórios para operações no banco.
- Facilita testes e troca de implementação.

### Service Layer
- Lógica de negócio isolada nos serviços.
- Controladores e resolvers delegam responsabilidade.
- Facilita manutenção e evolução da aplicação.

### Factory Pattern
- Utilizado para criação de objetos complexos, especialmente na inicialização de serviços ou entidades.
- Facilita a configuração e instanciação de componentes que dependem de vários parâmetros ou estados.
- Ajuda a desacoplar a criação do uso dos objetos, aumentando a flexibilidade do código.

### SOLID Principles
- **Single Responsibility** — Cada módulo/função tem uma única responsabilidade.
- **Open/Closed** — Código aberto para extensão e fechado para modificação via serviços.
- **Liskov Substitution** — Interfaces e contratos respeitados (especialmente na abstração da camada de dados).
- **Interface Segregation** — Interfaces específicas para cada serviço/repositório.
- **Dependency Inversion** — Dependências invertidas, serviços e repositórios desacoplados.

---

## ⚙️ Scripts principais

| Comando          | Descrição                                         |
|------------------|--------------------------------------------------|
| `yarn dev`       | Roda o RedwoodJS em modo desenvolvimento.        |
| `yarn build`     | Compila e prepara para produção.                  |
| `yarn postinstall` | Gera Prisma Client e aplica migrações automaticamente. |
| `yarn socket`    | Roda o servidor Socket.IO isolado (caso necessário). |

---

## 📂 Estrutura de pastas principais

├── api/ # Backend RedwoodJS (GraphQL, serviços, funções)
│ ├── db/ # Esquema e migrações Prisma
│ ├── src/
│ │ ├── services/ # Lógica de negócio isolada
│ │ ├── socket.ts # Servidor Socket.IO (separado)
│ │ └── ...
├── web/ # Frontend RedwoodJS (React, rotas, páginas)
│ ├── src/
│ │ ├── components/ # Componentes UI reutilizáveis
│ │ ├── layouts/ # Layouts e wrappers
│ │ ├── pages/ # Páginas da aplicação
│ │ └── ...
├── package.json # Workspace principal com scripts e dependências
├── yarn.lock
└── ...

---

## 📡 Comunicação em tempo real

- Utiliza Socket.IO para troca de eventos em tempo real (exemplo: atualizações de curtidas nas receitas).
- Backend roda Socket.IO integrado ao Redwood (ou isolado via script `socket.ts`).
- Frontend usa cliente Socket.IO para conexão e escuta de eventos.

---

## 🛠️ Considerações finais

- O projeto utiliza Workspaces Yarn para gerenciar os pacotes `api` e `web` separadamente, facilitando o desenvolvimento fullstack.
- Adotado o padrão Clean Architecture para separar responsabilidades e permitir escalabilidade futura.
- Código estruturado para facilitar testes unitários e manutenção.
- Segue boas práticas recomendadas pela comunidade RedwoodJS e padrões sólidos de engenharia de software.

---

