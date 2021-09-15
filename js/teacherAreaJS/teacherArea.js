const teacherName = document.querySelector('#teacher-name')
const btnEditDatas = document.querySelector('#btnEditDatas')
const searchStudentName = document.querySelector('#searchStudentName')
const searchClass = document.querySelector('#searchClass')
const btnEditGrades = document.querySelector('#btnEditGrades')
const editAndSearch = document.querySelector('#editAndSearch input')
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



      document.querySelector('#btnSearchDatas').addEventListener('click', () => {
        db.collection('Alunos').where('nome', '==', searchStudentName.value).where('turma', '==', searchClass.value).onSnapshot(snap => {
          snap.forEach(element => {
            media(element)
            btnEditDatas.style.display = 'initial'
            btnEditDatas.addEventListener('click', () => {
              let searchStudentDatas = document.querySelector('#searchStudentDatas')
              searchStudentDatas.style.display = 'flex';  
              // editAndSearch.setAttribute('disabled', '')
              // searchClass.setAttribute('disabled','')
                          
            })

          
            



            btnEditGrades.addEventListener('click', () => {
              var bimonths = document.querySelector('#bimonths').value
              var searchGrade = document.querySelector('#searchGrade').value
              var gradeStudent = document.querySelector('#gradeStudent')

              db.collection('Alunos').doc(element.id).set(
                {
                  notas: {
                    [bimonths]: {
                      [searchGrade]: Number(gradeStudent.value)
                    }
                  }
                }, { merge: true }

              ).catch(error => {
                alert(error)
              })

              // let btnSaveEdits = document.querySelector('#saveEdits')
              // btnEditDatas.addEventListener('click', () => {
              //   location.reload()
              // })
            })

          })
        })

      })
    }
  });

}
verifyTeacher()

