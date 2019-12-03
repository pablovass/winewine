function mostrarHome(){
    
    home += `
    <!-------------------------------------------------------------------------------------------------->
<div id="myCarousel" class="carousel slide" data-ride="carousel">
   <!-- Indicators -->
   <ol class="carousel-indicators">
     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
     <li data-target="#myCarousel" data-slide-to="1"></li>
     <li data-target="#myCarousel" data-slide-to="2"></li>
   </ol>

   <!-- Wrapper for slides -->
   <div class="carousel-inner" role="listbox">
     <div class="item active">
       <img src="/images/carusel/carusel_3.jpg" alt="New York" width="1200" height="700">
       <div class="carousel-caption">
         <h3>hacemos cata</h3>
         <p>no solo vandemos sino que una vez por semana nos juntamos a degustar ricos vinos.</p>
       </div>      
     </div>

     <div class="item">
       <img src="/images/carusel/carusel_1.jpg" alt="Chicago" width="1200" height="700">
       <div class="carousel-caption">
         <h3>La mejor cristaleria</h3>
         <p>No solo se trata de bebidas sino en donde la servimos</p>
       </div>      
     </div>
   
     <div class="item">
       <img src="/images/carusel/carusel_2.jpg" alt="Los Angeles" width="1200" height="700">
       <div class="carousel-caption">
         <h3>Las mejores cosechas</h3>
         <p>tenemos desde los vinos mas conocidos hasta las bebidas mas esclusivas</p>
       </div>      
     </div>
   </div>

   <!-- Left and right controls -->
   <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
     <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
     <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
   </a>
</div>

              `;  

 document.write(home);
 
};
mostrarHome();