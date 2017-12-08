

function get_footer(){
 let footer=''
 
 footer+=`
        

 <!-- FOOTER -->                
 
            
 <div class="wrapperDark">
 
     <div class="container divider6">

         <div class="col-md-12">

             <div class="divider solid">

             </div><!-- /.divider -->

         </div><!-- /.col -->

     </div><!-- /.container -->
 
 </div>    
     

     <div class="container">  
         <div class="row">
             <div class="col-md-12">
                 <!-- botonera -->
                 <strong style="color: #b4afaf;" >Wine Wine</strong>
                 <p style="color: #dfd7d7;">Por consultas y reclamos, por favor llamanos al 0810-777-9679 (Av. Libertador nº 500, “Local Wine Wine” CABA) o podés contactarte con defensa del consumidor. Para mayor información sobre nuestros productos y cómo realizar una compra, escribinos a callcenter@winery.com.ar o comunicate telefónicamente al 0810 777 9679 (Av. Libertador nº 500, “Local Wine Wine” CABA). Razón social de Wine Wine: DAYCHE S.A | CUIT: 30-70265976-7 | Domicilio legal: Av. Belgrano 300 CABA | Atención al cliente: Av. del Libertador 500 CABA (local “Wine Wine ”) | Teléfono Administrativo: 3220-4200. Para propuestas comerciales envianos un mail a comerciales@winewine.com.ar. Prohibida la venta de alcohol a menores de 18 años.
                 ACCESO CLIENTES
                  </p></div>  
         </div>
     </div>    
 

     `
     
      
         document.getElementById('footer').innerHTML=footer;
  
  }
  
  get_footer()
/*
<ul class="list-inline footer-menu text-right">
                     <li class="pull-left" style="color: #b4afaf; ">2017 © Pablo Vass</li>
                     <li><a href="">Home</a></li>
                     <li><a href="#">Open Account</a></li>
                     <li><a href="#">Login</a></li>
                     <li><a href="#">Terms</a></li>
                     <li><a href="#">FAQ</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Affiliate</a></li>
                 </ul>


*/