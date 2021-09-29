const teacherName = document.querySelector('#teacher-name')
const btnEditDatas = document.querySelector('#btnEditDatas')
const searchStudentName = document.querySelector('#searchStudentName')
const searchClass = document.querySelector('#searchClass')
const btnSearchDatas = document.querySelector('#btnSearchDatas')
const btnBack = document.querySelector('#btnBack')
const btnAddGrade = document.querySelector('#addGrade')
const btnAddAbsences = document.querySelector('#addAbsences')
const btnAddOccurrences = document.querySelector('#addOccurrences')
const addAlert = document.querySelector('#addAlert')
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
            mainStudentInfo(element)
            enablingAndDisablingBtns()
            pageFeatures(element)
            btnAddGrade.addEventListener('click', () => {
              let bimonths = document.querySelector('#bimonths').value
              let searchGrade = document.querySelector('#searchGrade').value
              let gradeStudent = document.querySelector('#gradeStudent').value

              if (gradeStudent != 0) {

                db.collection('Alunos').doc(element.id).set(
                  {
                    notas: {
                      [bimonths]: {
                        [searchGrade]: Number(gradeStudent)
                      }
                    }
                  }, { merge: true }
                ).catch(() => {
                  alert('Não foi possivel alterar a nota')
                })

                addAlert.style.display = 'flex'
                setTimeout(() => {
                  addAlert.style.display = 'none'
                }, 2000);
              } else {
                alert('Você nao digitou a nota')
              }
            })

            btnAddAbsences.addEventListener('click', () => {
              let absencesDate = document.querySelector('#absencesDate').value
              let reasonAbsences = document.querySelector('#reasonAbsences').value

              if (absencesDate && reasonAbsences !== null) {

                db.collection('Alunos').doc(element.id).set(
                  {
                    faltas: firebase.firestore.FieldValue.arrayUnion(
                      {
                        dia: firebase.firestore.Timestamp.fromDate(new Date(absencesDate)),
                        motivo: reasonAbsences,
                      }
                    )
                  }, { merge: true }
                ).catch(() => {
                  alert('Não foi possivel alterar FALTAS')
                })

                addAlert.style.display = 'flex'
                setTimeout(() => {
                  addAlert.style.display = 'none'
                }, 2000);

              } else {
                alert('nao foi possivel,preencha os campos!!')
              }
             

            })





            btnAddOccurrences.addEventListener('click', () => {
              let occurrencesDate = document.querySelector('#occurrencesDate').value
              let reasonOccurrences = document.querySelector('#reasonOccurrences').value

              if (occurrencesDate && reasonOccurrences !== null) {

                db.collection('Alunos').doc(element.id).set(
                  {
                    ocorrencias: firebase.firestore.FieldValue.arrayUnion(
                      {
                        dia: firebase.firestore.Timestamp.fromDate(new Date(occurrencesDate)),
                        motivo: reasonOccurrences,
                      }
                    )
                  }, { merge: true }
                ).catch(() => {
                  alert('Não foi possivel alterar ocorrencias')
                })
               
                addAlert.style.display = 'flex'
                setTimeout(() => {
                  addAlert.style.display = 'none'
                }, 2000);

              } else {
                alert('nao foi possivel,preencha os campos!!')
              }


            })

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
    
  })
}



