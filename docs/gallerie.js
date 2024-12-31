window.addEventListener('load', () => {
    const img = document.querySelectorAll('.image-list li');
    const inner = document.querySelector('.inner-img');
    const over = document.querySelector('.over-img');
    img.forEach(function(val){
        val.addEventListener('click',kakudai);
    }); 
    function kakudai(e){
        over.style.display = 'flex';
        inner.setAttribute('src',e.target.getAttribute('src'));
    }
    over.addEventListener('click',modosu);
    function modosu(){
        over.style.display = 'none';
    }
});