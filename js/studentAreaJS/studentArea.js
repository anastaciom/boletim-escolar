
const btnMedia = document.querySelector('#btnMedia')
const btnAbsences = document.querySelector('#btnAbsences')
const btnOccurrences = document.querySelector('#btnOccurrences')

const modalMedia = document.querySelector('#modalMedia')
const modalAbsences = document.querySelector('#modalAbsences')
const modalOccurrences = document.querySelector('#modalOccurrences')

const closeMedia = document.querySelector('#closeMedia')
const closeAbsences = document.querySelector('#closeAbsences')
const closeOccurrences = document.querySelector('#closeOccurrences')


function verifyStudent() {


  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = '../index.html';
      console.log('Não existe usuario')
    } else {
      console.log('logado')
      let uid = user.uid
      db.collection('Alunos').doc(uid).get().then((doc => {

        mainStudentInfo(doc)
        pageFeatures(doc)
        

      })).catch(err => {
        console.log(err)
      })
    }
  });

}

verifyStudent()




