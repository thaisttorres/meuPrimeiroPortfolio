
function typewriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(()=> elemento.innerHTML += letra, 75 * i );
    });
}
const titulo = document.querySelector('.titulo')
typewriter(titulo);

document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.contato');
    
    function checkPosition() {
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var positionFromTop = item.getBoundingClientRect().top;
    
        if (positionFromTop - window.innerHeight <= 0) {
          item.classList.add('show');
        }
      }
    }
    
    checkPosition();
    
    window.addEventListener('scroll', checkPosition);
  });
  
  var botaoWhatsApp = document.getElementById("botaoWhatsApp");

botaoWhatsApp.addEventListener("click", function() {
    var numeroTelefone = "5511935002005";
    var textoMensagem = "Olá, cheguei aqui através do seu portfólio";
    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(numeroTelefone) + "&text=" + encodeURIComponent(textoMensagem);
    
    window.location.href = url;
});


const hamburguer = document.getElementById('hamburguer');
const navLista = document.querySelector('.nav-lista');

hamburguer.addEventListener('click', () => {
    navLista.classList.toggle('mostrar-menu');
});