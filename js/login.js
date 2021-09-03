const inputUser = document.querySelector('#InputUser')
const inputPass = document.querySelector('#InputPassword')
const registerUser = document.querySelector('#regUserInput')
const registerPass = document.querySelector('#regPassInput')
const boxCadastrar = document.querySelector('#cadastre strong')
const buttonCadastrar = document.querySelector('#cadastrar')
const buttonLogin = document.querySelector('#entrar')
const buttonBack = document.querySelector('#voltar')



boxCadastrar.addEventListener('click', () => {
  let registerArea = document.querySelector('.registerArea')
  registerArea.classList.toggle('activeRegisterArea')

  if (registerArea.classList.contains('activeRegisterArea')) {
    document.querySelector('#areaLogin').style.display = 'none'
    document.querySelector('#img-background').style.display = 'none'
  } else {
    document.querySelector('#areaLogin').style.display = 'flex'
    document.querySelector('#img-background').style.display = 'initial'
  }
  buttonBack.addEventListener('click', () => {
    registerArea.classList.remove('activeRegisterArea')
    document.querySelector('#areaLogin').style.display = 'flex'
    document.querySelector('#img-background').style.display = 'initial'
  })
})


buttonCadastrar.addEventListener('click', () => {

  auth.createUserWithEmailAndPassword(registerUser.value, registerPass.value)
    .then((user) => {
      alert('O usuário ' + user.user.email + ' foi registrado, CLIQUE em voltar e faça o LOGIN')
    })
    .catch(() => {

      alert('Não foi possivel registrar esse usuário')
    });

})



buttonLogin.addEventListener('click', () => {

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth.signInWithEmailAndPassword(inputUser.value, inputPass.value)
        .then((user) => {
          alert('Seja bem vindo!! ' + user.user.email)
        })
        .catch(() => {
          alert('Preencha os dados de maneira correta!!!')
        });
    })
    .catch((err) => {
      alert(err)
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        window.location.replace('/boletim-escolar/pages/studentArea.html');
        var uid = user.uid;
        console.log(uid)
      } else {
        console.log('sem usuario')
      }
    });
    
})



