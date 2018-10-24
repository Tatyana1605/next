
    import axios from 'axios';

    const form = document.getElementById('form');
    const submit = document.querySelector('.form__submit');
    const action = form.getAttribute('action');
    const method = form.getAttribute('method');
    const name = form.elements.name;
    const password = form.elements.password;
    const checkCaptcha = form.elements.checkCaptcha;
    const radioCaptcha = form.elements.radioCaptcha;
    
    submit.addEventListener("click", function (e) {
      e.preventDefault();
      if (validateForm(form)) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open(method, action);
        xhr.send(new FormData(form));
        xhr.addEventListener("load", function () {
          if (xhr.status === 200) {
            const ttl = Math.floor(Date.now() / 1000 + xhr.response.ttl);
    
            localStorage.setItem('ttl', ttl);
            localStorage.setItem('token', xhr.response.token);
    
            axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    
            // window.location.href = "./admin";
    
          } else {
            console.log(xhr.statusText);
          }
        })
    
      }
    });
    
    function validateForm(form) {
      const name = form.elements.name;
      const password = form.elements.password;
      const checkCaptcha = form.elements.checkCaptcha;
      const radioCaptcha = form.elements.radioCaptcha;
      if (name.value.length <= 0) {
        validateField(name, "Вы не ввели логин");
        name.classList.add('js-validation');
      } else {
        validateField(name, "");
        name.classList.remove('js-validation');
      }
      if (password.value.length <= 3) {
        validateField(password, "Пароль меньше 3х символов");
        password.classList.add('js-validation');
      } else {
        validateField(password, "");
        password.classList.remove('js-validation');
      }
    
      if (!checkCaptcha.checked) {
        validateField(checkCaptcha, "Робот! Ты не пройдешь!");
        checkCaptcha.classList.add('js-validation');
      } else {
        validateField(checkCaptcha, "");
        checkCaptcha.classList.remove('js-validation');
      }
      for (let i = 0; i < radioCaptcha.length; i++) {
        const radio = radioCaptcha[i];
        if (radio.checked) {
          if (radio.value === 'no') {
            validateField(radioCaptcha, "Робот! Ты не пройдешь!");
            radio.classList.add('js-validation');
          }
          if (radio.value === 'yes') {
            validateField(radioCaptcha, "");
            radioCaptcha[1].classList.remove('js-validation');
          }
        }
      }
      const validArray = document.querySelectorAll('.js-validation');
      if (validArray.length === 0) return true;
    }
    function validateField(field, messege) {
      const fieldError = field.nextElementSibling;
      const parentLabel = field.parentNode;
      if (field === name || field === password) {
        fieldError.textContent = messege;
        if (messege) {
          const div = document.createElement('div');
          div.className = 'form__error-triangle';
          fieldError.appendChild(div);
          
          parentLabel.classList.add('form__input-label--error');
        
          parentLabel.classList.remove('form__input-label--success');
         
          
        } else {
          parentLabel.classList.add('form__input-label--success');
          
          parentLabel.classList.remove('form__input-label--error');
         
          
        }
      }
      if (field === checkCaptcha) {
        const lastFieldError = parentLabel.children[3];
        lastFieldError.textContent = messege;
        if (messege) {
          const div = document.createElement('div');
          div.className = 'form__error-triangle';
          lastFieldError.appendChild(div);
        }
      }
      if (field === radioCaptcha) {
        for (let i = 0; i < radioCaptcha.length; i++) {
          const field = radioCaptcha[i];
          const parentLabel = field.parentNode;
          const parentRow = parentLabel.parentNode;
          const lastFieldRow = parentRow.children[3];
          lastFieldRow.textContent = messege;
          if (messege) {
            const div = document.createElement('div');
            div.className = 'form__error-triangle';
            lastFieldRow.appendChild(div);
          }
        }
      }
    }