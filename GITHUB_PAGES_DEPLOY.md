# 🚀 Deploy em GitHub Pages

Guia passo-a-passo para publicar o teu escape puzzle online gratuitamente!

## O que é GitHub Pages?

**GitHub Pages** é um serviço gratuito do GitHub que hospeda sites estáticos diretamente de um repositório.

- ✅ Grátis
- ✅ Sem publicidade
- ✅ Domínio incluído (username.github.io)
- ✅ HTTPS automático

## Opção 1: Primeiro Uso do Git? (Recomendado)

### Passo 1: Criar Repositório no GitHub

1. Vai para [github.com](https://github.com)
2. Faz login ou cria conta (grátis)
3. Clica no **"+"** (canto superior direito)
4. Seleciona **"New repository"**
5. **Nome do repositório**: podes usar qualquer nome (ex: `voucher-espectaculo`)
6. **Descrição**: "Escape puzzle para desbloquear voucher" (opcional)
7. Escolhe **"Public"** (necessário para GitHub Pages funcionar)
8. Deixa as outras opções por omissão
9. Clica em **"Create repository"**

### Passo 2: Fazer Upload dos Ficheiros

**Opção A: Via GitHub Web (Mais Fácil)**

1. No teu repositório novo, clica em **"Upload files"** (ou arrastar ficheiros)
2. Arrasta a pasta inteira do projeto (index.html, assets/, README.md, etc.)
3. Em baixo, clica em **"Commit changes"**
4. Deixa a mensagem por omissão (ou escreve "Primeira versão")
5. Clica em **"Commit changes"**

**Opção B: Via Git (Linha de Comando)**

```bash
cd c:\Users\User\source\repos\kings

# Inicializar git
git init

# Adicionar todas os ficheiros
git add .

# Fazer commit inicial
git commit -m "Primeira versão do escape puzzle"

# Adicionar repositório remoto (substitui USERNAME e REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Fazer push para main
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório GitHub, vai para **Settings**
2. No menu esquerdo, clica em **"Pages"**
3. Em **"Source"**, seleciona:
   - **Branch**: `main`
   - **Pasta**: `/ (root)`
4. Clica em **"Save"**

GitHub automaticamente fará deploy!

### Passo 4: Aceder ao Site

Após alguns segundos, verás uma mensagem tipo:
```
Your site is published at https://USERNAME.github.io/REPO/
```

Clica no link ou abre manualmente: `https://USERNAME.github.io/nome-repositorio/`

## Opção 2: Já Tenho Git Configurado

Se já usas Git:

```bash
# Dentro da pasta do projeto
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Depois segue o **Passo 3** acima.

## Atualizar o Site

Sempre que faças mudanças:

1. Edita os ficheiros (index.html, CSS, JS, etc.)
2. Faz commit:
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push
   ```
3. GitHub Pages atualiza automaticamente (em 1-2 minutos)

## Dicas Importantes

### 1️⃣ URL Personalizado (Domínio Custom)

Se tiveres um domínio próprio (ex: meusite.com):

1. Vai para **Settings → Pages**
2. Em **"Custom domain"**, insere o teu domínio
3. Clica **"Save"**
4. No teu registador de domínios, configura:
   - **CNAME** → `USERNAME.github.io`

### 2️⃣ HTTPS Automático

GitHub Pages ativa HTTPS automaticamente. Sem preocupações com certificados!

### 3️⃣ Ícone/Favicon

Se quiseres um ícone na aba do browser:

1. Cria uma imagem `favicon.ico` (32x32 pixels)
2. Coloca na raiz (`/favicon.ico`)
3. No `index.html`, adiciona:
   ```html
   <link rel="icon" href="favicon.ico">
   ```

### 4️⃣ Privacidade de Email

Usa uma conta GitHub privada ou email alternativo se quiser manter a privacidade.

## Troubleshooting

### "A página aparece mas sem estilos"

**Problema**: CSS não carrega porque o caminho está errado.

**Solução**: 
- Se o repo é `username.github.io` (sem /nome/):
  ```html
  <link rel="stylesheet" href="assets/style.css">
  ```
- Se o repo tem nome (ex: `voucher-puzzle`):
  ```html
  <link rel="stylesheet" href="/voucher-puzzle/assets/style.css">
  ```

No nosso caso, como é um repo nomeado, os caminhos relativos funcionam bem!

### "A página mostra erro 404"

**Causas possíveis**:
1. Ficheiro `index.html` não está na raiz
2. GitHub Pages ainda está a fazer deploy (espera 2-3 minutos)
3. Repositório está privado (tem de ser público)

**Solução**:
- Vai a **Settings → Pages**
- Verifica que **Source** está em `main / (root)`
- Espera 5 minutos

### "As mudanças não aparecem"

1. Fez push com Git?
2. Limpa cache (Ctrl+Shift+Del ou Cmd+Shift+Del)
3. Abre em modo anónimo (testa se é cache)

## Próximos Passos (Opcional)

### Adicionar Analytics
Podes adicionar Google Analytics para ver estatísticas:

1. Cria conta em [google.com/analytics](https://google.com/analytics)
2. Copia o código de rastreamento
3. No `index.html`, cola no `<head>`

### Domínio Custom
Investe num domínio barato (ex: 2€/ano) em registadores como:
- Namecheap
- GoDaddy
- Registr.pt (Portugal)

### CI/CD Automático
O ficheiro `.github/workflows/deploy.yml` que incluímos permite deploy automático!

---

**Parabéns! O teu escape puzzle está online!** 🎉

Partilha o link com a tua irmã e marido! 🎭
