const btn = document.querySelector('#submit');
let isSent = false;
btn.addEventListener('click', () => {
  let data = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    message: message.value,
  };
  nom.value = '';
  prenom.value = '';
  email.value = '';
  message.value = '';

  if (isSent === true) {
    alert('Votre message a bien été envoyé.');
    fetch('https://kirito-san-88.github.io/portfolio/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        isSent = true;
        resp.json();
      })
      .catch((err) =>
        alert(
          "Il y a eu un probleme au moment de l'envoi, contactez moi par mail : vincentbsr88@gmail.com"
        )
      );
  }
});
