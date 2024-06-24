function sidebar(){
  const sidebar = document.querySelector('.side-bar')
  sidebar.classList.forEach((value)=>{
    if(value === 'show-side-bar' ){
      sidebar.classList.remove('show-side-bar')
    }else{
      sidebar.classList.add('show-side-bar')
    }
  })
}