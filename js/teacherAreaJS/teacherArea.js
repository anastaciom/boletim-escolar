const teacherName = document.querySelector('#teacher-name')
const btnEditDatas = document.querySelector('#btnEditDatas')
const searchStudentName = document.querySelector('#searchStudentName')
const searchClass = document.querySelector('#searchClass')
const btnSearchDatas = document.querySelector('#btnSearchDatas')
const btnBack = document.querySelector('#btnBack')

const btnAddEdits = document.querySelector('#addEdits')

function verifyTeacher() {

  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = '/boletim-escolar/index.html';
      console.log('Não existe usuario')
    } else {
      console.log('logado')
      let uid = user.uid
      db.collection('Professor').doc(uid).get().then((doc) => {
        teacherName.textContent = (doc.data().nome)
      }).catch(err => {
        console.log(err)
      })



      btnSearchDatas.addEventListener('click', () => {
        db.collection('Alunos').where('nome', '==', searchStudentName.value).where('turma', '==', searchClass.value).onSnapshot(snap => {
          snap.forEach(element => {
            media(element)
            enablingAndDisablingBtns()

            btnAddEdits.addEventListener('click', () => {
              let bimonths = document.querySelector('#bimonths').value
              let searchGrade = document.querySelector('#searchGrade').value
              let gradeStudent = document.querySelector('#gradeStudent').value
              let absencesDate = document.querySelector('#absencesDate').value
              let reasonAbsences = document.querySelector('#reasonAbsences').value


              db.collection('Alunos').doc(element.id).set(
                {
                  notas: {
                    [bimonths]: {
                      [searchGrade]: Number(gradeStudent)
                    }
                  },

                  faltas: firebase.firestore.FieldValue.arrayUnion(
                    {
                      dia: firebase.firestore.Timestamp.fromDate(new Date(absencesDate)),
                      motivo: reasonAbsences,
                    }
                  )
                }, { merge: true }
              ).catch(() => {
                alert('Não foi possivel alterar a nota')
              })
            })

            absencesData(element)
          })
        })

      })
    }
  });

}
verifyTeacher()


function enablingAndDisablingBtns() {
  searchStudentName.setAttribute('disabled', '')
  searchClass.setAttribute('disabled', '')
  btnSearchDatas.style.display = 'none'
  btnEditDatas.style.display = 'initial'

  btnBack.style.display = 'initial'
  btnBack.addEventListener('click', () => {
    location.reload('/boletim-escolar/pages/teacherArea.html')
  })

  btnEditDatas.addEventListener('click', () => {
    let searchStudentDatas = document.querySelector('#searchStudentDatas')
    searchStudentDatas.style.display = 'flex';
    btnEditDatas.setAttribute('disabled', '')
    setTimeout(() => {
      alert('Se caso queira buscar outros alunos, clique no botao de "Buscar outro aluno" e faça uma nova busca')
    }, 1000);
  })
}



