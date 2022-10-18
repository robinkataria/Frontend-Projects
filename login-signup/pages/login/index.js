(() => {
  const PASSWORD_REGEX = /^([\w!@#$%^&*()-]{8,20})$/;
  const EMAIL_REGEX =
    /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  document.addEventListener("DOMContentLoaded", () => {
    const crossBtn = document.querySelector(".exit_btn");
    crossBtn.addEventListener("click", () => {
      window.location.href = "/login-signup/index.html";
    });

    const viewPw = document.querySelector(".form__viewpw");
    viewPw.addEventListener("click", () => {
      const pw = document.getElementById("l_password");
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

    const form = document.forms["login"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clearError();
      const email = form["email"];
      const password = form["password"];
      const rememberMe = form["save_pw"];

      if (!EMAIL_REGEX.test(email.value)) {
        const email_error_div = document.createElement("div");
        email_error_div.textContent = "Invalid email!";
        email_error_div.classList.add("email_error", "error");

        const parent_email_element =
          document.querySelector(".form__input_email");
        parent_email_element.appendChild(email_error_div);
      }

      if (!PASSWORD_REGEX.test(password.value)) {
        const password_error_div = document.createElement("div");
        password_error_div.textContent = "Invalid password!";
        password_error_div.classList.add("password_error", "error");

        const parent_password_element = document.querySelector(
          ".form__input_password"
        );
        parent_password_element.appendChild(password_error_div);
      }

      console.log(email.value, password.value, rememberMe.checked);
    });
  });
})();
