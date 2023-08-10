
const form = document.querySelector('#loginForm');
const msg1 = document.querySelector('.logMsg');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', msg1);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.email || !res.password) {
    msg1.innerHTML = 'Заполните все поля!';
  } else {
    try {
      const response = await fetch(' http://localhost:3000/login.js ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const resul = await response.json();
      console.log('...........>', result);
      if (resul.err) {
        msg1.innerHTML = resul.err;
        msg1.style.color = 'red';
      } if (resul.msg1) {
        msg1.innerText = resul.msg1;
        msg1.style.color = 'green';
        setTimeout(() => {
          window.location.href = '/profile';
        }, 2000);
      }
    } catch (error) {
      console.log('Чтото совсем всё плохо :((((', error);
    }
  }
});