
<?php
require_once "conn.php";
session_start();

     $user=$_GET['user'];
	 $key = "54f17f-066f6a-8061cf-0d165d-ace3c4"; // you can get your key from https://codekina.store/user/api_credentials
	 $clienttransid=$_GET['client_txn_id'];
	 $content = json_encode(array(
	 	"key"=> $key,
        "client_txn_id"=> $clienttransid,
        "txn_date"=> date("d-m-Y")
	 ));
	 $url = "https://payu.infinity-mall.site/api/check_order_status";
	 $curl = curl_init($url);
	 curl_setopt($curl, CURLOPT_HEADER, false);
	 curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	 curl_setopt($curl, CURLOPT_HTTPHEADER,
	 		array("Content-type: application/json"));
	 curl_setopt($curl, CURLOPT_POST, true);
	 curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
	 $json_response = curl_exec($curl);
	 $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
	 if ( $status != 200 ) {
	 	// You can handle Error yourself.
	 	die("Error: call to URL $url failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
	 }
	 curl_close($curl);
	 $response = json_decode($json_response, true);
	 if($response["status"] == true){
	  $data3=array_values($response['data']);
      $status=$data3[9];
      $am=$data3[2];
      
      if($status=="success"){
          $sql = "UPDATE recharge SET status='Success' WHERE utr=$clienttransid";
       mysqli_query($conn, $sql);
       $sql1 = "UPDATE users SET balance=balance+$am WHERE username=$user";
       mysqli_query($conn, $sql1);
          	header("Location: sucess.php");
      }else{
          	 	 $sql = "UPDATE recharge SET status='fail' WHERE utr=$clienttransid";
       mysqli_query($conn, $sql);
          	header("Location: fail.php");
      }
	 	die();
	 
	 }else{

	 		header("Location: transnotfound.php");
	 		die();
	 }

?>
