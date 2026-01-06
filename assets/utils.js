/**
 * Configuração central do projeto
 */
const CONFIG = {
  // Gift recipients and customization
  recipient1: "EDITAR_AQUI - Name of Sister",
  recipient2: "EDITAR_AQUI - Name of Husband",
  fromName: "EDITAR_AQUI - Your name",
  voucherTitle: "A Special Gift",
  voucherText: "This gift entitles you to something special that has been carefully chosen just for you.",
  validityText: "Valid until December 31, 2026",
  
  // Partes do código final (obtidas dos puzzles)
  finalCode: {
    part1: "YOU",
    part2: "ARE",
    part3: "GUILTY"
  },
  
  // Endpoints e URLs externas
  formspreeEndpoint: "https://formspree.io/f/EDITAR_AQUI", // Substitui com o teu ID do Formspree
  googleFormUrl: "", // Deixa vazio ou adiciona URL do Google Forms
  voucherDownloadUrl: "" // Deixa vazio ou adiciona link a PDF não listado
};

/**
 * Normaliza string: remove acentos, espaços múltiplos, uppercase
 */
function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .trim()
    .toUpperCase()
    .replace(/\s+/g, " "); // Múltiplos espaços para um
}

/**
 * Retorna o estado do progresso do localStorage
 */
function getProgress() {
  const stored = localStorage.getItem("progress");
  if (!stored) {
    return {
      p1: false,
      p2: false,
      p3: false,
      unlocked: false,
      parts: {
        p1: "",
        p2: "",
        p3: ""
      }
    };
  }
  return JSON.parse(stored);
}

/**
 * Guarda o estado do progresso no localStorage
 */
function saveProgress(progress) {
  localStorage.setItem("progress", JSON.stringify(progress));
}

/**
 * Marca um puzzle como completo e guarda a parte do código
 */
function completePuzzle(puzzleNum, codePart) {
  const progress = getProgress();
  progress[`p${puzzleNum}`] = true;
  progress.parts[`p${puzzleNum}`] = codePart;
  saveProgress(progress);
}

/**
 * Desbloqueia o voucher
 */
function unlockVoucher() {
  const progress = getProgress();
  progress.unlocked = true;
  saveProgress(progress);
}

/**
 * Limpa todo o progresso (Reset)
 */
function resetAll() {
  localStorage.removeItem("progress");
}

/**
 * Mostra/esconde secções do SPA
 */
function showSection(sectionId) {
  // Esconde todas as secções
  document.querySelectorAll("[data-section]").forEach(section => {
    section.style.display = "none";
    section.setAttribute("aria-hidden", "true");
  });
  
  // Mostra a secção desejada
  const section = document.querySelector(`[data-section="${sectionId}"]`);
  if (section) {
    section.style.display = "block";
    section.setAttribute("aria-hidden", "false");
    // Coloca o foco no título da secção para acessibilidade
    const heading = section.querySelector("h1, h2");
    if (heading) {
      heading.focus();
    }
  }
  
  // Atualiza a barra de progresso
  updateProgressBar(sectionId);
}

/**
 * Atualiza a barra de progresso visual
 */
function updateProgressBar(currentSection) {
  const progress = getProgress();
  const sections = ["home", "puzzle1", "puzzle2", "puzzle3", "final"];
  const currentIndex = sections.indexOf(currentSection);
  
  document.querySelectorAll(".progress-step").forEach((step, idx) => {
    step.classList.remove("active", "completed");
    if (idx < currentIndex) {
      step.classList.add("completed");
    } else if (idx === currentIndex) {
      step.classList.add("active");
    }
  });
  
  // Atualiza o estado dos puzzles na barra
  updateProgressStepStatus();
}

/**
 * Atualiza o estado visual dos puzzles na barra
 */
function updateProgressStepStatus() {
  const progress = getProgress();
  const stepTexts = [
    `Etapa 1: ${progress.p1 ? "✓ Completo" : "Aguardando"}`,
    `Etapa 2: ${progress.p2 ? "✓ Completo" : "Aguardando"}`,
    `Etapa 3: ${progress.p3 ? "✓ Completo" : "Aguardando"}`,
    `Final: ${progress.unlocked ? "✓ Desbloqueado" : "Aguardando"}`
  ];
  
  document.querySelectorAll(".progress-step").forEach((step, idx) => {
    if (stepTexts[idx]) {
      step.querySelector(".step-label").textContent = stepTexts[idx];
    }
  });
}

/**
 * Mostra notificação tipo toast (simples)
 */
function toast(message, type = "info", duration = 3000) {
  const toastId = `toast-${Date.now()}`;
  const toast = document.createElement("div");
  toast.id = toastId;
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Animação de entrada
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  // Remove após duração
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

/**
 * Validação de email simples
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Converte data para formato legível PT
 */
function formatDatePT(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString + "T00:00:00");
  const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
  return date.toLocaleDateString("pt-PT", options);
}

/**
 * Gerador simples de confettis via CSS animation
 */
function launchConfetti() {
  const container = document.body;
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.delay = Math.random() * 0.5 + "s";
    confetti.style.backgroundColor = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"][Math.floor(Math.random() * 5)];
    container.appendChild(confetti);
    
    // Remove após animação
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

/**
 * Validador de código final
 */
function validateFinalCode(userCode) {
  const expectedCode = `${CONFIG.finalCode.part1}-${CONFIG.finalCode.part2}-${CONFIG.finalCode.part3}`;
  return normalizeString(userCode) === normalizeString(expectedCode);
}

/**
 * Cifra de César: deslocamento simples de caracteres
 */
function cipherCaesar(text, shift) {
  return text.toUpperCase().split('').map(char => {
    if (!/[A-Z]/.test(char)) return char; // Não cifra não-letras
    const charCode = char.charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
    const shifted = (charCode + shift) % 26;
    return String.fromCharCode(shifted + 65);
  }).join('');
}

/**
 * fetch wrapper with XHR fallback for older browsers/WebViews (Safari legacy)
 */
function fetchWithFallback(url, opts) {
  if (window.fetch) return fetch(url, opts);
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();
      const method = (opts && opts.method) || 'GET';
      xhr.open(method, url);
      if (opts && opts.headers) {
        Object.keys(opts.headers).forEach(k => xhr.setRequestHeader(k, opts.headers[k]));
      }
      xhr.onload = () => {
        const response = {
          ok: xhr.status >= 200 && xhr.status < 300,
          status: xhr.status,
          text: async () => xhr.responseText,
          json: async () => {
            try { return JSON.parse(xhr.responseText); } catch (e) { return null; }
          }
        };
        resolve(response);
      };
      xhr.onerror = () => reject(new TypeError('Network request failed'));
      xhr.send(opts && opts.body ? opts.body : null);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Verifica suporte a input[type=date]
 */
function isDateInputSupported() {
  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  return input.type === 'date';
}
