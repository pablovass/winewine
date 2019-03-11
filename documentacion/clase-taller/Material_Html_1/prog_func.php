<!doctype html>
<html>
    <body>
        <?php
        function testTime($toTest){
            $startTime =  microtime(true);
            $toTest();
            $endTime = microtime(true);
            return $endTime - $startTime;
        }
        
        function showTime($name,$func){
            $time = testTime($func);
            echo "$name tardó $time seg. <br>";
        }
        

        showTime("factorial 1000", function (){
            $cont = 1;
            for($i = 1 ; $i < 1000 ; $i++){
                $cont *= $i;
            }
            return $cont;
        });
      
        
        ?>
    </body>
</html>