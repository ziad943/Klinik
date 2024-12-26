document.addEventListener('DOMContentLoaded' , function(){
    var topBtn = document.getElementById('topBtn');
    window.onscroll = function(){

        if(document.documentElement.scrollTop > 100){
            topBtn.style.display = 'block'
        }
        else{
            topBtn.style.display = 'none'
        }
    }
    topBtn.addEventListener('click' , function(){
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    })
})


function validationform(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var date = document.getElementById('date').value;
    var date2 = document.getElementById('date2').value;
    var area = document.getElementById('area').value;

    if(name === '' || email === '' || number === '' || date === '' || date2 === '' || area === ''){
        window.alert('Please Field all Fields')
        return false
    }
    if(email.indexof('@') == -1 || email.indexof('.') == -1){
        alert("Please enter Validation email")
        return false
    }
}