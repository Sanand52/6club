<?php
session_start();
if (isset($_SERVER['HTTP_ORIGIN'])) {
	// Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
	// you want to allow, and if so:
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 1000');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
		// may also be using PUT, PATCH, HEAD etc
		header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
	}

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
		header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
	}
	exit(0);
}
$amount = $_GET['money'];
$user_id = $_GET['user'];
$orderId = $_GET['order_id'];
$_SESSION['orderkey'] = $orderId;
$_SESSION['user_id'] = $user_id;
// Set the API endpoint URL
$api_url = 'https://pay.99-lottery.online/api/create-order';

// Define the payload data
$data = array(
    'customer_mobile' => $user_id,
    'user_token' => 'ef21a3791e834feb39f1a0d64d0bf888',
    'amount' => $amount,
    'order_id' => $orderId,   //use unique order id
    'redirect_url' => 'https://payment.99-lottery.online/callback.php',
    'remark1' => 'BigDaddyGames',
    'remark2' => 'testremark2',
);

// Initialize cURL session
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data)); // Encode the data as form-urlencoded

// Execute the cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
} else {
    // Parse the JSON response
    $result = json_decode($response, true);

    // Check if the status is true or false
    if ($result && isset($result['status'])) {
        if ($result['status'] === true) {
            // Order was created successfully
            echo 'Order Created Successfully<br>';
            echo 'Order ID: ' . $result['result']['orderId'] . '<br>';
            echo 'Payment URL: ' . $result['result']['payment_url'];
            $pl = $result['result']['payment_url'];
            header("Location: $pl");
        } else {
            // Plan expired
            echo 'Status: ' . $result['status'] . '<br>';
            echo 'Message: ' . $result['message'];
        }
    } else {
        // Invalid response
        echo 'Invalid API response';
    }
}

// Close cURL session
curl_close($ch);
?>