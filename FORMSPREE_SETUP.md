# 📧 Setup do Formspree - Guia Completo

Este guia explica como configurar o envio de emails para receber as datas de reserva do voucher.

## O que é Formspree?

**Formspree** é um serviço gratuito que permite enviar dados de formulários diretamente para o teu email, sem precisar de servidor backend.

## Passo 1: Criar Conta no Formspree

1. Vai para [formspree.io](https://formspree.io)
2. Clica em **"Get Started"**
3. Escolhe entre:
   - **Criar conta com email** (recomendado)
   - Ou usa GitHub/Google para login mais rápido

## Passo 2: Criar um Novo Formulário

1. Após login, clica em **"Create"** ou **"New Form"**
2. Dá um nome ao formulário (ex: "Datas Voucher Espectáculo")
3. Aceita os termos
4. Clica em **"Create"**

## Passo 3: Obter o ID do Formulário

Após criar o formulário, verás um URL parecido com:
```
https://formspree.io/f/abc123xyz
```

O código após `/f/` é o teu **ID do formulário**. No exemplo acima, seria: `abc123xyz`

## Passo 4: Inserir no Código

Abre `assets/utils.js` e encontra o objeto `CONFIG`:

```javascript
const CONFIG = {
  // ... outras configurações ...
  formspreeEndpoint: "https://formspree.io/f/EDITAR_AQUI",
  // ...
};
```

Substitui `EDITAR_AQUI` pelo teu ID. Por exemplo:

```javascript
formspreeEndpoint: "https://formspree.io/f/abc123xyz",
```

## Passo 5: Testar o Formulário

1. Abre o jogo no browser (http://localhost:8080)
2. Completa os 3 puzzles
3. Desbloqueia o voucher
4. Preenche as datas
5. Clica em **"Enviar Datas"**

Deverás receber um email no Formspree com os dados!

## Dicas

### Email de Confirmação
- O Formspree envia um email de confirmação na primeira submissão
- Clica no link de confirmação para ativar o formulário
- Após isso, tudo funciona normalmente

### Verificar Submissões
1. Vai para [formspree.io](https://formspree.io)
2. Faz login
3. Clica no teu formulário
4. Verás todas as submissões em **"Submissions"**

### Limite Gratuito
- **Formspree Free**: até 50 submissões por mês
- Se precisares mais, há planos pagos

### Alternar Email de Destino
No Formspree, na aba **"Email"**, podes adicionar múltiplos emails para receber submissões.

### Alternativa: Google Forms (sem código)
Se preferires não mexer no código, podes usar Google Forms:

1. Cria um formulário em [forms.google.com](https://forms.google.com)
2. Copia o URL do formulário publicado
3. Em `assets/utils.js`, adiciona:
   ```javascript
   googleFormUrl: "https://docs.google.com/forms/d/e/xxx/viewform",
   ```
4. Na página final, aparecerá um botão "Abrir formulário alternativo"

---

**Dúvidas?** Consulta a [documentação oficial do Formspree](https://formspree.io/help)

Aproveita! 🎭
