<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "natangal@wp.pl"; 
    $subject = "Nowa wiadomość od: $name";
    $headers = "From: $email\r\n";
    $headers = "Content-Type: text/plain; charset=utf-8\r\n";

    $body = "Otrzymano nową wiadomość poprzez formularz kontaktowy:\n\n";
    $body = "Imię: $name\n";
    $body = "Email: $email\n\n";
    $body = "Wiadomość:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Dziękujemy za kontakt! Twoja wiadomość została wysłana.</p>";
    } 
    else 
    {
        echo "<p>Przepraszamy, wystąpił problem z wysyłaniem wiadomości. Spróbuj ponownie później.</p>";
    }
} 
else 
{
    echo "<p>Nieprawidłowe żądanie.</p>";
}
?>
