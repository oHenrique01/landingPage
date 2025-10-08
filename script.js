let typed = new Typed("#typed", {
    strings: [
        "Desenvolvedor front-end, estudante e apaixonado por tecnologia, ciência e aprendizado.",

    ],

    typeSpeed: 30,
    backSpeed: 0,
    smartBackspace: false,
    loop: false,
    showCursor: false
})

const formName = document.getElementById('name')
const formEmail = document.getElementById('email')

const formBtn = document.getElementById('form-btn').addEventListener('click', () => {
    alert('Mensagem enviada!')

    formName.value = ''
    formEmail.value = ''
    
})



