document.getElementById('burger')
    .addEventListener('click', (event) => {
        document.body.querySelector('.content').classList.add('active');
        document.body.querySelector('.nav-left').classList.add('active');
        document.body.querySelector('.bgrd').classList.add('active');
        document.body.style.overflow = 'hidden';
})

document.getElementById('bgrd')
    .addEventListener('click', (event) => {
        document.body.querySelector('.content').classList.remove('active');
        document.body.querySelector('.nav-left').classList.remove('active');
        document.body.querySelector('.bgrd').classList.remove('active');
        document.body.style.overflow = 'visible';
})

if(document.getElementById("click") != null){
    document.getElementById("click")
    .addEventListener('click', (event) => {
        document.body.querySelector('.search-content').classList.toggle('active');
    });
}

if(document.getElementById("more")){
    document.getElementById("more")
    .addEventListener('click', (event) => {
        let cur = document.body.querySelector('.more');
        cur.classList.toggle('active');
        document.body.querySelector('.pinter').classList.toggle('active');
        document.body.querySelector('.in').classList.toggle('active');
    });
}