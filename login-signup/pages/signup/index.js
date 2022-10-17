(() => {
  const validateName = (name) => {
    const re = /^([a-zA-Z]{1,4}\.)?([ a-zA-Z]{4,20})$/;
    return re.test(name);
  };

  const validatePassword = (password) => {
    const re = /^([\w!@#$%^&*()-]{8,20})$/;
    return re.test(password);
  };

  const validateEmail = (email) => {
    let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    return re.test(email);
  };

  const validateTnC = (tnc) => {
    return tnc == "on";
  };

  document.addEventListener("DOMContentLoaded", () => {
    const crossBtn = document.querySelector(".exit_btn");
    crossBtn.addEventListener("click", () => {
      window.location.href = "/login-signup/index.html";
    });

    const viewPw = document.querySelector(".form__input__viewpw");
    viewPw.addEventListener("click", () => {
      const pw = document.getElementById("s_password");
      if (pw.type == "password") {
        pw.type = "text";
        viewPw.src = "../../images/view_password.png";
      } else {
        pw.type = "password";
        viewPw.src = "../../images/hide_password.png";
      }
    });

    const clearError = () => {
      const errors = document.querySelectorAll(".error");

      errors.forEach((error) => {
        if (error) {
          error.remove();
        }
      });
    };

    const form = document.forms["signup"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clearError();
      const name = form["name"];
      const email = form["email"];
      const password = form["password"];
      const tnc = form["tnc"];

      if (!validateName(name.value)) {
        const name_error_div = document.createElement("div");
        name_error_div.textContent = "Invalid name!";
        name_error_div.classList.add("name_error", "error");

        const parent_name_element = document.querySelector(".form__input_name");
        parent_name_element.appendChild(name_error_div);
      }

      if (!validateEmail(email.value)) {
        const email_error_div = document.createElement("div");
        email_error_div.textContent = "Invalid email!";
        email_error_div.classList.add("email_error", "error");

        const parent_email_element =
          document.querySelector(".form__input_email");
        parent_email_element.appendChild(email_error_div);
      }

      if (!validatePassword(password.value)) {
        const password_error_div = document.createElement("div");
        password_error_div.textContent = "Invalid password!";
        password_error_div.classList.add("password_error", "error");

        const parent_password_element = document.querySelector(
          ".form__input_password"
        );
        parent_password_element.appendChild(password_error_div);
      }

      if (!validateTnC(tnc.value)) {
        const tnc_error_div = document.createElement("div");
        tnc_error_div.textContent = "Check this box if you agree to our T&C";
        tnc_error_div.classList.add("tnc_error", "error");

        const parent_tnc_element = document.querySelector(".form__input_tnc");
        parent_tnc_element.appendChild(tnc_error_div);
      }

      console.log(name.value, email.value, password.value, tnc.value);
    });
  });
})();
