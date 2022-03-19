<?php

function reCaptcha($recaptcha){
  $secret = "6Le_VVIaAAAAAOz49ZGNyjokuKrL_kGz4AGL2lbP";
  $ip = $_SERVER['REMOTE_ADDR'];

  $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
  $url = "https://www.google.com/recaptcha/api/siteverify";
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
  $data = curl_exec($ch);
  curl_close($ch);

  return json_decode($data, true);
}


// $recaptcha = $_POST['g-recaptcha-response'];
// $res = reCaptcha($recaptcha);

// if(!$res['success']){ 
//   // Error
//   echo "ReCaptcha Validation Failed."; die();
// }

// Replace contact@example.com with your real receiving email address
$receiving_email_address = 'info@janajayacoconut.com';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor2/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['name','email'])->areRequired()->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);


$pp->sendEmailTo($receiving_email_address); // ← Your email here

$response =  $pp->process($_POST);

 echo $response;

?>
