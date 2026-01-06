# 🎨 Personalização Rápida

Guia para adaptar o escape puzzle com nomes, cores e mensagens personalizadas.

## 1️⃣ Nomes e Textos (Sem Código!)

Abre `assets/utils.js` (linha 5-25) e edita o objeto `CONFIG`:

```javascript
const CONFIG = {
  // Nomes e personalização do voucher
  recipient1: "EDITAR_AQUI - Nome da Irmã",     // ← Muda para o nome dela
  recipient2: "EDITAR_AQUI - Nome do Marido",   // ← Muda para o nome dele
  fromName: "EDITAR_AQUI - O teu nome",          // ← O teu nome
  voucherTitle: "Voucher: Espectáculo",          // ← Título do voucher
  voucherText: "Este voucher dá direito a 2 bilhetes...", // ← Descrição
  validityText: "Válido até 31 de Dezembro de 2026",      // ← Data de validade
  
  // Partes do código final (obtidas dos puzzles)
  finalCode: {
    part1: "NOITE",      // ← Parte 1 (resposta do Puzzle 1)
    part2: "PALCO",      // ← Parte 2 (resposta do Puzzle 2)
    part3: "LIVRE"       // ← Parte 3 (resposta do Puzzle 3)
  },
  
  // URLs para envio de formulário
  formspreeEndpoint: "https://formspree.io/f/EDITAR_AQUI", // ← Setup no FORMSPREE_SETUP.md
  googleFormUrl: "",     // ← Deixa vazio ou cola URL de Google Form
  voucherDownloadUrl: "" // ← Deixa vazio ou cola link a PDF
};
```

**Exemplo completo:**

```javascript
const CONFIG = {
  recipient1: "Sofia",
  recipient2: "João",
  fromName: "Ana",
  voucherTitle: "Voucher: Concerto ao Vivo",
  voucherText: "Este voucher oferece 2 bilhetes para um concerto imperdível!",
  validityText: "Válido até 30 de Junho de 2026",
  
  finalCode: {
    part1: "MUSICA",
    part2: "AMOR",
    part3: "SEMPRE"
  },
  
  formspreeEndpoint: "https://formspree.io/f/xyzabc123",
  googleFormUrl: "",
  voucherDownloadUrl: ""
};
```

**Salva o ficheiro (Ctrl+S) e recarrega o browser!**

## 2️⃣ Personalizar os Desafios (Puzzles)

### Puzzle 3: Mensagem codificada (deslocamento 6)

Abre `assets/puzzles.js` (linha 12-15):

```javascript
// Encontra isto:
const plaintext = "TODOS OS CAMINHOS LEVAM A NOITE";
const shifAmount = 5;
const cipheredText = cipherCaesar(plaintext, shifAmount);
const answer = "NOITE";
```

**O que muda:**
- `plaintext`: a mensagem original (será encriptada automaticamente)
- `answer`: a palavra final que o utilizador tem de descobrir
- `shifAmount`: número de posições no alfabeto (1-25)

**Exemplo:**

```javascript
const plaintext = "AMOR TE GUIA SEMPRE MEU CORAÇÃO";
const shifAmount = 3;
const answer = "CORAÇÃO";
```

> 💡 Dica: A resposta deve ser uma palavra **única** que aparece na frase original!

### Puzzle 2: Correspondência Lógica

Abre `assets/puzzles.js` (linha 108-135):

**Structure:**
```javascript
const data = {
  people: ["Irmã", "Marido", "Amigo"],  // Nomes dos "personagens"
  attributes: [
    { category: "Fila", options: ["A", "B", "C"] },
    { category: "Hora", options: ["21:00", "22:00", "23:00"] },
    { category: "Snack", options: ["Pipocas", "Gelado", "Sem Snack"] }
  ],
  clues: [
    "Pista 1",
    "Pista 2",
    // ... 4-6 pistas
  ],
  solution: {
    "Irmã": { Fila: "A", Hora: "21:00", Snack: "Pipocas" },
    "Marido": { Fila: "B", Hora: "23:00", Snack: "Gelado" },
    "Amigo": { Fila: "C", Hora: "22:00", Snack: "Sem Snack" }
  },
  codePart: CONFIG.finalCode.part2
};
```

**Exemplo customizado:**

```javascript
const data = {
  people: ["Sofia", "João", "Carla"],
  attributes: [
    { category: "Instrumento", options: ["Piano", "Violino", "Guitarra"] },
    { category: "Lugar", options: ["Bancada A", "Bancada B", "Bancada C"] },
    { category: "Género", options: ["Clássica", "Jazz", "Rock"] }
  ],
  clues: [
    "Sofia toca Piano",
    "Quem toca Jazz está na Bancada B",
    "João está na Bancada A",
    "Carla não gosta de Rock",
    "O Piano é de Música Clássica"
  ],
  solution: {
    "Sofia": { Instrumento: "Piano", Lugar: "Bancada C", Género: "Clássica" },
    "João": { Instrumento: "Violino", Lugar: "Bancada A", Género: "Jazz" },
    "Carla": { Instrumento: "Guitarra", Lugar: "Bancada B", Género: "Rock" }
  },
  codePart: CONFIG.finalCode.part2
};
```

