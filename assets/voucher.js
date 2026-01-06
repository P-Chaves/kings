/**
 * Renderização do voucher e funcionalidades finais
 */

function setupFinalSection() {
  const finalContainer = document.getElementById("final-content");
  const progress = getProgress();
  
  let contentHtml = `
    <div class="puzzle-description">
      <h2>Final Challenge</h2>
      <p>You've solved the 3 challenges! Now enter the final code to prove you have a brain.</p>
    </div>
  `;
  
  if (!progress.unlocked) {
    contentHtml += `
      <div class="puzzle-body">
        <div class="code-input-section">
          <p class="hint">The code is made from the 3 parts of the previous challenges, joined with hyphens.</p>
          
          <div class="form-group">
            <label for="final-code-input">Final Code:</label>
            <input type="text" id="final-code-input" class="input-field" placeholder="Example: WRITE-LIKE-THIS" autocomplete="off">
          </div>
          
          <button class="btn btn-primary" id="unlock-btn">Let's See!</button>
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
            <p><strong>TO:</strong> ${CONFIG.recipient1} & ${CONFIG.recipient2}</p>
            <p><strong>FROM:</strong> ${CONFIG.fromName}</p>
          </div>
          
          <div class="voucher-content" style="border: 2px dashed #8B0000; padding: 1rem; background: #fff8f8; margin: 1rem 0;">
            <p style="font-family: 'Georgia', serif; font-style: italic;">${CONFIG.voucherText}</p>
          </div>
          
          <div class="voucher-details" style="border: 3px solid #8B0000; background: linear-gradient(135deg, #FFD700, #FFC700); padding: 1.5rem; margin: 1.5rem 0; border-radius: 8px; text-align: center; box-shadow: 0 4px 8px rgba(139, 0, 0, 0.3);">
           <p>
  <span style="
    font-size: 1.4rem;
    font-weight: 900;
    color: #8B0000;
    background: linear-gradient(90deg, #fff1f1, #ffffff, #fff1f1);
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    box-shadow: 0 0 0 2px rgba(139,0,0,0.25);
    text-shadow: 1px 1px 2px rgba(255,255,255,0.6);
    display: inline-block;
  ">
     You both will have the honor to be at
   <span style=" font-size: 1.4rem;
    font-weight: 900;
    color: #8B0000;
    
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
 
   
    display: inline-block;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-underline-offset: 4px;
    "
     > 🎭 The Jury Experience: Murder Case - Valencia 🎭</span>
    
  </span>
</p>


 <p style="font-size: 1.1rem; color: #2d0000; margin-top: 0.5rem; font-style: italic; font-weight: bold;">${CONFIG.juryText}</p>
           
     
          </div>
        </div>
        
        <div class="voucher-footer crime-footer">
          <p style="
  font-family: 'Georgia', serif;
  font-style: italic;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.65);
  padding: 0.35rem 0.7rem;
  border-radius: 6px;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0,0,0,0.9);
  letter-spacing: 0.3px;
  margin: 0.5rem 0;
">
  ⚖️ Justice Awaits on Stage! 🎭
</p> </div>
      </div>
      
      
    </div>
  `;
}

// Dates form and print functions removed - using simple WhatsApp-based claim instead
