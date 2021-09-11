function verifyTeacher(){

  auth.onAuthStateChanged((user) => {
    if (!user){
      window.location.href ='/boletim-escolar/index.html';
      console.log('Não existe usuario')
    } else {
      console.log('logado')
          let uid= user.uid

          db.collection('Alunos').where('nome','==','Anastacio').get().then(snap=>{
            snap.forEach(element => {
              console.log(element.data().nome)
            });
          }).catch(err=>{
            console.log(err)
          })
    }
  }); 
    
  }
  
  verifyTeacher()
  

