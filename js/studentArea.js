const exit = document.querySelector('#exit')


exit.addEventListener('click', () => {
  var boxMessage = document.querySelector('.message-exit')
  boxMessage.classList.toggle('active');

  if (boxMessage.classList.contains('active')) {
    document.querySelector('.message-exit').addEventListener('click', () => {
      auth.signOut().then(()=>{
        console.log('deslogado')
        window.location.href ='/boletim-escolar/pages/index.html';
      }).catch(err=>{
        console.log(err)
      })
     
    })
  }
})


function verifyUser(){

  auth.onAuthStateChanged((user) => {
    if (!user){
      window.location.href ='/boletim-escolar/pages/index.html';
      console.log('Não exite usuario')
    } else {
      console.log('logado')
          let uid= user.uid

          db.collection('Alunos').doc(uid).get().then((doc=>{
            media(doc)
            
          })).catch(err=>{
            console.log(err)
          })
    }
  }); 
    
  }
  
  verifyUser()
  

