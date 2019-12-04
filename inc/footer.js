function getFooter(){
    footer=``
    footer =`<a class="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
              <span class="glyphicon glyphicon-chevron-up"></span>
              </a><br><br>
             <p>desarrollado por Pablo Vallejos <a href="https:pablovallejos.com" data-toggle="tooltip" title="visita a pablo vallejos">pablovallejos.com</a></p>
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
  document.getElementById('getFooter').innerHTML=footer;
}
getFooter()
