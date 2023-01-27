const btnShare = document.querySelector('.btn-open')
const form = document.querySelector('.fact-form')
btnShare.addEventListener('click', function(){
    if(form.classList.contains('hidden')){
        form.classList.remove('hidden')
        btnShare.textContent = 'close'
    }else {
        form.classList.add('hidden')
        btnShare.textContent = 'Share a fact'
    }
})