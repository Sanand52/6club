<?php
// Set the timezone to Asia/Kolkata
date_default_timezone_set("Asia/Kolkata");
$url = $_SERVER["SERVER_NAME"];
$servername = "localhost"; // replace with your server name
$username = "root"; // replace with your username
$password = ""; // replace with your password
$dbname = "goldwin"; // replace with your database name

$con = mysqli_connect($servername, $username, $password, $dbname);

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

error_reporting(0);

require_once('checksum.php');

$verifySignature = '';
$array = array();
$paramList = array();

$secret = '6ahVzyZRMA'; // Your Secret Key.
$status = $_POST['status']; // Payment Status Only, Not Txn Status.
$message = $_POST['message']; // Txn Message.
$cust_Mobile = $_POST['cust_Mobile']; // Txn Message.
$cust_Email = $_POST['cust_Email']; // Txn Message.
$hash = $_POST['hash']; // Encrypted Hash / Generated Only SUCCESS Status.
$checksum = $_POST['checksum']; // Checksum verifySignature / Generated Only SUCCESS Status.

// Payment Status.
if ($status == "SUCCESS") {
    $paramList = hash_decrypt($hash, $secret);
    $verifySignature = RechPayChecksum::verifySignature($paramList, $secret, $checksum);

    // Checksum verify.
    if ($verifySignature) {
        $array = json_decode($paramList);

        // Store the payment response in variables
        $paymentStatus = $status;
        $paymentMessage = $message;
        $paymentHash = $hash;
        $paymentChecksum = $checksum;
        $customerMobile = $cust_Mobile;      //cust mobile SAVE
        $customerEmail = $cust_Email;        //cust email save
        $senderNote = $array->sender_note;   // Store the sender note
        $amount = $array->txnAmount;         // Store the transaction amount
        $orderId = $array->orderId;          // Store the orderId
        $txnStatus = $array->txnStatus;      // Store the transaction status
        $resultInfo = $array->resultInfo;    // Store the result information
        $txnId = $array->txnId;              // Store the transaction ID
        $bankTxnId = $array->bankTxnId;      // Store the bank transaction ID
        $paymentMode = $array->paymentMode;  // Store the payment mode
        $txnDate = $array->txnDate;          // Store the transaction date
        $utr = $array->utr;                  // Store the UTR
        $senderVpa = $array->sender_vpa;     // Store the sender VPA
        $payeeVpa = $array->payee_vpa;       // Store the payee VPA

        // Payment Response
        echo "<pre>";
        echo "Payment Status: $paymentStatus<br>";
        echo "Payment Message: $paymentMessage<br>";
        echo "Customer Mobile: $customerMobile<br>";
        echo "Customer Email: $customerEmail<br>";
        echo "Payment hash: $paymentHash<br>";
        echo "Payment Checksum: $paymentChecksum<br>";
        echo "Order ID: $orderId<hr>";
        echo "Sender Note: $senderNote<hr>";
        echo "Transaction Amount: $amount<hr>";
        echo "Transaction Status: $txnStatus<hr>";
        echo "Result Info: $resultInfo<hr>";
        echo "Transaction ID: $txnId<hr>";
        echo "Bank Transaction ID: $bankTxnId<hr>";
        echo "Payment Mode: $paymentMode<hr>";
        echo "Transaction Date: $txnDate<hr>";
        echo "UTR: $utr<hr>";
        echo "Sender VPA: $senderVpa<hr>";
        echo "Payee VPA: $payeeVpa<hr>";
        $today = date("Y-m-d H:i:s");
        
    $insertQuery = "INSERT INTO recharge (username, rand, recharge, status, created_at, upi, utr) VALUES ('".$senderNote."','".$orderId."','".$amount."','Success','".$today."','".$senderVpa."','".$utr."')";
$insertResult = mysqli_query($con, $insertQuery);

            
            
// Update user's balance in the database
$updateQuery = "UPDATE users SET balance = balance + $amount WHERE username = '$senderNote'";
if (mysqli_query($con, $updateQuery)) {
    
    header("Location: https://$url/");
exit;
    
} else {
    echo "Error updating user balance: " . mysqli_error($con);
}
        
    } else {
        // Payment Response
        echo "<pre>";
        echo "Payment Status: $status<br>";
        echo "Payment Message: $message<br>";
        echo '<h2><b style="color:red">Checksum Invalid!</b></h2>';
    }
} else {
    // Payment Response
    echo "<pre>";
    echo "Payment Status: $status<br>";
    echo "Payment Message: $message<br>";
    echo '<h2><b style="color:red">Payment Failed!</b></h2>';
}
?>
