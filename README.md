# App de Receitas


## Descrição Geral
Um aplicativo interativo e colaborativo de compartilhamento de receitas culinárias que permite aos usuários criar, visualizar e interagir com receitas de forma simples e divertida, tudo em tempo real. Sem a necessidade de login ou senha ou cadastro, qualquer usuário pode contribuir com suas delícias gastronômicas e explorar o vasto universo de receitas compartilhadas por outros amantes da culinária.

**Características Principais:**

1. **Feed de Receitas em Tempo Real:** Os usuários podem acessar um feed dinâmico de receitas que é atualizado em tempo real. Novas receitas aparecem instantaneamente para todos os usuários, garantindo uma experiência vibrante e sempre fresca.

2. **Postagens de Receitas:** Cada receita possui seus próprios detalhes, incluindo:
   - **Título da Receita:** Um nome cativante para a sua criação culinária.
   - **Ingredientes:** Listagem clara e formatada, utilizando markdown, para facilitar o entendimento.
   - **Modo de Preparo:** Instruções passo a passo para o preparo da receita.
   - **Tempo de Preparo:** Informações sobre o tempo necessário para preparar a receita e o número de porções que ela rende.
   - **Nota Pessoal:** Um espaço para os criadores compartilharem dicas pessoais ou variações da receita.
   - **Link Único:** Cada receita recebe um link único, permitindo que os usuários compartilhem suas criações facilmente nas redes sociais ou com amigos.

3. **Interação com Curtidas:** Os usuários podem apreciar as receitas que mais gostam clicando no botão de "Curtir". Cada postagem exibe a quantidade total de curtidas recebidas, permitindo que as melhores receitas se destaquem no feed e sejam facilmente encontradas.

4. **Visualização e Pesquisa:** Um sistema de categorização e tags permite que os usuários filtrem receitas por categorias (como sobremesas, pratos principais, aperitivos, etc.) ou pesquisem por palavras-chave, facilitando a navegação e descoberta de novas delícias.

5. **Feedback em Tempo Real:** Assim que uma nova receita é postada ou um usuário dá 'like' em uma receita, todos os usuários conectados são instantaneamente notificados e seus feeds atualizados, proporcionando um senso de comunidade e interação, caso queiram discutir sobre as receitas.

6. **Interface Intuitiva:** A aplicação utilizará o Material UI para fornecer uma interface elegante e intuitiva, proporcionando uma experiência de uso fluida e agradável, tanto em dispositivos móveis quanto em desktops.

## Requisitos

Neste desafio, você deve utilizar as seguintes tecnologias:

- RedwoodJS (Prisma, Graphql e React)
- Material UI (@mui/material)
- tiptap (ou uma biblioteca similar)
- socket.IO ou SSE
- SQLite como banco de dados

## Avaliação do teste

A avaliação do será feita com base em diversos critérios que visam garantir a qualidade do código, a performance da aplicação e a experiência do usuário. Outros fatores a serem considerados incluem as boas práticas de desenvolvimento e a estrutura da aplicação. Os critérios de avaliação são os seguintes:

1. **Schema do Banco de Dados:**
   - Esperamos um schema claro e bem estruturado, com as relações entre entidades definidas de forma lógica e eficaz.
   - Os índices devem ser criados de acordo com os padrões de busca, otimizando a performance das consultas.
   - A nomenclatura utilizada deve ser intuitiva e descritiva, facilitando o entendimento dos objetivos de cada entidade e suas inter-relações.

2. **Rotas/Schemas do GraphQL:**
   - A implementação das rotas deve seguir as melhores práticas de desenvolvimento, especialmente no que diz respeito aos field resolvers.
   - A utilização do DataLoader do Prisma deve ser aplicada sempre que possível, de forma a evitar o problema de N+1 queries e maximizar a eficiência das consultas.

3. **Organização do Código e Clean Code:**
   - A aplicação deve seguir princípios de clean code, garantindo que o código seja legível, modular e bem estruturado.
   - Devem ser aplicados padrões de nomenclatura consistentes e organização lógica dos arquivos e pastas.

4. **Uso dos Componentes do MUI e Suas Features:**
   - Avaliaremos a utilização adequada dos componentes do Material UI (MUI), aproveitando suas funcionalidades e características para oferecer uma interface mais rica e interativa.
   - Esperamos que o desenvolvedor faça uso criativo dos componentes e personalize-os quando necessário para atender os requisitos da aplicação.

5. **Organização dos Componentes:**
   - A estrutura dos componentes deve refletir o conceito de reutilização, com componentes bem definidos e modularizados, permitindo a fácil manutenção e escalabilidade da aplicação.
   - É importante que os componentes sigam uma hierarquia lógica e intuitiva.

6. **State Management e Queries:**
   - Embora o RedwoodJS ofereça a funcionalidade de cells, a recomendação é não usá-la. Em vez disso, o gerenciamento de estado e a execução de queries devem ser realizados de maneira transparente e eficiente.
   - A escolha da estratégia de gerenciamento de estado deve ser adequada ao tamanho e complexidade da aplicação.

7. **UI/UX:**
   - Esperamos um design simples, funcional e visualmente agradável, que proporcione uma experiência de uso intuitiva.
   - A tipografia utilizada deve ser clara e coerente, o uso de cores deve ser harmonioso e os espaçamentos devem ser bem planejados para garantir a legibilidade e a estética da interface.

8. **Performance do Feed de Receitas:**
   - A performance do feed de receitas será avaliada quanto à rapidez na carga e atualização das postagens em tempo real.
   - O tempo de resposta para as interações do usuário, como curtidas e visualizações, também será considerado para garantir que a aplicação seja responsiva e eficiente.
