import '../styles/index.css';


const sections = document.querySelectorAll('.section_aboutMe, .section_skills, .section_projects')

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('visible')
  })
})


const mailBtn = document.querySelector('.mail-btn')

const mail = 'henriquelira.sp@gmail.com'

if (!mailBtn) {
  console.warn('Elemento .mail-btn não encontrado. O botão de cópia não será registrado.')
} else {
  mailBtn.addEventListener('click', async () => {
    let container = document.getElementById('res')
    if (!container) {
      console.warn("Container '#res' não encontrado — criando fallback temporário.")
      container = document.createElement('div')
      container.id = 'res'
      document.body.appendChild(container)
    }

    let msg = container.querySelector('.msg-copy')
    if (!msg) {
      msg = document.createElement('p')
      msg.classList.add('msg-copy')
      container.appendChild(msg)
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(mail)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = mail
        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      msg.textContent = 'Email copiado para a área de transferência!'
      msg.classList.add('show')

      clearTimeout(msg._hideTimeout)
      msg._hideTimeout = setTimeout(() => {
        msg.classList.remove('show')
      }, 3000)
    } catch (err) {
      console.error('Erro ao copiar para a área de transferência:', err)
      msg.textContent = 'Não foi possível copiar automaticamente. Por favor copie manualmente.'
      msg.classList.add('show')
    }
  })
}






