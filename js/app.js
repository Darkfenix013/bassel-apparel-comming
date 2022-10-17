const regUserName = /[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
const regUserEmail =/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
const email = document.getElementById("email");
const msgError = document.getElementById('msg-error');
const bnt = document.getElementById('submit');
// capturar el container al cual se le dara la calse activo
const container = document.querySelector(".container-btn");
// capturar el input para limpiarlo luego si es correcto

bnt.addEventListener("click",(e) =>{
    e.preventDefault();
    if(!regUserEmail.test(email.value) || !email.value.trim()){
        container.classList.add('activo');
        msgError.classList.add('activo');
        msgError.textContent = "Por favor ingrese un correo valido";
        
    } else{
        email.value ="";
        msgError.classList.remove('activo');
        container.classList.remove('activo');
        container.classList.add('enviado');
        msgError.classList.add('enviado');
        msgError.textContent = "correo valido";
    }

    

})