# App de Receitas


## Descrição Geral
Um aplicativo interativo e colaborativo de compartilhamento de receitas culinárias que permite aos usuários criar, visualizar e interagir com receitas de forma simples e divertida, tudo em tempo real. Sem a necessidade de login ou senha ou cadastro, qualquer usuário pode contribuir com suas delícias gastronômicas e explorar o vasto universo de receitas compartilhadas por outros amantes da culinária.

**Características Principais:**

1. **Feed de Receitas em Tempo Real:** Os usuários podem acessar um feed dinâmico de receitas que é atualizado em tempo real. Novas receitas aparecem instantaneamente para todos os usuários, garantindo uma experiência vibrante e sempre fresca.

2. **Postagens de Receitas:** Cada receita possui seus próprios detalhes, incluindo:
   - **Título da Receita:** Um nome cativante para a sua criação culinária.
   - **Ingredientes:** Listagem clara e formatada, utilizando markdown, para facilitar o entendimento.
   - **Modo de Preparo:** Instruções passo a passo para o preparo da receita.
   - **Tempo de Preparo:** Informações sobre o tempo necessário para preparar a receita e o número de porções que ela rende.
   - **Nota Pessoal:** Um espaço para os criadores compartilharem dicas pessoais ou variações da receita.
   - **Link Único:** Cada receita recebe um link único, permitindo que os usuários compartilhem suas criações facilmente nas redes sociais ou com amigos.

3. **Interação com Curtidas:** Os usuários podem apreciar as receitas que mais gostam clicando no botão de "Curtir". Cada postagem exibe a quantidade total de curtidas recebidas, permitindo que as melhores receitas se destaquem no feed e sejam facilmente encontradas.

4. **Visualização e Pesquisa:** Um sistema de categorização e tags permite que os usuários filtrem receitas por categorias (como sobremesas, pratos principais, aperitivos, etc.) ou pesquisem por palavras-chave, facilitando a navegação e descoberta de novas delícias.

5. **Feedback em Tempo Real:** Assim que uma nova receita é postada ou um usuário dá 'like' em uma receita, todos os usuários conectados são instantaneamente notificados e seus feeds atualizados, proporcionando um senso de comunidade e interação, caso queiram discutir sobre as receitas.

6. **Interface Intuitiva:** A aplicação utilizará o Material UI para fornecer uma interface elegante e intuitiva, proporcionando uma experiência de uso fluida e agradável, tanto em dispositivos móveis quanto em desktops.

## Requisitos

Neste desafio, você deve utilizar as seguintes tecnologias:

- RedwoodJS (Prisma, Graphql e React)
- Material UI (@mui/material)
- tiptap (ou uma biblioteca similar)
- socket.IO ou SSE
- SQLite como banco de dados

## Avaliação do teste

A avaliação do será feita com base em diversos critérios que visam garantir a qualidade do código, a performance da aplicação e a experiência do usuário. Outros fatores a serem considerados incluem as boas práticas de desenvolvimento e a estrutura da aplicação. Os critérios de avaliação são os seguintes:

1. **Schema do Banco de Dados:**
   - Esperamos um schema claro e bem estruturado, com as relações entre entidades definidas de forma lógica e eficaz.
   - Os índices devem ser criados de acordo com os padrões de busca, otimizando a performance das consultas.
   - A nomenclatura utilizada deve ser intuitiva e descritiva, facilitando o entendimento dos objetivos de cada entidade e suas inter-relações.

2. **Rotas/Schemas do GraphQL:**
   - A implementação das rotas deve seguir as melhores práticas de desenvolvimento, especialmente no que diz respeito aos field resolvers.
   - A utilização do DataLoader do Prisma deve ser aplicada sempre que possível, de forma a evitar o problema de N+1 queries e maximizar a eficiência das consultas.

3. **Organização do Código e Clean Code:**
   - A aplicação deve seguir princípios de clean code, garantindo que o código seja legível, modular e bem estruturado.
   - Devem ser aplicados padrões de nomenclatura consistentes e organização lógica dos arquivos e pastas.

4. **Uso dos Componentes do MUI e Suas Features:**
   - Avaliaremos a utilização adequada dos componentes do Material UI (MUI), aproveitando suas funcionalidades e características para oferecer uma interface mais rica e interativa.
   - Esperamos que o desenvolvedor faça uso criativo dos componentes e personalize-os quando necessário para atender os requisitos da aplicação.

5. **Organização dos Componentes:**
   - A estrutura dos componentes deve refletir o conceito de reutilização, com componentes bem definidos e modularizados, permitindo a fácil manutenção e escalabilidade da aplicação.
   - É importante que os componentes sigam uma hierarquia lógica e intuitiva.

6. **State Management e Queries:**
   - Embora o RedwoodJS ofereça a funcionalidade de cells, a recomendação é não usá-la. Em vez disso, o gerenciamento de estado e a execução de queries devem ser realizados de maneira transparente e eficiente.
   - A escolha da estratégia de gerenciamento de estado deve ser adequada ao tamanho e complexidade da aplicação.

7. **UI/UX:**
   - Esperamos um design simples, funcional e visualmente agradável, que proporcione uma experiência de uso intuitiva.
   - A tipografia utilizada deve ser clara e coerente, o uso de cores deve ser harmonioso e os espaçamentos devem ser bem planejados para garantir a legibilidade e a estética da interface.

8. **Performance do Feed de Receitas:**
   - A performance do feed de receitas será avaliada quanto à rapidez na carga e atualização das postagens em tempo real.
   - O tempo de resposta para as interações do usuário, como curtidas e visualizações, também será considerado para garantir que a aplicação seja responsiva e eficiente.
