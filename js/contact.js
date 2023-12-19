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

  if (!isSent) {
    fetch('https://kirito-san-88.github.io/portfolio/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        console.log('Réponse du serveur :', resp);
        return resp.json();
      })
      .then(() => {
        isSent = true;
        alert('Votre message a bien été envoyé.');
      })
      .catch((err) => {
        alert(
          "Il y a eu un probleme au moment de l'envoi, contactez moi par mail : vincentbsr88@gmail.com"
        );
        console.error("Erreur lors de l'envoi du message :", err);
      });
  }
});
