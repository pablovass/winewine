<?php


use controller\MailController as PrCnt;
use controller\AuthController;



$RestApi->get("/api/mail",function(){
    return PrCnt::all();
});

?>