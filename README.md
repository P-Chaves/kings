# 🎭 Voucher Espectáculo - Escape Puzzle

Um jogo web interativo e responsivo para desbloquear um voucher de espectáculo através de 3 desafios de lógica. Perfeito como prenda criativa!

## ✨ Características

- ✅ **Sem dependências externas** - HTML, CSS e JavaScript puros
- ✅ **Totalmente responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Offline-first** - Funciona offline (exceto envio de formulário)
- ✅ **Progresso persistente** - Guarda estado no localStorage
- ✅ **Acessibilidade** - Labels, foco visível, aria-live
- ✅ **Animações suaves** - Transições e confettis
- ✅ **Print-friendly** - Voucher otimizado para impressão/PDF
- ✅ **3 Desafios variados** - Sequência numérica, Correspondência lógica, Mensagem codificada (deslocamento 6)
- ✅ **Compatibilidade Safari** - Fallbacks para versões antigas e WebViews

## 📁 Estrutura do Projeto

```
/
├── index.html           # Página principal (SPA)
├── assets/
│   ├── style.css        # Estilos completos
│   ├── utils.js         # Funções utilitárias e CONFIG
│   ├── puzzles.js       # Lógica dos 3 puzzles
│   ├── voucher.js       # Renderização do voucher
│   ├── app.js           # Bootstrap e navegação
│   └── img/             # (opcional) Imagens
└── README.md            # Esta documentação
```

## 🚀 Como Começar

### Localmente (Teste Rápido)

1. Clona ou descarrega este repositório
2. Abre `index.html` diretamente no browser (chrome, firefox, edge, etc.)
3. Começa a jogar!

Não precisa de servidor, build tools ou npm!

### Publicar em GitHub Pages

Este repositório já está configurado para deploy automático no GitHub Pages!

**Ver guia completo:** [SETUP_GITHUB_PAGES.md](SETUP_GITHUB_PAGES.md)

**Resumo rápido:**
1. Vai a **Settings → Pages** no teu repositório GitHub
2. Em **Source**, seleciona **"GitHub Actions"**
3. Faz push para `main` (ou merge este PR)
4. O site estará disponível em `https://p-chaves.github.io/kings/`

O deploy é automático sempre que fazes push para `main`!

## ⚙️ Personalização Rápida

Abre `assets/utils.js` e encontra o objeto `CONFIG` no topo do ficheiro:

```javascript
const CONFIG = {
  // Nomes do voucher
  recipient1: "Nome da Irmã",
  recipient2: "Nome do Marido",
  fromName: "O Teu Nome",
  
  // Texto do voucher
  voucherTitle: "Voucher: Espectáculo",
  voucherText: "Este voucher dá direito a 2 bilhetes...",
  validityText: "Válido até 31 de Dezembro de 2026",
  
  // Partes do código (customizáveis)
  finalCode: {
    part1: "NOITE",
    part2: "PALCO",
    part3: "LIVRE"
  },
  
  // Endpoints (abaixo)
  formspreeEndpoint: "https://formspree.io/f/EDITAR_AQUI",
  googleFormUrl: "",
  voucherDownloadUrl: ""
};
```

### Personalizar os Desafios

Edita as respostas esperadas em `assets/puzzles.js`:

- **Puzzle 1 (Cifra César)**: Muda `plaintext` e `answer`
- **Puzzle 2 (Correspondência)**: Muda as pessoas, atributos e solução
- **Puzzle 3 (Sequência)**: Cria outra sequência e padrão

## 📧 Setup do Formulário de Datas (Formspree)

Para enviar as datas escolhidas por email:

