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

const sections = document.querySelectorAll('.section_aboutMe, .section_skills, .section_projects')

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('visible')
  })
})


const form = document.querySelector('#contact');

form.addEventListener('submit', (e) => {
    e.preventDefault()

  const name = form.querySelector('#name')
  const email = form.querySelector('#email')
  const message = form.querySelector('#message')

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.')
    return;
  }

  alert('Mensagem enviada com sucesso!')

  name.value = ''
  email.value = ''
  message.value = ''
})






