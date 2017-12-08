<?php

namespace controller;

use model\Mensajeria;
use db\DbController;


class MailController{

    public static function all(){   
        return Mensajeria::all();
    }
    

  
}