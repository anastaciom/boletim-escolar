function verifyStudent(){

    auth.onAuthStateChanged((user) => {
      if (!user){
        window.location.href ='/boletim-escolar/index.html';
        console.log('Não existe usuario')
      } else {
        console.log('logado')
            let uid= user.uid
  
            db.collection('Alunos').doc(uid).get().then((doc=>{
              media(doc)
              absencesData(doc)
              occurrencesData(doc)
            })).catch(err=>{
              console.log(err)
            })
      }
    }); 
      
    }
    
    verifyStudent()
    
  
  
  
  