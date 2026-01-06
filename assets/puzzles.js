/**
 * Lógica dos 3 puzzles
 */

/**
 * PUZZLE 1: Sequência Numérica
 * Encontra o próximo número da sequência
 */
function setupPuzzle1() {
  const puzzle1Container = document.getElementById("puzzle1-content");
  const data = {
    sequence: [2, 6, 12, 20, 30, 42], // n*(n+1)
    displaySequence: [2, 6, 12, 20, 30, "?"],
    correctAnswer: 42,
    explanation: "Pattern: n×(n+1).  Ex. 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.",
    codePart: CONFIG.finalCode.part1
  };

  const descriptionHtml = `
    <div class="puzzle-description">
      <h2>Challenge 1: Numeric Sequence</h2>
      <p>Look at the sequence below and find the next number.</p>
    </div>
  `;

  const contentHtml = `
    <div class="puzzle-body">
      <div class="sequence-display">
        <div class="sequence-numbers">
          ${data.displaySequence.map(num => `<span class="seq-num">${num}</span>`).join("")}
        </div>
      </div>

      <div class="form-group">
          <label for="puzzle1-answer">What's the next number?</label>
          <input type="number" id="puzzle1-answer" class="input-field" placeholder="Type the number...">
      </div>

      <div class="form-group">
          <p style="font-style: italic; color: #d0d0d0; margin: 1rem 0;">I have chosen this as first task just in case my dear sister tries to do this without her husband... Superman as cryptonite, and you have your Math skills! 😈</p>
      </div>

      <button class="btn btn-primary" id="puzzle1-submit">Check Answer</button>
    </div>
  `;

  puzzle1Container.innerHTML = descriptionHtml + contentHtml;

  document.getElementById("puzzle1-submit").addEventListener("click", () => {
    const userAnswer = parseInt(document.getElementById("puzzle1-answer").value);
    if (userAnswer === data.correctAnswer) {
      completePuzzle(1, data.codePart);
      showPuzzle1Result(true, data.codePart, data.explanation);
    } else {
      toast("Incorrect answer. The number was: " + data.correctAnswer, "error");
    }
  });
}

function showPuzzle1Result(success, codePart, explanation) {
  const puzzle1Container = document.getElementById("puzzle1-content");
  if (!success) return;
  const html = `
    <div class="puzzle-result success">
      <h3>✓ Correct!</h3>
      <p>You solved the numeric sequence successfully.</p>
      ${explanation ? `<p class="explanation"><strong>Pattern:</strong> ${explanation}</p>` : ""}
      <div class="code-part">
        <p>First part of the code:</p>
        <div class="code-box">${codePart}</div>
      </div>
      <button class="btn btn-primary" id="puzzle1-next">Next Challenge</button>
    </div>
  `;
  puzzle1Container.innerHTML = html;
  document.getElementById("puzzle1-next").addEventListener("click", () => {
    setTimeout(() => {
      setupPuzzle2();
      showSection("puzzle2");
    }, 50);
  });
}

// ============================================
// PUZZLE 2: Correspondência Lógica
// ============================================

