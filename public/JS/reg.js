const form = document.querySelector('#regForm');
const msg = document.querySelector('.regMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  console.log('>>>>>>>>>>>', res);
  if (!res.email || !res.password || !res.login) {
    console.log('Введите свои данные!');
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } if (result.msg) {
        msg.innerText = result.msg;
        msg.style.color = 'green';
        setTimeout(() => {
          window.location.href = '/profile';
        }, 1000);
      }
    } catch (error) {
      console.log('Всё плохо :((((', error);
    }
  }
});
