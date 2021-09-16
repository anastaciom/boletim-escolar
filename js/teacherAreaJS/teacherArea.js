const teacherName = document.querySelector('#teacher-name')
const btnEditDatas = document.querySelector('#btnEditDatas')
const searchStudentName = document.querySelector('#searchStudentName')
const searchClass = document.querySelector('#searchClass')
const btnEditGrades = document.querySelector('#btnEditGrades')
const btnSearchDatas = document.querySelector('#btnSearchDatas')
const btnBack = document.querySelector('#btnBack')
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

              ).catch(() => {
                alert('Não foi possivel alterar a nota')
              })
              alert('Nota editada com sucesso!!')

            })

          })
        })

      })
    }
  });

}
verifyTeacher()

