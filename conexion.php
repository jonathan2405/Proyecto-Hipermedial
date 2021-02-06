<?php
    $conn=new pg_connect("host=localhost dbname= user=proyecto password=jaap2233")
    if($conn->connect_error){
        echo $error->$conn->connect_error;
    }
?>