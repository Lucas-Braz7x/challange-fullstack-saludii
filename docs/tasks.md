# Tarefas

- [x] Criar diagrama do banco de dados
- [x] Criar modelagem do schema prisma

## ✅ Regras de Negócio (RN)

### 📄 Receitas

- [x] Uma receita deve conter obrigatoriamente: título, ingredientes, modo de preparo, tempo de preparo, número de porções e um slug único.
- [ ] O conteúdo dos campos "ingredientes" e "modo de preparo" deve permitir formatação em markdown (ou HTML via tiptap).
- [x] Cada nova receita deve ser adicionada ao feed em tempo real para todos os usuários conectados.
- [x] A receita pode estar vinculada a uma ou mais categorias.
- [x] A receita pode conter uma ou mais tags,
- [x] A receita de permitir múltiplos filtros por palavras-chave.
- [x] O campo "nota pessoal" é opcional e pode ser utilizado para dicas ou observações do autor.

### ❤️ Curtidas

- [x] Qualquer usuário pode curtir qualquer receita, sem necessidade de login.
- [x] Cada clique no botão de curtir incrementa o contador de curtidas da receita em tempo real.
- [x] O total de curtidas deve estar visível no card da receita e ser atualizado em tempo real no feed.

### 🔍 Pesquisa e Filtragem

- [x] Os usuários devem poder pesquisar receitas por título, ingredientes, ou tags.
- [x] Os usuários devem poder filtrar o feed por categoria e/ou por tags.

### 🔗 Compartilhamento

- [ ] Cada receita deve possuir um link único baseado no seu slug (ex: `/receita/bolo-de-cenoura`).
- [ ] O link deve ser copiável e levar diretamente à visualização completa da receita.

---

## 🚀 Regras Não Funcionais (RNF)

### ⚙️ Arquitetura e Tecnologias

- [x] A aplicação deve ser construída utilizando RedwoodJS com Prisma, GraphQL e React.
- [x] O banco de dados utilizado deve ser SQLite.
- [x] A interface deve utilizar o Material UI para componentes visuais.
- [x] A comunicação em tempo real deve ser implementada usando Socket.IO ou Server-Sent Events (SSE).
- [x] A aplicação deve permitir visualização responsiva em desktop e dispositivos móveis.

### 🎯 Usabilidade e Design

- [x] A interface deve ser clara, com tipografia coerente, espaçamentos adequados e paleta de cores harmônica.
- [ ] A criação e visualização de receitas deve ser fluida, com transições suaves e feedbacks visuais.
- [x] O formulário de criação de receita deve validar campos obrigatórios de forma amigável e em tempo real.
- [x] A navegação deve ser intuitiva, com componentes reutilizáveis e consistentes.

### 🧪 Performance e Qualidade

- [ ] O feed de receitas deve carregar rapidamente e refletir atualizações em tempo real com latência mínima.
- [x] A aplicação não deve utilizar o sistema de `cells` do RedwoodJS.
- [x] As consultas GraphQL devem utilizar `DataLoader` do Prisma para evitar problemas de N+1.
- [x] O código da aplicação deve seguir os princípios de clean code: modular, legível e com boa separação de responsabilidades.
- [ ] Os índices no banco devem ser bem definidos, especialmente nos campos utilizados em filtros e buscas.