function setupPuzzle2() {
  const puzzle2Container = document.getElementById("puzzle2-content");
  if (!puzzle2Container) return;

  // Helper para IDs seguros (evita espaços/acentos/char estranhos)
  const idSafe = (str) =>
    String(str)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();

  const data = {
    title: "Challenge 2: Death at Café 'O Pedrito' ",
    intro: `
      <p>A person died from poisoning at an afternoon celebration at  Café 'O Pedrito' in Gafanha da Nazaré.</p>
      <p>After forensic analysis, it was concluded that the victim was poisoned. You have 3 suspects. Use the clues to discover:</p>
      <ul>
        <li><strong>Who was it</strong></li>
        <li><strong>What poison</strong> was used</li>
        <li><strong>What food</strong> was poisoned</li>
      </ul>
    `,

    // "Suspects" são posições (1,2,3) — tal como a tabela da folha
    people: ["Suspect 1", "Suspect 2", "Suspect 3"],

    attributes: [
      { category: "Name", options: ["Dona Clotilde", "Quim Roscas", "Zé da Tripa"] },
      { category: "Age", options: ["53", "98", "76"] },
      { category: "Poison", options: ["Baratrez", "Formix", "Ratax"] },
      { category: "Food", options: ["Croissant de Leitão", "Ovos Moles", "Tripa de Chocolate"] }
    ],

    // Pistas exatamente no estilo da folha
    clues: [
      "The <strong>53-year-old</strong> suspect is to the left of whoever poisoned the <strong>Ovos moles</strong>.",
      "Mr. <strong>Zé da Tripa</strong> is not in the <strong>2nd position</strong> of the table.",
      "The <strong>98-year-old</strong> suspect used <strong>Formix</strong> as poison.",
      "The suspect who used <strong>Baratrez</strong> is to the left of the one who used <strong>Ratax</strong>.",
      "The suspect who used <strong>Formix</strong> is in a position where <strong>no positions are to his right</strong>.",
      "Mr. <strong>Dona Clotilde</strong> is at one of the <strong>ends</strong> of the table.",
      "Mr. <strong>Zé da Tripa</strong> is not <strong>suspect 3</strong>.",
      "The suspect who poisoned the <strong>Ovos moles</strong> is to the left of whoever poisoned the <strong>Croissant de Leitão</strong>."
    ],

    massadaHint: "Everybody knew that the victim had a taste for unusual food.",

    // Solução (única) que satisfaz todas as pistas + dica "mais novo"
    // (posições: Suspeito 1 à esquerda, Suspeito 3 à direita)
    solution: {
      "Suspect 1": { Name: "Zé da Tripa", Age: "53", Poison: "Baratrez", Food: "Tripa de Chocolate" },
      "Suspect 2": { Name: "Quim Roscas", Age: "76", Poison: "Ratax", Food: "Ovos Moles" },
      "Suspect 3": { Name: "Dona Clotilde", Age: "98", Poison: "Formix", Food: "Croissant de Leitão" }
    },

    // murderer (final person the user must pick after reading hint)
    murderer: "Suspect 3",
    // Para a tua mecânica do "código final"
    codePart: CONFIG.finalCode.part2
  };

  // --- Render base ---
  const solvedKey = "puzzle2_solved";
  const savedSolved = localStorage.getItem(solvedKey) === "true";

  let descriptionHtml = `
    <div class="puzzle-description">
      <h2>${data.title}</h2>
      ${data.intro}

      <div class="clues">
        <h3>Options</h3>
        <ul>
          <li><strong>Name:</strong> ${data.attributes[0].options.join(" • ")}</li>
          <li><strong>Age:</strong> ${data.attributes[1].options.join(" • ")}</li>
          <li><strong>Poison:</strong> ${data.attributes[2].options.join(" • ")}</li>
          <li><strong>Food:</strong> ${data.attributes[3].options.join(" • ")}</li>
        </ul>

        <h3>Clues</h3>
        <ul>
          ${data.clues.map(c => `<li>${c}</li>`).join("")}
        </ul>

        
      </div>
    </div>
  `;

  // Render a table with rows: Name, Age, Poison, Food and columns for each suspect
  let contentHtml = `
    <div class="puzzle-body">
      <div class="puzzle2-table-wrapper">
        <table class="puzzle2-table">
          <thead>
            <tr>
              <th></th>
              ${data.people.map(p => `<th>${p}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${data.attributes.map(attr => `
              <tr>
                <td class="attr-label">${attr.category}</td>
                ${data.people.map(person => {
                  const selectId = `select-${idSafe(person)}-${idSafe(attr.category)}`;
                  return `
                    <td>
                      <select id="${selectId}" class="input-field table-select" ${savedSolved ? "disabled" : ""}>
                        <option value="">--</option>
                        ${attr.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
                      </select>
                    </td>
                  `;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div id="puzzle2-hint" class="puzzle-hint" aria-live="polite"></div>

      <div class="form-actions">
        <button id="puzzle2-check" class="btn btn-primary" ${savedSolved ? "disabled" : ""}>Validate Solution</button>
        <button id="puzzle2-clear" class="btn btn-secondary">Clear Choices</button>
      </div>

      <div id="puzzle2-feedback" class="puzzle-feedback" aria-live="polite"></div>
    </div>
  `;

  puzzle2Container.innerHTML = descriptionHtml + contentHtml;

  // --- Helpers de leitura de UI ---
  function getSelection(person, category) {
    const selectId = `select-${idSafe(person)}-${idSafe(category)}`;
    const el = document.getElementById(selectId);
    return el ? el.value : "";
  }

  function setAllDisabled(disabled) {
    data.people.forEach(person => {
      data.attributes.forEach(attr => {
        const selectId = `select-${idSafe(person)}-${idSafe(attr.category)}`;
        const el = document.getElementById(selectId);
        if (el) el.disabled = disabled;
      });
    });
    const btnCheck = document.getElementById("puzzle2-check");
    if (btnCheck) btnCheck.disabled = disabled;
  }

  function renderSolvedResult() {
    const feedback = document.getElementById("puzzle2-feedback");
    const murderer = "Suspect 3"; // pela dica "mais novo" + solução final
    const who = data.solution[murderer].Name;
    const poison = data.solution[murderer].Poison;
    const food = data.solution[murderer].Food;

    feedback.innerHTML = `
      <div class="puzzle-result success">
        <h3>✅ Case Solved!</h3>
        <p><strong>Who was it?</strong> ${who}</p>
        <p><strong>Poison?</strong> ${poison}</p>
        <p><strong>Food?</strong> ${food}</p>
        <div class="code-part">
          <p>Second part of the code:</p>
          <div class="code-box">${data.codePart}</div>
        </div>
        <button class="btn btn-primary" id="puzzle2-next">Next Challenge →</button>
      </div>
    `;

    // Event listener para próximo puzzle
    const btnNext = document.getElementById("puzzle2-next");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        setTimeout(() => {
          setupPuzzle3();
          showSection("puzzle3");
        }, 50);
      });
    }
  }

  // Se já estiver resolvido, mostra logo o resultado
  if (savedSolved) {
    renderSolvedResult();
  }

  // --- Eventos ---
  const btnCheck = document.getElementById("puzzle2-check");
  const btnClear = document.getElementById("puzzle2-clear");
  const feedback = document.getElementById("puzzle2-feedback");
  const hintDiv = document.getElementById("puzzle2-hint");

  btnClear?.addEventListener("click", () => {
    if (savedSolved) return;
    data.people.forEach(person => {
      data.attributes.forEach(attr => {
        const selectId = `select-${idSafe(person)}-${idSafe(attr.category)}`;
        const el = document.getElementById(selectId);
        if (el) el.value = "";
      });
    });
    feedback.innerHTML = "";
    if (hintDiv) hintDiv.innerHTML = "";
  });

  btnCheck?.addEventListener("click", () => {
    if (savedSolved) return;

    // Verifica se está tudo preenchido
    for (const person of data.people) {
      for (const attr of data.attributes) {
        const val = getSelection(person, attr.category);
        if (!val) {
          feedback.innerHTML = `<div class="puzzle-feedback error">⚠️ Fill all options for ${person}.</div>`;
          if (hintDiv) hintDiv.innerHTML = "";
          return;
        }
      }
    }

    // Validar contra solução — only if table matches we reveal the hint
    let ok = true;
    for (const person of data.people) {
      const expected = data.solution[person];
      for (const attr of data.attributes) {
        const cat = attr.category;
        const actual = getSelection(person, cat);
        if (actual !== expected[cat]) {
          ok = false;
          break;
        }
      }
      if (!ok) break;
    }

    if (!ok) {
      feedback.innerHTML = `<div class="puzzle-feedback error">❌ Still not right. Review the clues and try again.</div>`;
      if (hintDiv) hintDiv.innerHTML = "";
      return;
    }

    // Table is correct — reveal hint and show killer selector (user must pick)
    if (hintDiv) {
      hintDiv.innerHTML = `
        <p class="hint"><em>${data.massadaHint}</em></p>
        <div class="killer-chooser" style="margin-top:0.5rem;">
          <label for="puzzle2-killer-select" style="display:block; margin-bottom:0.25rem;">Who is the killer? Read the hint and choose one:</label>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <select id="puzzle2-killer-select" class="input-field" style="min-width:160px;">
              <option value="">-- Choose suspect --</option>
              ${data.people.map(p => `<option value="${p}">${p}</option>`).join("")}
            </select>
            <button id="puzzle2-killer-submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      `;

      // hide the main validate button after successful validation
      if (btnCheck) btnCheck.style.display = "none";

      // attach listener for killer submission
      const killerBtn = document.getElementById("puzzle2-killer-submit");
      killerBtn?.addEventListener("click", () => {
        const sel = document.getElementById("puzzle2-killer-select");
        const chosen = sel ? sel.value : "";
        if (!chosen) {
          feedback.innerHTML = `<div class="puzzle-feedback error">⚠️ Choose a suspect.</div>`;
          return;
        }

        if (chosen === data.murderer) {
          // final success
          localStorage.setItem(solvedKey, "true");
          localStorage.setItem("puzzle2_codePart", data.codePart);
          completePuzzle(2, data.codePart);
          setAllDisabled(true);
          renderSolvedResult();
          launchConfetti();
          toast("🎉 Case Solved!", "success", 5000);
        } else {
          feedback.innerHTML = `<div class="puzzle-feedback error">❌ That's not the killer. Re-read the hint.</div>`;
        }
      });
    }
  });
}


