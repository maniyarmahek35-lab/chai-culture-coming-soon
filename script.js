  
    const emailInput = document.getElementById("email");
    const notifyBtn = document.getElementById("notifyBtn");
    const message = document.getElementById("message");

    notifyBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        showMessage("Please enter your email address.");
        return;
      }

      if (!validateEmail(email)) {
        showMessage("Please enter a valid email address.");
        return;
      }

      showMessage("✅ You’re all set. We’ll notify you at launch.");
      emailInput.value = "";
    });

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showMessage(text) {
      message.textContent = text;
      message.style.opacity = "0";
      setTimeout(() => {
        message.style.opacity = "1";
      }, 50);
    }
  