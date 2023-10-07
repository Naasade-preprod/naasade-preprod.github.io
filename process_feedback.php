<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $message = $_POST["message"];

    // Store the feedback data (you can customize this part to your needs)
    $feedbackData = "Name: $name\nMessage: $message\n";

    // Save feedback data to a file (for demonstration purposes)
    $file = 'feedback.txt';
    file_put_contents($file, $feedbackData, FILE_APPEND);

    // Redirect to a thank you page or display a confirmation message
    header("Location: thank_you.html");
    exit();
}
?>
