
function getContact(){
    var template=``;
    template+=`
    <div id="contact" class="container">
    <h3 class="text-center">Contacto</h3>
    <p class="text-center"><em>dejanos tus consultas!</em></p>
  
    <div class="row">
      <div class="col-md-4">
        <p>Fan? Drop a note.</p>
        <p><span class="glyphicon glyphicon-map-marker"></span>Buenos Aires</p>
        <p><span class="glyphicon glyphicon-phone"></span>Telefono: +54 1515151515</p>
        <p><span class="glyphicon glyphicon-envelope"></span>Email: winewine@gmail.com</p>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-sm-6 form-group">
            <input class="form-control" id="name" name="name" placeholder="Nombre" type="text" required>
          </div>
          <div class="col-sm-6 form-group">
            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
          </div>
        </div>
        <textarea class="form-control" id="comments" name="comments" placeholder="Comentario" rows="5"></textarea>
        <br>
        <div class="row">
          <div class="col-md-12 form-group">
            <button class="btn pull-right" type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h3 class="text-center">Nuestros Clientes</h3>  
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#home">Mike</a></li>
      <li><a data-toggle="tab" href="#menu1">Chandler</a></li>
      <li><a data-toggle="tab" href="#menu2">Peter</a></li>
    </ul>
  
    <div class="tab-content">
      <div id="home" class="tab-pane fade in active">
        <h2>Mike Ross, Manager del Four Season</h2>
        <p>Siempre la mejor seleccion de vinos para mi bodega recondado al 100%.</p>
      </div>
      <div id="menu1" class="tab-pane fade">
        <h2>Chandler Bing, Beer recoleta</h2>
        <p>Siempre encuentro los mejores precios y una gran variedad de cervesas tanto importadas como nacionales</p>
      </div>
      <div id="menu2" class="tab-pane fade">
        <h2>Peter Griffin, Restorando Puerto Madero</h2>
        <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
      </div>
    </div>
  </div>
  <script>
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
</script>
  
  `
  
document.getElementById('getContact').innerHTML=template;
}
