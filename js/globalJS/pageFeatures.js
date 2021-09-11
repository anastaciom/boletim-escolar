const exit = document.querySelector('#exit')
let darkMode = localStorage.getItem('darkMode')

exit.addEventListener('click', () => {
  var boxMessage = document.querySelector('.message-exit')
  boxMessage.classList.toggle('active');

  if (boxMessage.classList.contains('active')) {
    document.querySelector('.message-exit').addEventListener('click', () => {
      auth.signOut().then(()=>{
        console.log('deslogado')
        window.location.href ='/boletim-escolar/index.html';
      }).catch(err=>{
        console.log(err)
      })
    })
  }
})

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


