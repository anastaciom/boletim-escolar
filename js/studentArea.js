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
  



let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = ()=>{
  document.body.classList.add('darkMode')
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = ()=>{
  document.body.classList.remove('darkMode')
  localStorage.setItem('darkMode', null)
}
 
 if(darkMode === 'enabled'){
   enableDarkMode()
 }

document.querySelector('label').addEventListener('click',()=>{

darkMode = localStorage.getItem('darkMode')
  if(darkMode !== 'enabled'){
    enableDarkMode()
  }else{
    disableDarkMode()

  }
})