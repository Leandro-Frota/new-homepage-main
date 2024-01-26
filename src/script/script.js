let iconBurguer = document.getElementById('iconBurguer')
let iconBurguer_close = document.getElementById('iconBurguer_close')
let nav_Container = document.getElementById('nav_Container')

iconBurguer.addEventListener('click',(e)=>{
    e.preventDefault();
    nav_Container.classList.toggle('open')
})

iconBurguer_close.addEventListener('click',(e)=>{
    e.preventDefault
    nav_Container.classList.toggle('open')
})
