<?php
header('Content-Type: application/json');
require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $query = $data['query'] ?? '';

    if ($query) {
        // Simulate response
        echo json_encode(['response' => "You asked: $query"]);
    } else {
        echo json_encode(['error' => 'No query provided']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>
