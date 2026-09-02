(function() {
  'use strict';

 
  const output = document.getElementById('passwordOutput');
  const lengthSlider = document.getElementById('lengthSlider');
  const lengthDisplay = document.getElementById('lengthDisplay');
  const uppercaseCheck = document.getElementById('uppercase');
  const lowercaseCheck = document.getElementById('lowercase');
  const numbersCheck = document.getElementById('numbers');
  const symbolsCheck = document.getElementById('symbols');
  const customCheck = document.getElementById('customPassword');
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn = document.getElementById('copyBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const strengthFill = document.getElementById('strengthFill');
  const strengthText = document.getElementById('strengthText');

  // ----- Character Sets -----
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';

  // ----- Strength Calculator -----
  function calculateStrength(password) {
    let score = 0;
    const length = password.length;

    if (length >= 4) score += 1;
    if (length >= 8) score += 1;
    if (length >= 12) score += 1;
    if (length >= 16) score += 1;

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    const maxScore = 8;
    const percentage = Math.min((score / maxScore) * 100, 100);
    return percentage;
  }

  // ----- Update Strength UI -----
  function updateStrength(password) {
    const percentage = calculateStrength(password);
    strengthFill.style.width = percentage + '%';

    if (percentage < 30) {
      strengthFill.style.background = '#ff4757';
      strengthText.textContent = 'Weak';
      strengthText.style.color = '#ff4757';
    } else if (percentage < 55) {
      strengthFill.style.background = '#ffa502';
      strengthText.textContent = 'Medium';
      strengthText.style.color = '#ffa502';
    } else if (percentage < 80) {
      strengthFill.style.background = '#2ed573';
      strengthText.textContent = 'Good';
      strengthText.style.color = '#2ed573';
    } else {
      strengthFill.style.background = '#00d2d3';
      strengthText.textContent = 'Strong';
      strengthText.style.color = '#00d2d3';
    }
  }

  // ----- Password Generator -----
  function generatePassword() {
    let availableChars = '';
    if (uppercaseCheck.checked) availableChars += UPPERCASE;
    if (lowercaseCheck.checked) availableChars += LOWERCASE;
    if (numbersCheck.checked) availableChars += NUMBERS;
    if (symbolsCheck.checked) availableChars += SYMBOLS;

    if (availableChars === '') {
      availableChars = UPPERCASE + LOWERCASE + NUMBERS + SYMBOLS;
      uppercaseCheck.checked = true;
      lowercaseCheck.checked = true;
      numbersCheck.checked = true;
      symbolsCheck.checked = true;
    }

    const length = parseInt(lengthSlider.value);
    let password = '';

    const selectedSets = [];
    if (uppercaseCheck.checked) selectedSets.push(UPPERCASE);
    if (lowercaseCheck.checked) selectedSets.push(LOWERCASE);
    if (numbersCheck.checked) selectedSets.push(NUMBERS);
    if (symbolsCheck.checked) selectedSets.push(SYMBOLS);

    for (const set of selectedSets) {
      const randomIndex = Math.floor(Math.random() * set.length);
      password += set[randomIndex];
    }

    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    if (password.length > length) {
      password = password.slice(0, length);
    }

    output.value = password;
    updateStrength(password);
    return password;
  }

  // ----- Copy Password (Only via Copy Button) -----
  function copyPassword() {
    const password = output.value;
    if (!password || password === 'Your password will appear here') {
      return;
    }
    navigator.clipboard.writeText(password).then(() => {
      copyBtn.textContent = '✅';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '📋';
        copyBtn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      alert('Please copy manually or use a modern browser.');
    });
  }

  // ----- Generate Button Handlers -----
  function handleGenerateClick() {
    if (customCheck.checked) return;
    generatePassword();
    generateBtn.disabled = true;
    generateBtn.textContent = '✅ Generated';
    generateBtn.style.opacity = '0.6';
  }

  function handleRefreshClick() {
    if (customCheck.checked) return;
    generatePassword();
  }

  // ----- Length Display & Popup -----
  function updateLengthDisplay() {
    lengthDisplay.textContent = lengthSlider.value;
  }

  function handleLengthClick(e) {
    e.stopPropagation();
    const currentVal = lengthSlider.value;

    const popup = document.createElement('div');
    popup.className = 'length-input-popup';
    popup.style.position = 'fixed';
    popup.style.display = 'block';
    popup.style.background = '#2d3436';
    popup.style.padding = '8px 12px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 8px 30px rgba(0,0,0,0.6)';
    popup.style.zIndex = '999';
    popup.style.border = '1px solid rgba(108,92,231,0.3)';

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '4';
    input.max = '32';
    input.value = currentVal;
    input.style.width = '70px';
    input.style.padding = '6px 10px';
    input.style.border = '2px solid #6c5ce7';
    input.style.borderRadius = '6px';
    input.style.background = '#1e272e';
    input.style.color = '#fff';
    input.style.fontSize = '1.1rem';
    input.style.fontWeight = '600';
    input.style.textAlign = 'center';
    input.style.outline = 'none';
    input.style.transition = '0.2s';
    input.style.fontFamily = 'inherit';

    input.addEventListener('focus', function() {
      this.style.borderColor = '#a29bfe';
      this.style.boxShadow = '0 0 0 3px rgba(108,92,231,0.3)';
    });
    input.addEventListener('blur', function() {
      this.style.borderColor = '#6c5ce7';
      this.style.boxShadow = 'none';
    });

    popup.appendChild(input);

    input.addEventListener('keydown', function(e) {
      e.stopPropagation();
      if (e.key === 'Enter') {
        e.preventDefault();
        closePopupAndUpdate();
      }
    });

    const rect = lengthDisplay.getBoundingClientRect();
    popup.style.left = (rect.left + window.scrollX) + 'px';
    popup.style.top = (rect.bottom + window.scrollY + 8) + 'px';

    document.body.appendChild(popup);

    input.focus();
    input.select();

    function closePopupAndUpdate() {
      let val = parseInt(input.value);
      if (isNaN(val) || val < 4) val = 4;
      if (val > 32) val = 32;
      lengthSlider.value = val;
      updateLengthDisplay();
      if (customCheck.checked) {
        enforcePasswordLength();
      }
      if (popup.parentNode) popup.remove();
      document.removeEventListener('keydown', escapeHandler);
    }

    input.addEventListener('blur', closePopupAndUpdate);

    function escapeHandler(e) {
      if (e.key === 'Escape') {
        if (popup.parentNode) popup.remove();
        document.removeEventListener('keydown', escapeHandler);
      }
    }
    document.addEventListener('keydown', escapeHandler);
  }

  // ----- Custom Mode -----
  function enforcePasswordLength() {
    const maxLen = parseInt(lengthSlider.value);
    let current = output.value;
    if (current.length > maxLen) {
      output.value = current.slice(0, maxLen);
    }
    if (output.value.length > 0) {
      updateStrength(output.value);
    } else {
      strengthFill.style.width = '0%';
      strengthText.textContent = 'Type to check';
      strengthText.style.color = '#a29bfe';
    }
  }

  function toggleCustomMode() {
    const isCustom = customCheck.checked;

    if (isCustom) {
      output.removeAttribute('readonly');
      output.classList.add('editable');
      output.value = '';
      output.placeholder = 'Type your own password here...';
      output.focus();
      strengthFill.style.width = '0%';
      strengthText.textContent = 'Type to check';
      strengthText.style.color = '#a29bfe';

      document.querySelectorAll('.option:not(.custom-option)').forEach(opt => {
        opt.classList.add('disabled');
      });
      document.querySelectorAll('.option:not(.custom-option) input[type="checkbox"]').forEach(cb => {
        cb.disabled = true;
      });

      generateBtn.disabled = true;
      generateBtn.textContent = 'Custom Mode';
      generateBtn.style.opacity = '0.5';
      refreshBtn.disabled = true;
      refreshBtn.style.opacity = '0.5';

      output.removeEventListener('input', enforcePasswordLength);
      output.addEventListener('input', enforcePasswordLength);
      output.addEventListener('paste', function() {
        setTimeout(enforcePasswordLength, 10);
      });

    } else {
      output.setAttribute('readonly', true);
      output.classList.remove('editable');
      output.placeholder = 'Your password will appear here';

      document.querySelectorAll('.option:not(.custom-option)').forEach(opt => {
        opt.classList.remove('disabled');
      });
      document.querySelectorAll('.option:not(.custom-option) input[type="checkbox"]').forEach(cb => {
        cb.disabled = false;
      });

      generateBtn.disabled = false;
      generateBtn.textContent = '⚡ Generate Password';
      generateBtn.style.opacity = '1';
      refreshBtn.disabled = false;
      refreshBtn.style.opacity = '1';

      generatePassword();
    }
  }

  function enableGenerateButton() {
    if (customCheck.checked) return;
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generate Password';
    generateBtn.style.opacity = '1';
  }

  // ----- Event Listeners -----
  generateBtn.addEventListener('click', handleGenerateClick);
  refreshBtn.addEventListener('click', handleRefreshClick);
  copyBtn.addEventListener('click', copyPassword); // শুধু কপি বাটন দিয়ে কপি হবে

  lengthDisplay.addEventListener('click', handleLengthClick);

  customCheck.addEventListener('change', toggleCustomMode);

  const checkboxes = [uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck];
  checkboxes.forEach(cb => {
    cb.addEventListener('change', function() {
      if (customCheck.checked) return;
      if (!uppercaseCheck.checked && !lowercaseCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {
        uppercaseCheck.checked = true;
        lowercaseCheck.checked = true;
        numbersCheck.checked = true;
        symbolsCheck.checked = true;
      }
      enableGenerateButton();
    });
  });

  lengthSlider.addEventListener('input', function() {
    updateLengthDisplay();
    if (customCheck.checked) {
      enforcePasswordLength();
    } else {
      enableGenerateButton();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && !customCheck.checked) {
      if (!generateBtn.disabled) {
        handleGenerateClick();
      }
    }
  });

  output.addEventListener('copy', function(e) { e.preventDefault(); });
  output.addEventListener('cut', function(e) { e.preventDefault(); });
  output.addEventListener('contextmenu', function(e) { e.preventDefault(); });

  // 🆕 🔒 Ctrl+C, Ctrl+X, Ctrl+A ব্লক করুন (সব মোডে)
  output.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'x' || e.key === 'X' || e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      alert('Please use only the copy button.');
    }
  });

  function blockMouseDown(e) { e.preventDefault(); }
  function blockSelectStart(e) { e.preventDefault(); }

  function updateBlockers() {
    if (customCheck.checked) {
      output.removeEventListener('mousedown', blockMouseDown);
    } else {
      output.addEventListener('mousedown', blockMouseDown);
    }

   
    output.removeEventListener('selectstart', blockSelectStart);
    output.addEventListener('selectstart', blockSelectStart);
  }

  
  updateBlockers();


  const originalToggleCustomMode = toggleCustomMode;
  toggleCustomMode = function() {
    originalToggleCustomMode();
    updateBlockers();
  };
  customCheck.addEventListener('change', toggleCustomMode);

  // ----- Initial -----
  generatePassword();
  generateBtn.disabled = false;
  generateBtn.textContent = 'Generate Password';

  console.log('Password Generator loaded!');
})();