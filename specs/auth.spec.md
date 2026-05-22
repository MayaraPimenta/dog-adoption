## Autenticação

### Fluxos cobertos
- Login com email e senha
- Registro de nova conta
- Logout
- Proteção de rotas autenticadas

---

## LoginView (`/login`)

### Estados
- idle: formulário vazio, botão habilitado
- loading: botão desabilitado, spinner visível
- error: mensagem de erro exibida abaixo do formulário
- success: redirecionado para `/` (home)

### Critérios de aceite
- [ ] Exibe campos "Email" e "Senha"
- [ ] Submissão com campos vazios exibe mensagem de validação
- [ ] Durante loading, botão fica desabilitado e exibe indicador de carregamento
- [ ] Login bem-sucedido salva token em `localStorage` e redireciona para `/`
- [ ] Erro da API (401) exibe mensagem "Email ou senha inválidos"
- [ ] Erro genérico exibe "Erro ao realizar login"
- [ ] Link "Criar conta" navega para `/register`

---

## RegisterView (`/register`)

### Estados
- idle: formulário vazio, botão habilitado
- loading: botão desabilitado, spinner visível
- error: mensagem de erro exibida abaixo do formulário
- success: redirecionado para `/login` com mensagem de confirmação

### Critérios de aceite
- [ ] Exibe campos "Nome", "Email" e "Senha"
- [ ] Submissão com campos vazios exibe mensagem de validação
- [ ] Senha deve ter no mínimo 8 caracteres (validação client-side)
- [ ] Durante loading, botão fica desabilitado
- [ ] Registro bem-sucedido redireciona para `/login`
- [ ] Erro de email já cadastrado exibe mensagem da API
- [ ] Link "Já tenho conta" navega para `/login`

---

## useAuthStore

### Estado
| propriedade     | tipo              | descrição                              |
|-----------------|-------------------|----------------------------------------|
| token           | string \| null    | JWT; inicializado do `localStorage`    |
| loading         | boolean           | operação assíncrona em andamento       |
| error           | string \| null    | última mensagem de erro                |
| isAuthenticated | computed boolean  | `true` quando token não é nulo         |

### Critérios de aceite — login
- [ ] Chama `AuthService.login()` com as credenciais
- [ ] Salva token em `localStorage` com chave `'token'`
- [ ] Chama `useUserStore.setUser()` com o usuário retornado
- [ ] Define `loading = true` durante a requisição e `false` ao finalizar
- [ ] Em caso de erro, popula `error` com a mensagem e re-lança a exceção

### Critérios de aceite — register
- [ ] Chama `AuthService.register()` com as credenciais
- [ ] Em caso de erro, popula `error` com a mensagem e re-lança a exceção

### Critérios de aceite — logout
- [ ] Chama `AuthService.logout()` (ignora erro de rede)
- [ ] Remove token de `localStorage`
- [ ] Chama `useUserStore.clearUser()`
- [ ] Define `isAuthenticated` como `false`

---

## AuthService

### Critérios de aceite
- [ ] `login()` faz POST em `/auth/login` com `skipAuth: true`
- [ ] `register()` faz POST em `/auth/register` com `skipAuth: true`
- [ ] `logout()` faz POST em `/auth/logout` com token no header

---

## Proteção de rotas

### Critérios de aceite
- [ ] Rotas marcadas com `meta.requiresAuth: true` redirecionam para `/login` se não autenticado
- [ ] Usuário autenticado que acessa `/login` ou `/register` é redirecionado para `/`
