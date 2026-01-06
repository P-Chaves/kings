# 🎯 Guia Rápido - Começa em 3 Passos

Bem-vindo ao **Escape Puzzle do Voucher**! Aqui está como começar imediatamente.

## ⚡ Passo 1: Testa Localmente (2 minutos)

### Opção A: Abrir Diretamente (Mais Simples)
1. Navega até à pasta do projeto
2. Faz **duplo clique** em `index.html`
3. Pronto! O jogo abre no browser

### Opção B: Usar Terminal (Se Passo A não funcionar)
```bash
cd c:\Users\User\source\repos\kings
python -m http.server 8080
# Depois abre http://localhost:8080
```

✅ O jogo funciona completamente offline!

---

## ⚙️ Passo 2: Personaliza em 5 Minutos

Abre `assets/utils.js` (com qualquer editor) e muda as linhas 5-27:

```javascript
const CONFIG = {
  recipient1: "NOME DA TUA IRMÃ",        // ← MUDA ISTO
  recipient2: "NOME DO TEU MARIDO",      // ← MUDA ISTO
  fromName: "O TEU NOME",                // ← MUDA ISTO
  
  finalCode: {
    part1: "NOITE",                      // ← Resposta do Puzzle 1
    part2: "PALCO",                      // ← Resposta do Puzzle 2
    part3: "LIVRE"                       // ← Resposta do Puzzle 3
  },
  
  // PARA ENVIAR EMAILS (opcional):
  formspreeEndpoint: "https://formspree.io/f/EDITAR_AQUI",
  // ↑ Ver instruções em FORMSPREE_SETUP.md
};
```

**Salva com Ctrl+S e recarrega o browser!**

---

## 🚀 Passo 3: Publicar em GitHub Pages (10 minutos)

1. Vai a [github.com](https://github.com)
2. **Cria novo repositório** (Settings → Pages)
3. **Sobe os ficheiros** (Upload ou Git)
4. **Ativa GitHub Pages** em Settings
5. **Pronto!** URL: `https://username.github.io/repo`

📖 **Instruções completas**: Ver `GITHUB_PAGES_DEPLOY.md`

---

## 📂 Estrutura dos Ficheiros

```
/kings
  ├── index.html              ← A PÁGINA PRINCIPAL (abre isto)
  ├── assets/
  │   ├── style.css           ← Estilos bonitos
  │   ├── utils.js            ← CONFIG + funções
  │   ├── puzzles.js          ← Os 3 desafios
  │   ├── voucher.js          ← Cartão do voucher
  │   ├── app.js              ← Navegação
  │   └── img/                ← Pasta de imagens (vazia por enquanto)
  ├── README.md               ← Documentação completa
  ├── CUSTOMIZACAO.md         ← Como mudar tudo
  ├── FORMSPREE_SETUP.md      ← Setup de emails
  ├── GITHUB_PAGES_DEPLOY.md  ← Deploy online
  └── FEATURES.md             ← Tudo que foi feito
```

---

## 🎮 O Jogo em 30 Segundos

1. **Home**: Apresentação + Começar
2. **Puzzle 1** 🔐: Resolve a sequência numérica → Ganha **PARTE 1**
3. **Puzzle 2** 🧩: Resolve correspondências → Ganha **PARTE 2**
4. **Puzzle 3** 🔢: Aplica o padrão de codificação (deslocamento 6) → Ganha **PARTE 3**
5. **Final** 🎟️: Introduz PARTE1-PARTE2-PARTE3 → Desbloqueio!
6. **Voucher** 🎭: Vê o cartão, imprime, escolhe datas

---

## 🔧 Dúvidas Frequentes

### "O CSS não carrega"
→ Certifica que `assets/style.css` existe na pasta correta. Se abres via `file://`, tenta um servidor (passo 1B).

### "Quero mudar o nome/cor/desafio"
→ Ver `CUSTOMIZACAO.md` para instruções detalhadas.

### "Como envio emails?"
→ Regista em [formspree.io](https://formspree.io) e segue `FORMSPREE_SETUP.md`.

### "Como publico no GitHub?"
→ Segue `GITHUB_PAGES_DEPLOY.md` passo-a-passo.

### "O jogo não guarda progresso"
→ Certifica que não estás em modo incógnito. O localStorage funciona em modo normal.

---

## 🎨 Personalização Rápida (Sem Código)

| O Que | Onde | Como |
|-------|------|------|
| Nomes | `utils.js` CONFIG | Muda `recipient1`, `recipient2`, `fromName` |
| Respostas dos Puzzles | `puzzles.js` | Muda `answer`, `solution`, `sequence` |
| Cores | `style.css` `:root` | Muda `--primary`, `--secondary`, etc. |
| Textos | `index.html` ou JS | Encontra e muda direto |

---

## 💡 Dicas de Teste

Antes de partilhar:
- [ ] Testa em mobile (iPhone/Android)
- [ ] Resolve todos os 3 puzzles
- [ ] Testa o reset/reiniciar
- [ ] Testa a impressão do voucher (Ctrl+P)
- [ ] Testa o formulário de datas

---

## 📞 Suporte Rápido

**Erro ao abrir?**
- Tenta passo 1B (servidor local)
- Verifica que `index.html` existe na raiz

**CSS está estranho?**
- Hard refresh: Ctrl+Shift+R (ou Cmd+Shift+R no Mac)

**LocalStorage com problemas?**
- Abre DevTools (F12) → Application → Clear All

---

## 🎁 Próximas Ideias

- ✨ Mudar as imagens/cores para o tema dela
- 🎵 Adicionar música de fundo (se souber CSS/JS)
- 📱 Testar em todos os devices
- 🔗 Partilhar o link com a irmã e marido!

---

## 📖 Ficheiros de Documentação

Para mais informações, consulta:
- **README.md** - Tudo sobre o projeto
- **CUSTOMIZACAO.md** - Como personalizar
- **FORMSPREE_SETUP.md** - Setup de emails
- **GITHUB_PAGES_DEPLOY.md** - Deploy online
- **FEATURES.md** - Tudo que foi feito

---

**Pronto? Abre `index.html` e diverte-te! 🎉**

Qualquer dúvida, consulta os ficheiros `.md` acima.

Aproveita com a tua irmã e marido! 🎭💕
