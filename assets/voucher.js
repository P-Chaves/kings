/**
 * Renderização do voucher e funcionalidades finais
 */

function setupFinalSection() {
  const finalContainer = document.getElementById("final-content");
  const progress = getProgress();
  
  let contentHtml = `
    <div class="puzzle-description">
      <h2>Final Challenge: Unlock the Gift</h2>
      <p>You've solved the 3 challenges! Now enter the final code to unlock your surprise gift.</p>
    </div>
  `;
  
  if (!progress.unlocked) {
    contentHtml += `
      <div class="puzzle-body">
        <div class="code-input-section">
          <p class="hint">The code is made from the 3 parts of the previous challenges, joined with hyphens.</p>
          
          <div class="form-group">
            <label for="final-code-input">Final Code:</label>
            <input type="text" id="final-code-input" class="input-field" placeholder="Example: NIGHT-STAGE-FREE" autocomplete="off">
          </div>
          
          <button class="btn btn-primary" id="unlock-btn">Unlock Gift</button>
        </div>
      </div>
    `;
  } else {
    contentHtml += renderVoucher();
  }
  
  finalContainer.innerHTML = contentHtml;
  
  // Event listener para desbloquear
  if (!progress.unlocked) {
    document.getElementById("unlock-btn").addEventListener("click", () => {
      const userCode = document.getElementById("final-code-input").value;
      
      if (validateFinalCode(userCode)) {
        unlockVoucher();
        launchConfetti();
        toast("🎉 Gift Unlocked!", "success", 5000);
        
        // Atualiza a view
        setTimeout(() => {
          setupFinalSection();
        }, 500);
      } else {
        toast("Incorrect code! Try again.", "error");
      }
    });
  }
}

/**
 * Renderiza o voucher
 */
function renderVoucher() {
  return `
    <div class="voucher-section">
      <div class="voucher-card crime-themed" id="voucher-card">
        <div class="voucher-header crime-header">
          <h2 style="font-family: 'Georgia', serif; letter-spacing: 3px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">🔍 ${CONFIG.voucherTitle}</h2>
          <div class="voucher-seal">⚖️</div>
        </div>
        
        <div class="voucher-body crime-body">
          <div class="crime-ribbon" style="background: linear-gradient(90deg, #8B0000, #DC143C); padding: 10px; text-align: center; color: white; font-weight: bold; margin: -2rem -2rem 1.5rem -2rem; font-size: 0.9rem;">EVIDENCE #001 - CONFIDENTIAL</div>
          
          <div class="voucher-recipients">
            <p><strong>Para:</strong> ${CONFIG.recipient1} & ${CONFIG.recipient2}</p>
            <p><strong>De:</strong> ${CONFIG.fromName}</p>
          </div>
          
          <div class="voucher-content" style="border: 2px dashed #8B0000; padding: 1rem; background: #fff8f8; margin: 1rem 0;">
            <p style="font-family: 'Georgia', serif; font-style: italic;">${CONFIG.voucherText}</p>
          </div>
          
          <div class="voucher-details" style="border-top: 2px solid #DC143C; padding-top: 1rem;">
            <p><strong>⏰ CASE DEADLINE:</strong> ${CONFIG.validityText}</p>
            <p class="voucher-code" style="background: #f0f0f0; padding: 0.5rem; margin-top: 0.5rem; font-family: 'Courier New', monospace; border-left: 4px solid #8B0000;">CASE CODE: <span class="voucher-code-value" style="color: #8B0000;">GUILTY-2026</span></p>
          </div>
        </div>
        
        <div class="voucher-footer crime-footer">
          <p style="font-family: 'Georgia', serif; font-style: italic; color: #8B0000;">⚖️ Justice Awaits on Stage! 🎭</p>
        </div>
      </div>
      
      <div class="celebration">
        <h3>🎉 Congratulations!</h3>
        <p>Both of you have demonstrated the intelligence and wit needed to be worthy of this special gift.</p>
        <p style="margin-top: 20px; font-size: 18px; color: #6366f1;"><strong>Send me a message on WhatsApp to claim your gift! 🎁</strong></p>
      </div>
    </div>
  `;
}

// Dates form and print functions removed - using simple WhatsApp-based claim instead
