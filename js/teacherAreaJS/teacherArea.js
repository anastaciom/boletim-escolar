 const teacherName = document.querySelector('#teacher-name')
// const de input nome do aluno logica quero aluno tal com a turma tal, quando clicar em buscar executa o funcao media()

function verifyTeacher(){

  auth.onAuthStateChanged((user) => {
    if (!user){
      window.location.href ='/boletim-escolar/index.html';
      console.log('Não existe usuario')
    } else {
      console.log('logado')
          let uid= user.uid
          db.collection('Professor').doc(uid).get().then((doc)=>{
            teacherName.textContent = (doc.data().nome)
          }).catch(err=>{
            console.log(err)
          })


          db.collection('Alunos').where('nome','==','Maria').get().then(snap=>{
            snap.forEach(element => {
              media(element)
            });
          }).catch(err=>{
            console.log(err)
          })

          // db.collection('Alunos').where('nome','==','Maria').update({
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
  

