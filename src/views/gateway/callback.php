<?php
session_start();
$orderkey = $_SESSION['orderkey'];
$user_id = $_SESSION['user_id'];
$servername = "localhost";
$username = "goa2";
$password = "goa2";
$dbname = "goa2";
$con = mysqli_connect($servername, $username, $password, $dbname);

// API endpoint URL
$url = "https://pay.99-lottery.online/api/check-order-status";

// POST data
$postData = array(
    "user_token" => "ef21a3791e834feb39f1a0d64d0bf888",
    'order_id' => $orderkey
);

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));

// Execute cURL session and get the response
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo "cURL Error: " . curl_error($ch);
    exit;
}

// Close cURL session
curl_close($ch);

// Decode the JSON response
$responseData = json_decode($response, true);

// Check if the API call was successful
if ($responseData["status"] === "COMPLETED") {
    // API call was successful
    // Access the response data as needed
    $txnStatus = $responseData["result"]["txnStatus"];
    $orderId = $responseData["result"]["orderId"];
    $status = $responseData["result"]["status"];
    $amount = $responseData["result"]["amount"];
    $curr_date_time = (int) (microtime(true) * 1000);
    $utr = $responseData["result"]["utr"];
    $remark1 = $responseData["result"]["remark1"];
    $remark2 = $responseData["result"]["remark2"];
    echo "<center><h1><br><br><br><b style='color:red'>ERROR!</b></h1></center>";
    /*echo "Transaction Status: $txnStatus<br>";
    echo "Order ID: $orderId<br>";
    echo "Status: $status<br>";
    echo "Amount: $amount<br>";
    echo "Current Date & Time: $curr_date_time<br>";
    echo "Customer Mobile: $user_id<br>";
    echo "UTR: $utr<br>";
    echo "Remark1: $remark1<br>";
    echo "Remark2: $remark2<br>";*/

$updateQuery1 = "UPDATE recharge SET utr = $utr, status = '1', time = $curr_date_time WHERE id_order = '$orderId'";
if (mysqli_query($con, $updateQuery1)) {
$updateQuery2 = "UPDATE users SET money = money + $amount, total_money = total_money + $amount WHERE phone = '$user_id'";
if (mysqli_query($con, $updateQuery2)) {
header("Location: https://bdg7.com/wallet/rechargerecord");
exit;
} else {
    echo "Error updating user balance: " . mysqli_error($con);
}
}
} else {
    // API call failed
    $errorMessage = $responseData["message"];
    echo "API Error: $errorMessage";
    // Payment Response
    //header("refresh: 5; url=https://bdg7.com");
    echo "<pre>";
    echo "Payment Status: $status<br>";
    echo "Txn. Status: $txnStatus<br>";
    echo '<h2><b style="color:red">Payment Failed!</b></h2>';
    echo "<center><h1><br><br><br>Redirecting You Back To The Homepage In 5 Seconds...</h1></center>";
}
?>