### Puzzle 1: Sequência Numérica

Abre `assets/puzzles.js` (linha 235-250):

```javascript
const data = {
  sequence: [2, 6, 12, 20, 30, 42],  // Números da sequência
  displaySequence: [2, 6, 12, 20, 30, "?"],
  correctAnswer: 42,
  explanation: "Padrão: n×(n+1). ...",
  codePart: CONFIG.finalCode.part3
};
```

**Exemplos de sequências:**

**Fibonacci:**
```javascript
sequence: [1, 1, 2, 3, 5, 8, 13],
displaySequence: [1, 1, 2, 3, 5, 8, "?"],
correctAnswer: 13,
explanation: "Fibonacci: cada número é a soma dos dois anteriores."
```

**Quadrados:**
```javascript
sequence: [1, 4, 9, 16, 25, 36],
displaySequence: [1, 4, 9, 16, 25, "?"],
correctAnswer: 36,
explanation: "Quadrados perfeitos: 1², 2², 3², 4², 5², 6²"
```

**Potências de 2:**
```javascript
sequence: [2, 4, 8, 16, 32, 64],
displaySequence: [2, 4, 8, 16, 32, "?"],
correctAnswer: 64,
explanation: "Potências de 2: 2¹, 2², 2³, 2⁴, 2⁵, 2⁶"
```

## 3️⃣ Mudar Cores do Tema

Abre `assets/style.css` (linhas 6-13):

```css
:root {
  --primary: #6366f1;        /* Roxo - botões, destaque */
  --primary-dark: #4f46e5;   /* Roxo escuro - hover */
  --secondary: #10b981;      /* Verde - sucesso */
  --accent: #f59e0b;         /* Âmbar - aviso */
  --danger: #ef4444;         /* Vermelho - erro */
  --light: #f8fafc;          /* Branco suave */
  --light-2: #e2e8f0;        /* Cinzento suave */
  --medium: #94a3b8;         /* Cinzento médio */
  --dark: #1e293b;           /* Azul escuro */
  /* ... outras cores ... */
}
```

**Paletas pré-prontas:**

**Tema Rosa (Romántico)**
```css
--primary: #ec4899;
--primary-dark: #db2777;
--secondary: #f472b6;
```

**Tema Verde (Natural)**
```css
--primary: #059669;
--primary-dark: #047857;
--secondary: #10b981;
```

**Tema Azul (Profissional)**
```css
--primary: #0ea5e9;
--primary-dark: #0284c7;
--secondary: #06b6d4;
```

**Tema Laranja (Energético)**
```css
--primary: #f97316;
--primary-dark: #ea580c;
--secondary: #fbbf24;
```

## 4️⃣ Mudança do Título e Favicon

### Mudar Título da Página

Abre `index.html` (linha 8):

```html
<title>Voucher Espectáculo - Escape Puzzle</title>
<!-- Muda para: -->
<title>Desafio do Concerto | Sofia & João</title>
```

### Adicionar Favicon (Ícone na Aba)

1. Cria ou encontra uma imagem (32x32 ou 64x64 pixels)
2. Guarda como `favicon.ico` na pasta raiz
3. No `index.html` (linha 9), confirma que existe:
   ```html
   <link rel="icon" href="favicon.ico">
   ```

## 5️⃣ Adicionar Google Form (Alternativa ao Formspree)

1. Cria um formulário em [forms.google.com](https://forms.google.com)
   - Campos: "1ª data", "2ª data", "3ª data (opcional)", "Observações"
2. Clica em **"Partilhar"** e copia o link
3. Em `assets/utils.js`, CONFIG:
   ```javascript
   googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQL....."
   ```

## 6️⃣ Textos Customizados

Podes mudar qualquer texto editando as secções HTML. Por exemplo:

**Home:**
Abre `index.html` (linhas 35-48) e muda o texto de boas-vindas.

**Descrições dos Puzzles:**
Cada puzzle tem um `<div class="puzzle-description">` que podes editar.

---

## 🎯 Checklist Final

- [ ] Nomes personalizados em CONFIG
- [ ] Respostas dos puzzles ajustadas
- [ ] Código final (PARTE1-PARTE2-PARTE3) atualizado
- [ ] Cores do tema ajustadas (opcional)
- [ ] Formspree endpoint configurado
- [ ] Título da página mudado
- [ ] Favicon adicionado (opcional)

**Pronto! Tudo personalizado!** 🎉

---

**Dúvidas?** Consulta o README.md ou FORMSPREE_SETUP.md
