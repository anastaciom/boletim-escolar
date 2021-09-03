const exit = document.querySelector('#exit')

exit.addEventListener('click', () => {
  var boxMessage = document.querySelector('.message-exit')
  boxMessage.classList.toggle('active');

  if (boxMessage.classList.contains('active')) {
    document.querySelector('.message-exit').addEventListener('click', () => {
      auth.signOut().then(()=>{
        console.log('deslogado')
      }).catch(err=>{
        console.log(err)
      })
      window.location.replace('/boletim-escolar/pages/index.html');
    })
  }
})

