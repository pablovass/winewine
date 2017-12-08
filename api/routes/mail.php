<?php

//PrCnt de produt controler 
use controller\MailController as PrCnt;
use controller\AuthController;



$RestApi->get("/api/mail",function(){
    return PrCnt::all();
});

?>
http://localhost/api/filter?category=2
http://localhost/api/filter?category=2&max=1
http://localhost/api/filter?category=2&max=5
http://localhost/api/filter?category=2&max=22
http://localhost/api/mail
http://localhost/panel.html#section2