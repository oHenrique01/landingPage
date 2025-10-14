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


const mailBtn = document.querySelector('.mail-btn')

const mail = 'henriquelira.sp@gmail.com'

mailBtn.addEventListener('click', async () => {
  const container = document.getElementById('res')

  let msg = container.querySelector('.msg-copy')
  if (!msg) {
    msg = document.createElement('p')
    msg.classList.add('msg-copy')
    container.appendChild(msg)
  }

  try {
    await navigator.clipboard.writeText(mail)
    msg.textContent = 'Email copiado para a área de transferência!'
    msg.classList.add('show')

    clearTimeout(msg._hideTimeout)
    msg._hideTimeout = setTimeout(() => {
      msg.classList.remove('show')
    }, 3000)
  } catch (err) {
    msg.textContent = 'Não foi possível copiar automaticamente. Por favor copie manualmente.'
    msg.classList.add('show')
  }
})






