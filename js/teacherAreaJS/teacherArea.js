const teacherName = document.querySelector('#teacher-name')

const btnEditDatas = document.querySelector('#btnEditDatas')
const searchStudentName = document.querySelector('#searchStudentName')
const searchClass = document.querySelector('#searchClass')

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
            btnEditDatas.style.display ='initial'
            btnEditDatas.addEventListener('click', ()=>{
              let searchStudentDatas = document.querySelector('#searchStudentDatas')
              searchStudentDatas.style.display ='flex'
            })
            //botao editar perfil ficara visivel ficara visivel

            //quando o botao for visivel ira liberar tudo de alterar, executado uma funcao que tera todos o botoes o que eles irao alterar

            console.log(element.data().nome)





          })
        })

      })

      // aqui ficara as opcoes de updates

      // db.collection('Alunos').onSnapshot().update({
      //   turma: '1A'
      // }).then(()=>{
      //   console.log('ok')
      // }).catch(err=>{
      //   console.log(err)
      // })


    }
  });

}
verifyTeacher()

