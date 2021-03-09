var nav1 = document.getElementById("nav1").innerHTML =  
    '<nav class=" nav1 navbar">'+
        '<div class="container col-12">'+
            '<div class="nav">'+
                '<a href="#">'+
                    '<img class="idiomas" src="icons/espana.png" alt="img_espanol" width="25">'+
                '</a>'+
                '<a href="indexenglish.html">'+
                    '<img class="idiomas" src="icons/london.png" alt="img_ingles" width="25">'+
                '</a>'+
            '</div>'+
            '<div class="nav enlaces1">'+
                '<div class="navbar navbar-expand-lg ">'+
                  '<div class="container-fluid">'+
                    '<a class="nav-link nav-item" href="empleo.html">Empleo</a>'+
                    '<a class="nav-link nav-item" href="blog.html">Blog</a>'+
                    '<a id="usuario" class="nav-link nav-item" href="iniciodesesion.html">Inicio de sesión</a>'+
                  '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</nav>';
var nav2 = document.getElementById("nav2").innerHTML = 
    '<nav class="nav2 navbar navbar-expand-lg navbar-dark">'+
        '<div class="container-fluid">'+
            '<a class="navbar-brand" href="index.html">'+
                '<img src="icons/logo.png" alt="logo" width="150" height="65" class="d-inline-block aling-top">'+
            '</a>'+
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
        '</button>'+
        '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="tratamiento.html">Tratamiento</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="conocenos.html">Sobre Nosotros</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="gestionCita.html" >Gestión de citas</a>'+
            '</li>'+
            '<li class="nav-item" id="presupuesto" style="display:none">'+
                '<a class="nav-link" href="presupuesto.html">Presupuesto</a>'+
            '</li>'+
            '</ul>'+
            '<div class="navbar-nav llama">'+
            '<img src="icons/llama.png" alt="llama" width="220" height="100">'+
            '</div>'+
        '</div>'+
        '</div>'+
    '</nav>';
var footer = document.getElementById("footer").innerHTML = 

  '<div class="pie1 d-md-flex flex-row justify-content-around">'+
    '<div class="p-3">'+
      '<h4 class="p-2 text-center">¿Dónde estamos?</h4>'+
      '<p class="text-center"><img src="icons/ubicacion.png" alt="ubicacion" width="30">'+
          'Av. Perdida s/n 11500'+
      '</p>'+
      '<p class="text-center"><img src="icons/telefono.png" alt="telefono" width="30">'+
          'Teléfono: 900 17 65 43'+
      '</p>'+
      '<p class="text-center"><img src="icons/sobre.png" alt="sobre" width="30">'+
          'Email: info@dens.com</p>'+
    '</div>'+
    '<div class="localizacion p-3">'+
      '<div><iframe width="300" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Plaza%20Virgen%20de%20la%20amargura+(Dens)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>'+
    '</div>'+
    '<div class="calendario p-3">'+
      '<img src="icons/calendario.png" alt="calendario" width="160">'+
    '</div>'+
    '<div class="p-3">'+
      '<h4 class="p-2 text-center">Horarios</h4>'+
      '<p class="text-center">'+
          'De Lunes a Viernes: 9:30 - 20:30'+
      '</p>'+
      '<p class="text-center">'+
          'Sábados: 10:00 - 13:30'+
      '</p>'+
    '</div>'+
  '</div>'+
  '<div class="pie2 d-flex flex-row justify-content-center bg-tertiary">'+
    '<div class="d-inline-flex footer-bottom">'+
       ' <a href="#"><img src="icons/whatsapp.png" alt="whatsapp" class="redes_sociales" width="35"></a>'+
        '<a href="#"><img src="icons/facebook.png" alt="facebook" class="redes_sociales" width="35">'+
          'Clinica dental Dens © Copyright 2021'+
      '</a>'+
      '<a href="#"><img src="icons/instagram.png" alt="instagram" class="redes_sociales" width="35"></a>'+
      '<a href="#"><img src="icons/twitter.png" alt="twitter" class="redes_sociales" width="35"></a>'+
    '</div>'+
  '</div>'+
  '</div>';
