<?php
// db.php
// MySQL Connection Details
$host = 'localhost';
$dbname = 'rsk0_08';
$username = 'rsk0_08';
$password = '123456';

try {
    // Create PDO connection for MySQL
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    
    // Set errormode to exceptions
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Disable emulated prepares for better security
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

} catch(PDOException $e) {
    // Logging fixed connection error message privately or showing a generic one
    // For debugging, we'll keep the error message
    die("Connection failed: " . $e->getMessage());
}
?>
