const inputUser = document.querySelector('#InputUser')
const inputPass = document.querySelector('#InputPassword')
const loginMsgError = document.querySelector('#loginMsgError')
const closeMsgError = document.querySelector('#closeMsg')

const registerName = document.querySelector('#regNameInput')
const registerClass = document.querySelector('#regClassInput')
const registerUser = document.querySelector('#regUserInput')
const registerPass = document.querySelector('#regPassInput')


const regMessageName = document.querySelector('#regMessageName')
const regMessageEmail = document.querySelector('#regMessageEmail')
const regMessagePass = document.querySelector('#regMessagePass')
const regMessageClass = document.querySelector('#regMessageClass')



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
    document.querySelector('#img-bg-register').style.display = 'initial'
  } else {
    document.querySelector('#areaLogin').style.display = 'flex'
    document.querySelector('#img-background').style.display = 'initial'
  }
  buttonBack.addEventListener('click', () => {
    registerArea.classList.remove('activeRegisterArea')
    document.querySelector('#areaLogin').style.display = 'flex'
    document.querySelector('#img-background').style.display = 'initial'
    document.querySelector('#img-bg-register').style.display = 'none'
  })
})



buttonCadastrar.addEventListener('click', () => {

  checkedRegister()

  auth.createUserWithEmailAndPassword(registerUser.value, registerPass.value)
    .then((user) => {

      alert('O usuário ' + user.user.email + ' foi registrado, CLIQUE em voltar e faça o LOGIN')
      db.collection('Alunos').doc(user.user.uid).set({
        email: user.user.email,
        turma: registerClass.value,
        nome: registerName.value,
        notas: {
          bimestre1: {
            matematica: Number(),
            quimica: Number(),
            fisica: Number(),
            ingles: Number(),
            biologia: Number(),
            artes: Number(),
            edFisica: Number(),
            geografia: Number(),
            portugues: Number(),
            historia: Number(),
          },
          bimestre2: {
            matematica: Number(),
            quimica: Number(),
            fisica: Number(),
            ingles: Number(),
            biologia: Number(),
            artes: Number(),
            edFisica: Number(),
            geografia: Number(),
            portugues: Number(),
            historia: Number(),
          },
          bimestre3: {
            matematica: Number(),
            quimica: Number(),
            fisica: Number(),
            ingles: Number(),
            biologia: Number(),
            artes: Number(),
            edFisica: Number(),
            geografia: Number(),
            portugues: Number(),
            historia: Number(),
          },
          bimestre4: {
            matematica: Number(),
            quimica: Number(),
            fisica: Number(),
            ingles: Number(),
            biologia: Number(),
            artes: Number(),
            edFisica: Number(),
            geografia: Number(),
            portugues: Number(),
            historia: Number(),
          },
          
        }

      })
    })
    .catch(() => {

      alert('OPSS!! Não foi possivel registrar esse usuário')

    });


})



buttonLogin.addEventListener('click', () => {


  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth.signInWithEmailAndPassword(inputUser.value, inputPass.value)
        .then((user) => {
          if (user.user.uid == 'V9ay11XWwtaQIal85VqXNYqy1aT2') {
            alert('Seja bem vindo PROFESSOR!!')
            window.location.href = './pages/teacherArea.html';
          } else {
            alert('Seja bem vindo aluno!! ' + user.user.email)
            window.location.href = './pages/studentArea.html';
          }
        })
        .catch(() => {
          loginMsgError.style.display = 'flex'
          closeMsgError.addEventListener('click', () => {
            loginMsgError.style.display = 'none'
          })
        });
    })
    .catch((err) => {
      alert(err)
    });

})



function checkedRegister() {

  if (registerName.value === '') {
    regMessageName.innerHTML = `<small style="color: red;">${'Preencha o campo "Nome do aluno"'}</small>`

  } else {
    regMessageName.innerHTML = `<small style="color: green;">${'Preenchido'}</small>`
  }

  if (registerUser.value === '') {

    regMessageEmail.innerHTML = `<small style="color: red;">${'Preencha o campo "E-mail".Exemplo: "abc@gmail.com"'}</small>`

  } else {
    regMessageEmail.innerHTML = `<small style="color: green;">${'Preenchido'}</small>`
  }

  if (registerPass.value === '') {
    regMessagePass.innerHTML = `<small style="color: red;">${'Preencha o campo "Senha".A senha deverá ter pelo menos 6 caracteres'}</small>`

  } else {
    regMessagePass.innerHTML = `<small style="color: green;">${'Preenchido'}</small>`
  }

  if (registerClass.value === '') {
    regMessageClass.innerHTML = `<small style="color: red;">${'Preencha o campo "Turma".Exemplo: "3ºA"'}</small>`

  } else {
    regMessageClass.innerHTML = `<small style="color: green;">${'Preenchido'}</small>`
  }

}

