## Como usar o react query no next

### 1. Gerencia o estado dos dados que vêm da API

 - React Query mantém o resultado das suas buscas (dados dos livros) no cache, gerenciando loading, erro e dados atuais automaticamente. Você não precisa criar vários estados (useState) para isso.

### 2. Faz o cache automático dos dados

 - Se você buscar o mesmo título várias vezes, React Query pode retornar o dado do cache, evitando chamadas desnecessárias à API — isso melhora performance e evita sobrecarga no backend.

### 3. Controle de loading e erros

 - Ele já te fornece estados como isFetching, isLoading, error, facilitando mostrar feedback para o usuário sem muito esforço.

### 4. Refetch automático e manual

 - Você pode controlar quando buscar os dados (exemplo: só quando o usuário clicar “Buscar”), e pode configurar para refazer buscas automaticamente em vários cenários (quando a página ganha foco, ou a rede volta).

### 5. Sincronização e consistência de dados

 - React Query mantém seus dados sincronizados com a API, por exemplo, atualizando dados em background ou sincronizando dados entre abas do navegador.