1. Vai a [formspree.io](https://formspree.io)
2. Cria uma conta (grátis)
3. Cria um novo formulário - no final, copia o **ID do formulário** (tipo: `abc123xyz`)
4. Em `assets/utils.js`, substitui `CONFIG.formspreeEndpoint`:
   ```javascript
   formspreeEndpoint: "https://formspree.io/f/abc123xyz"
   ```
5. Pronto! As datas chegarão ao teu email

### Alternativa: Google Forms

Se preferires Google Forms:
1. Cria um formulário em [forms.google.com](https://forms.google.com)
2. Copia o URL do formulário
3. Em `CONFIG.googleFormUrl`, cola o URL
4. Na página final aparecerá um botão para abrir o formulário

## 📥 Voucher: Segurança e Download

O voucher é gerado em HTML (não como PDF no repositório), de forma segura.

### Opção 1: Imprimir/Guardar PDF (Padrão)
- Clica "🖨️ Imprimir / Guardar como PDF"
- Usa Ctrl+P ou o menu de browser
- Guarda como PDF localmente

### Opção 2: Download Direto (Avançado)
Se quiseres um link de download:
1. Sobe o PDF para um servidor privado ou cloud
2. Em `CONFIG.voucherDownloadUrl`, cola o link
3. Na página final, aparecerá um botão "📥 Download"

**Importante:** Não guardes o PDF original no repositório público. Usa um link não listado.

## 🎮 Fluxo do Jogo

1. **Home** - Apresentação e overview dos desafios
2. **Puzzle 1** - Encontra o próximo número da sequência → obtém **PARTE 1**
3. **Puzzle 2** - Resolve correspondências lógicas → obtém **PARTE 2**
4. **Puzzle 3** - Aplica o padrão de codificação (deslocamento 6) → obtém **PARTE 3**
5. **Final** - Introduz o código completo (PARTE1-PARTE2-PARTE3) → desbloqueio e confettis!
6. **Voucher** - Vê o cartão, imprime/guarda, escolhe datas

## 🔄 Reset/Reiniciar

Clica no botão **"🔄 Reiniciar Jogo"** no footer. Isto:
- Limpa todo o progresso
- Apaga o localStorage
- Volta à home

## 📱 Responsividade

- **Desktop**: Layout otimizado em cards
- **Tablet**: Grid adaptável
- **Mobile**: Stack vertical, toque otimizado, font legível

Testa em devtools (F12 → Toggle device toolbar)

## ♿ Acessibilidade

- ✅ Labels associados a inputs
- ✅ Foco visível (outline)
- ✅ Aria-live para notificações
- ✅ Cores com contraste
- ✅ Suporta modo escuro (prefers-color-scheme)
- ✅ Reduz animações se o utilizador preferir (prefers-reduced-motion)

## 🎨 Tema e Cores

As cores são definidas em CSS variables em `assets/style.css`:

```css
--primary: #6366f1      /* Roxo - botões, destaque */
--secondary: #10b981    /* Verde - sucesso */
--accent: #f59e0b      /* Âmbar - aviso */
--danger: #ef4444      /* Vermelho - erro */
```

Para mudares o tema, edita estas variáveis no `:root`.

## 🌙 Modo Escuro

A página suporta automaticamente o modo escuro do sistema (CSS `prefers-color-scheme: dark`).

## 💾 Local Storage

O jogo guarda em localStorage a chave `"progress"`:

```json
{
  "p1": true,        // Puzzle 1 completo?
  "p2": false,       // Puzzle 2 completo?
  "p3": false,       // Puzzle 3 completo?
  "unlocked": false, // Voucher desbloqueado?
  "parts": {
    "p1": "NOITE",   // Parte obtida em P1
    "p2": "",        // Parte de P2
    "p3": ""         // Parte de P3
  }
}
```

Limpa-se ao clicar "Reiniciar" ou manualmente em DevTools (F12 → Console → `localStorage.removeItem('progress')`).

## 🐛 Troubleshooting

### "O index.html não abre"
- Usa um navegador moderno (Chrome, Firefox, Edge, Safari 14+)
- Se tiver erro CORS local, usa um servidor simples:
  ```bash
  python3 -m http.server 8000
  # ou
  npx http-server
  ```
  Depois abre `http://localhost:8000`

### "O formulário não envia"
- Verifica se `CONFIG.formspreeEndpoint` está correto
- Abre DevTools (F12) → Console, para ver erros
- Se local (file://), o fetch pode não funcionar por CORS. Testa em servidor ou GitHub Pages

### "O CSS não carrega"
- Certifica que `assets/style.css` está na pasta correta
- Verifica o caminho em `<link rel="stylesheet" href="assets/style.css">`
- Recarrega a página (Ctrl+Shift+R hard refresh)

### "localStorage não funciona"
- Alguns browsers em modo incógnito/privado não permitem localStorage
- Testa em modo normal ou outro browser
- DevTools → Application → Local Storage, para ver dados

## 🍎 Compatibilidade Safari

O projeto é totalmente compatível com **Safari moderno** (12+) e tem **fallbacks** para versões antigas:
- ✅ Fetch com fallback XMLHttpRequest (XHR)
- ✅ Input date com fallback text
- ✅ Prefixos CSS WebKit (-webkit-appearance, etc.)
- ✅ String normalization com suporte a acentos

**Testa compatibilidade:** Abre `test-safari-compat.html` (testes automáticos)  
**Lê mais:** Ver `SAFARI_COMPAT.md`

## 📝 Licença

Código livre para usar e modificar. Aproveita com a tua irmã e marido! 🎭

## 🤝 Contribuições

Ideias de melhorias? Sinta-se à vontade para fazer fork e criar Pull Requests!

---

**Desenvolvido com ❤️ para presentes criativas**

Versão: 1.0 | Janeiro 2026
