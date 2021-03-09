var nav1 = document.getElementById("nav1").innerHTML =  
    '<nav class=" nav1 navbar">'+
        '<div class="container col-12">'+
            '<div class="nav">'+
                '<a href="nav-link nav-item active">'+
                '<a href="index.html">'+
                    '<img class="idiomas" src="icons/espana.png" alt="img_espanol" width="30">'+
                    '</a>'+
                '</a>'+
                '<a href="nav-link nav-item">'+
                    '<img class="idiomas" src="icons/london.png" alt="img_ingles" width="30">'+
                '</a>'+
            '</div>'+
            '<div class="nav enlaces1">'+
                '<div class="navbar navbar-expand-lg ">'+
                  '<div class="container-fluid">'+
                    '<a class="nav-link nav-item" href="empleo.html">Job</a>'+
                    '<a class="nav-link nav-item" href="blog.html">Blog</a>'+
                    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">'+
                      '<span class="navbar-toggler-icon"></span>'+
                    '</button>'+
                    '<div class="collapse navbar-collapse" id="dropdown">'+
                      '<ul class="navbar-nav">'+
                        '<li class="nav-item dropdown">'+
                          '<a class="nav-link dropdown-toggle" href="#" id="iniciosesion login-form-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">'+
                            '<span id = "usuario">Log in</span>'+
                          '</a>'+
                          '<div class="dropdown-menu dropdown-menu-left dropdown-menu-right" aria-labelledby="iniciosesion">'+
                            '<form class="px-4 py-3" id="login-form" role="form" style="display: block;">'+
                              '<div class="mb-3">'+
                                '<label for="email" class="form-label">User</label>'+
                                '<input type="email" class="form-control" id="email" placeholder="email@example.com">'+
                              '</div>'+
                              '<div class="mb-3">'+
                                '<label for="password" class="form-label">Password</label>'+
                                '<input type="password" class="form-control" id="password" placeholder="Password">'+
                              '</div>'+
                              '<div class="mb-3">'+
                                '<a class="dropdown-item" href="#">Remember password</a>'+
                              '</div>'+
                            '</form>'+
                            '<button type="button" id="botonInicio" onclick="iniciosesion()" class="btn btn-primary">Log in</button>'+
                            '<button type="button" id="botonCerrar" onclick="cerrarsesion()" class="btn btn-primary" style="display: none;">Close</button>'+

                            '<hr>'+
                            
                            '<a class="dropdown-item" id="register-form-link" href="registro/registro.html">Dont have account yet?</a>'+
                          '</div>'+
                        '</li>'+
                      '</ul>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</nav>';
var nav2 = document.getElementById("nav2").innerHTML = 
    '<nav class="nav2 navbar navbar-expand-lg navbar-dark">'+
        '<div class="container-fluid">'+
            '<a class="navbar-brand" href="index.html">'+
                '<img src="icons/logoenglish.png" alt="logo" width="160" height="70" class="d-inline-block aling-top">'+
            '</a>'+
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
        '</button>'+
        '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="tratamiento.html">Treatment</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="conocenos.html">About us</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="nav-link" href="gestionCita.html" >Appointment Management</a>'+
            '</li>'+
            '<li class="nav-item" id="presupuesto"  style="display:none">'+
                '<a class="nav-link" href="presupuesto.html">Presupuesto</a>'+
            '</li>'+
            '</ul>'+
            '<div class="navbar-nav llama">'+
            '<img src="icons/llamaenglish.png" alt="llama" width="180" height="80">'+
            '</div>'+
        '</div>'+
        '</div>'+
    '</nav>';
var footer = document.getElementById("footer").innerHTML = 
  '<div class="pie1 d-md-flex flex-row justify-content-around">'+
    '<div class="p-3">'+
      '<h4 class="p-2 text-center">Location</h4>'+
      '<p class="text-center"><img src="icons/ubicacion.png" alt="ubicacion" width="30">'+
          'Av. Perdida s/n 11500'+
      '</p>'+
      '<p class="text-center"><img src="icons/telefono.png" alt="telefono" width="30">'+
          'Phone number: 900 17 65 43'+
      '</p>'+
      '<p class="text-center"><img src="icons/sobre.png" alt="sobre" width="30">'+
          'Email: info@dens.com</p>'+
    '</div>'+
    '<div class="localizacion p-3">'+
      '<img src="icons/localizacion.png" alt="localizacion">'+
    '</div>'+
    '<div class="calendario p-3">'+
      '<img src="icons/calendario.png" alt="calendario" width="160">'+
    '</div>'+
    '<div class="p-3">'+
      '<h4 class="p-2 text-center">Schedule</h4>'+
      '<p class="text-center">'+
          'Monday to Friday: 9:30 - 20:30'+
      '</p>'+
      '<p class="text-center">'+
          'Sunday: 10:00 - 13:30'+
      '</p>'+
    '</div>'+
  '</div>'+
  '<div class="pie2 d-flex flex-row justify-content-center bg-tertiary">'+
    '<div class="d-inline-flex footer-bottom">'+
       ' <a href="#"><img src="icons/whatsapp.png" alt="whatsapp" class="redes_sociales" width="35"></a>'+
        '<a href="#"><img src="icons/facebook.png" alt="facebook" class="redes_sociales" width="35">'+
          'Dental clinic Dens © Copyright 2021'+
      '</a>'+
      '<a href="#"><img src="icons/instagram.png" alt="instagram" class="redes_sociales" width="35"></a>'+
      '<a href="#"><img src="icons/twitter.png" alt="twitter" class="redes_sociales" width="35"></a>'+
    '</div>'+
  '</div>'+
  '</div>';