// ============================================
// PUZZLE 3: Sequência Numérica
// ============================================

function setupPuzzle3() {
  const puzzle3Container = document.getElementById("puzzle3-content");

  // Mostrar a frase codificada e pedir que o utilizador escreva a palavra original "guilty"
  const displayPlain = 'the answer is "guilty"';
  const fixedShift = 3;
  const encodedDisplay = cipherCaesar(displayPlain, fixedShift);
  const expectedAnswer = 'guilty'; // utilizador deve escrever a palavra original
  const answerPart = CONFIG.finalCode.part3;

  const descriptionHtml = `
    <div class="puzzle-description">
      <h2>Challenge 3: Encoded Message</h2>
      <p>Here is a message encoded by the 3 Kings. Decode it and write the original word hidden between quotes.</p>
      <p> </p>
    </div>
  `;

  const contentHtml = `
    <div class="puzzle-body">
      <div class="form-group">
        <label for="encoded-text">Encoded text:</label>
        <div class="code-box" id="encoded-text">${encodedDisplay}</div>
      </div>

      <div class="form-group">
        <label for="puzzle3-answer">Original word (no quotes):</label>
        <input type="text" id="puzzle3-answer" class="input-field" placeholder="Type the original word...">
      </div>

      <button class="btn btn-primary" id="puzzle3-submit">Check Answer</button>
    </div>
  `;

  puzzle3Container.innerHTML = descriptionHtml + contentHtml;

  document.getElementById("puzzle3-submit").addEventListener("click", () => {
    const userAnswer = normalizeString(document.getElementById("puzzle3-answer").value);
    if (userAnswer === normalizeString(expectedAnswer)) {
      completePuzzle(3, answerPart);
      showPuzzle3Result(true, answerPart);
    } else {
      toast("Incorrect answer. Try again!", "error");
    }
  });
}

/**
 * Mostra resultado do puzzle 3
 */
function showPuzzle3Result(success, codePart) {
  const puzzle3Container = document.getElementById("puzzle3-content");
  
  const resultHtml = `
    <div class="puzzle-result success">
      <h3>🎉 Congratulations!</h3>
      <p>You deciphered the message successfully!</p>
      <div class="code-part">
        <p>Third part of the code:</p>
        <div class="code-box">${codePart}</div>
      </div>
      <button class="btn btn-primary" id="puzzle3-next">Go to Voucher →</button>
    </div>
  `;
  
  puzzle3Container.innerHTML = resultHtml;
  
  document.getElementById("puzzle3-next").addEventListener("click", () => {
    showSection("final");
    setTimeout(() => {
      setupFinalSection();
    }, 50);
  });
}
