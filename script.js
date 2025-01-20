const SignUpBtn = document.querySelector('.title__signup-btn');
const SignInBtn = document.querySelector('.title__signin-btn');
const box = document.querySelector('.sign-in-up-form')
const body = document.body

SignUpBtn.addEventListener('click', function(){
    box.classList.add('active')
    body.classList.add('active')
});

SignInBtn.addEventListener('click', function(){
    box.classList.remove('active')
    body.classList.remove('active')
});
