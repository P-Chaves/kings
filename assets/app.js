/**
 * Bootstrap e navegação principal da aplicação
 */

document.addEventListener("DOMContentLoaded", () => {
  // Pequeno delay para garantir que o DOM está totalmente pronto
  setTimeout(() => {
    initializeApp();
  }, 100);
});

/**
 * Inicializa a aplicação
 */
function initializeApp() {
  // Atualiza a barra de progresso
  updateProgressStepStatus();
  
  // Restaura o progresso visual anterior
  restoreProgress();
  
  // Setup dos eventos de navegação
  setupNavigationEvents();
  
  // Setup do botão Reset
  setupReset();
  
  // Mostra a secção inicial
  showSection("home");
  
  // Inicializa navegação de progresso
  setupProgressNavigation();
}

/**
 * Setup dos botões de navegação
 */
function setupNavigationEvents() {
  // Botão "Começar" na home
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      showSection("puzzle1");
      setupPuzzle1();
    });
  }
  
  // Botões "Voltar" (se houver)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-back")) {
      const section = e.target.getAttribute("data-section");
      if (section) {
        showSection(section);
        setupCurrentSection(section);
      }
    }
  });
}

/**
 * Setup do puzzle atual quando navegamos para ele
 */
function setupCurrentSection(sectionId) {
  switch (sectionId) {
    case "puzzle1":
      setupPuzzle1();
      break;
    case "puzzle2":
      setupPuzzle2();
      break;
    case "puzzle3":
      setupPuzzle3();
      break;
    case "final":
      setupFinalSection();
      break;
  }
}

/**
 * Restaura o progresso anterior (se houver)
 */
function restoreProgress() {
  const progress = getProgress();
  
  // Se tiver pontos desbloqueados, prepara a home para mostrar progresso
  const homeBtn = document.getElementById("start-btn");
  if (homeBtn && (progress.p1 || progress.p2 || progress.p3 || progress.unlocked)) {
    homeBtn.textContent = "Continuar →";
  }
  
  // Atualiza o visual dos cards das etapas
  if (progress.p1) {
    const card = document.getElementById("card-step-1");
    if (card) {
      card.classList.add("completed");
      card.querySelector(".step-status").textContent = "✓ Complete";
    }
  }
  if (progress.p2) {
    const card = document.getElementById("card-step-2");
    if (card) {
      card.classList.add("completed");
      card.querySelector(".step-status").textContent = "✓ Complete";
    }
  }
  if (progress.p3) {
    const card = document.getElementById("card-step-3");
    if (card) {
      card.classList.add("completed");
      card.querySelector(".step-status").textContent = "✓ Complete";
    }
  }
}

/**
 * Setup do botão Reset
 */
function setupReset() {
  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to restart? You will lose all progress.")) {
        resetAll();
        updateProgressStepStatus();
        showSection("home");
        window.location.reload();
      }
    });
  }
}

/**
 * Navegação via barras de progresso (clique nos passos)
 */
function setupProgressNavigation() {
  document.querySelectorAll(".progress-step").forEach((step, idx) => {
    step.addEventListener("click", () => {
      const sections = ["home", "puzzle1", "puzzle2", "puzzle3", "final"];
      const progress = getProgress();
      
      // Só permite navegar para secções já completadas ou anteriores à atual
      const targetSection = sections[idx];
      const currentIndex = sections.indexOf(getCurrentSection());
      
      if (idx <= currentIndex) {
        showSection(targetSection);
        setupCurrentSection(targetSection);
      } else {
        toast("Complete previous challenges first!", "warning");
      }
    });
  });
}

/**
 * Obtém a secção atual (em exibição)
 */
function getCurrentSection() {
  const visible = document.querySelector("[data-section][style*='display: block']");
  return visible ? visible.getAttribute("data-section") : "home";
}
