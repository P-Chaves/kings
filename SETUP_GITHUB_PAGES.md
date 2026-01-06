# 🚀 Como Publicar no GitHub Pages

Este guia explica como publicar o teu projeto no GitHub Pages.

## ✅ O que já está configurado

Este repositório já tem:
- ✅ Um workflow do GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Todos os ficheiros necessários para o site funcionar
- ✅ Configuração automática para deploy quando fazes push para `main`

## 📝 Passos para Ativar o GitHub Pages

### Passo 1: Fazer Merge do Pull Request

1. Vai ao teu repositório no GitHub: https://github.com/P-Chaves/kings
2. Encontra o Pull Request criado por este workflow
3. Clica em **"Merge pull request"**
4. Confirma o merge para a branch `main`

### Passo 2: Configurar GitHub Pages no Repositório

1. No teu repositório, vai para **Settings** (Definições)
2. No menu lateral esquerdo, clica em **Pages**
3. Em **"Build and deployment"** (Compilação e implementação):
   - **Source** (Origem): Seleciona **"GitHub Actions"**
   
   ![Exemplo de configuração](https://docs.github.com/assets/cb-166472/mw-1440/images/help/pages/publishing-source-drop-down.webp)

4. Clica em **Save** (Guardar)

### Passo 3: Fazer Push ou Aguardar o Deploy

O deploy acontecerá automaticamente quando:
- Fazes merge do PR para `main`
- Fazes qualquer push para a branch `main`
- Ou podes ir em **Actions** e clicar em **"Run workflow"** manualmente

### Passo 4: Verificar o Deploy

1. Vai para a aba **Actions** no teu repositório
2. Verás o workflow **"Deploy para GitHub Pages"** a correr
3. Aguarda alguns minutos até terminar (deve aparecer um ✅ verde)
4. Quando terminar, o teu site estará disponível em:
   
   **https://p-chaves.github.io/kings/**

## 🎯 URL do Teu Site

Depois de configurado, o teu site ficará disponível em:

```
https://p-chaves.github.io/kings/
```

## 🔄 Atualizações Automáticas

Sempre que fizeres mudanças e deres push para `main`, o site será atualizado automaticamente em 1-2 minutos.

## 🛠️ Troubleshooting

### "Não vejo a opção GitHub Actions"

Certifica-te que:
1. O repositório é **público** (ou tens GitHub Pro/Teams para repos privados)
2. Tens permissões de administrador no repositório

### "O workflow falha"

1. Vai para **Settings → Actions → General**
2. Em **"Workflow permissions"**, seleciona **"Read and write permissions"**
3. Ativa **"Allow GitHub Actions to create and approve pull requests"**
4. Clica em **Save**

### "A página mostra 404"

1. Aguarda 5 minutos após o primeiro deploy
2. Verifica se o workflow terminou com sucesso na aba **Actions**
3. Vai a **Settings → Pages** e confirma que está ativado

### "Os estilos CSS não carregam"

Isto não deverá acontecer porque estamos a usar caminhos relativos. Mas se acontecer:
1. Verifica se a pasta `assets/` foi commitada corretamente
2. Abre as DevTools (F12) e verifica erros de console
3. Limpa a cache do browser (Ctrl+Shift+R)

## 📱 Testar Localmente Primeiro

Antes de fazer deploy, podes testar localmente:

```bash
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node.js
npx http-server

# Opção 3: PHP
php -S localhost:8000
```

Depois abre: http://localhost:8000

## 🌐 Domínio Personalizado (Opcional)

Se quiseres usar um domínio próprio (ex: meusite.com):

1. Em **Settings → Pages → Custom domain**
2. Insere o teu domínio
3. No teu registador de domínio, configura:
   - **CNAME** apontando para `p-chaves.github.io`
   - Ou **A records** apontando para os IPs do GitHub:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## ✅ Checklist Final

- [ ] Fazer merge do PR para `main`
- [ ] Ir para Settings → Pages
- [ ] Selecionar "GitHub Actions" como source
- [ ] Aguardar o deploy terminar
- [ ] Abrir https://p-chaves.github.io/kings/
- [ ] Testar o jogo online
- [ ] Partilhar o link! 🎉

## 📞 Precisa de Ajuda?

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [Guia de GitHub Actions](https://docs.github.com/pt/actions)

---

**Boa sorte com o teu projeto! 🎭**
