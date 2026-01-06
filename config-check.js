#!/usr/bin/env node
/**
 * Verificador de Configuração - Escape Puzzle Voucher
 * Execute com: node config-check.js
 * (Opcional - apenas para verificação)
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Verificador de Configuração - Escape Puzzle Voucher\n');
console.log('=' .repeat(50));

const checks = [
  {
    name: 'index.html existe',
    file: 'index.html',
    check: (content) => content.includes('data-section="home"')
  },
  {
    name: 'assets/style.css existe',
    file: 'assets/style.css',
    check: (content) => content.includes(':root')
  },
  {
    name: 'assets/utils.js existe e tem CONFIG',
    file: 'assets/utils.js',
    check: (content) => content.includes('const CONFIG')
  },
  {
    name: 'assets/puzzles.js existe',
    file: 'assets/puzzles.js',
    check: (content) => content.includes('function setupPuzzle1')
  },
  {
    name: 'assets/voucher.js existe',
    file: 'assets/voucher.js',
    check: (content) => content.includes('function setupFinalSection')
  },
  {
    name: 'assets/app.js existe',
    file: 'assets/app.js',
    check: (content) => content.includes('function initializeApp')
  },
  {
    name: 'README.md existe',
    file: 'README.md',
    check: (content) => content.includes('GitHub Pages')
  },
  {
    name: 'CUSTOMIZACAO.md existe',
    file: 'CUSTOMIZACAO.md',
    check: (content) => content.includes('CONFIG')
  }
];

let passed = 0;
let failed = 0;

checks.forEach(check => {
  try {
    const filePath = path.join(__dirname, check.file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (check.check(content)) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`⚠️  ${check.name} (ficheiro existe mas conteúdo suspeito)`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} (ficheiro não encontrado)`);
    failed++;
  }
});

console.log('\n' + '='.repeat(50));
console.log(`\n✅ Passou: ${passed}/${checks.length}`);

if (failed === 0) {
  console.log('\n🎉 Todos os ficheiros estão OK!');
  console.log('\n📝 Próximos passos:');
  console.log('1. Abre index.html no browser');
  console.log('2. Personaliza os nomes em assets/utils.js (CONFIG)');
  console.log('3. Publica em GitHub Pages ou outro hosting');
} else {
  console.log(`\n⚠️  ${failed} ficheiro(s) com problemas.`);
  console.log('   Verifica se estrutura de pastas está correta.');
}

console.log('\n');
