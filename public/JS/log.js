document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#loginForm');
  const msg1 = document.querySelector('.logMsg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = Object.fromEntries(data);

    if (!res.email || !res.password) {
      setMessage('Заполните все поля!');
    } else {
      try {
        console.log("................>" );
        const response = await fetch('/login', {
          method: 'POST',
          credentials:'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res),
        });
        const result = await response.json();

        if (result.err) {
          setMessage(result.err);
        } else if (result.msg1) {
          setMessage(result.msg1);
          setTimeout(() => {
            window.location.href = '/profile';
          }, 2000);
        }
      } catch (error) {
        console.log('Что-то совсем всё плохо :((((', error);
      }
    }
  });

  function setMessage(message) {
    msg1.innerText = message; 
    msg1.style.color = message.includes('успешно') ? 'green' : 'red';
  }
});


