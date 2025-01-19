const SignUpBtn = document.querySelector('.title__signup-btn');
const SignInBtn = document.querySelector('.title__signin-btn');
const box = document.querySelector('.sign-in-up-form')

SignUpBtn.addEventListener('click', function(){
    box.classList.add('active')
});

SignInBtn.addEventListener('click', function(){
    box.classList.remove('active')
});
