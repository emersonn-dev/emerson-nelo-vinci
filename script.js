// ==================================================
// JavaScript do site VINCI
// Cada bloco abaixo cuida de uma coisa da página.
// O "if" antes de cada bloco evita erro nas páginas
// que não têm aquele elemento.
// ==================================================


// 1) MENU DO CELULAR (botão ☰)
const botaoMenu = document.getElementById('botaoMenu')
const menu = document.getElementById('menu')

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })
}


// 2) MEGAMENU "VEÍCULOS"
const botaoVeiculos = document.getElementById('botaoVeiculos')
const megamenu = document.getElementById('megamenu')

if (botaoVeiculos && megamenu) {

  // Clicou em "Veículos": abre ou fecha
  botaoVeiculos.addEventListener('click', function (evento) {
    evento.stopPropagation() 
    megamenu.classList.toggle('hidden')
  })

  // Clicou fora do megamenu: fecha
  document.addEventListener('click', function (evento) {
    if (!megamenu.contains(evento.target)) {
      megamenu.classList.add('hidden')
    }
  })

  // Apertou Esc: fecha
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
      megamenu.classList.add('hidden')
    }
  })
}

const formulario = document.getElementById('testDriveForm')
const mensagem = document.getElementById('mensagemSucesso')

if (formulario) {

  
  const campoData = document.getElementById('data')
  const hoje = new Date().toISOString().split('T')[0] // ex.: 2026-10-26
  campoData.min = hoje

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault() // não recarrega a página

    const nome = document.getElementById('nome').value
    mensagem.textContent = 'Test Drive agendado com sucesso, ' + nome + '! Entraremos em contato.'
    mensagem.classList.remove('hidden')

    formulario.reset()
  })
}