const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkBoxPass = document.querySelector('.checkbox-pass');
const passWordInput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');



btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passWordInput.focus(), 500);
    loginTitle.innerHTML = 'Welcome';
    userEmail.innerHTML = emailInput.value;
    
    //console.log('suivant fonctionne');
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTitle.innerHTML = 'Connexion';
    userEmail.innerHTML = 'Connecter vous pour utiliser la plateforme'; 
    emailInput.focus();
    
    //console.log('précédent fonctionne');
};

checkBoxPass.onclick = (e) => {
    if(checkBoxPass.checked) {
        passWordInput.type = 'text';
    }
     else {
        passWordInput.type = 'password';
    }
};