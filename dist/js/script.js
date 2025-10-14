"use strict";

var typed = new Typed("#typed", {
  strings: ["Desenvolvedor front-end, estudante e apaixonado por tecnologia, ciência e aprendizado."],
  typeSpeed: 30,
  backSpeed: 0,
  smartBackspace: false,
  loop: false,
  showCursor: false
});
var sections = document.querySelectorAll('.section_aboutMe, .section_skills, .section_projects');
window.addEventListener('scroll', function () {
  sections.forEach(function (sec) {
    var top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('visible');
  });
});
var mailBtn = document.querySelector('.mail-btn');
var EMAIL = 'henriquelira.sp@gmail.com';

if (mailBtn) {
  mailBtn.addEventListener('click', function () {
    var container = document.querySelector('.res');
    if (!container) return;

    var msg = container.querySelector('.msg-copy');
    if (!msg) {
      msg = document.createElement('p');
      msg.classList.add('msg-copy');
      container.appendChild(msg);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(function () {
        msg.textContent = 'Email copiado para a área de transferência!';
        msg.classList.add('show');
        clearTimeout(msg._hideTimeout);
        msg._hideTimeout = setTimeout(function () {
          msg.classList.remove('show');
        }, 3000);
      }, function () {
        msg.textContent = 'Não foi possível copiar automaticamente. Por favor copie manualmente.';
        msg.classList.add('show');
      });
    } else {
      msg.textContent = 'Seu navegador não suporta cópia automática. Copie manualmente.';
      msg.classList.add('show');
    }
  });
}