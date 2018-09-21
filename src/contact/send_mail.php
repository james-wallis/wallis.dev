<?php
require 'PHPMailer/PHPMailerAutoload.php';


$host = 'smtp.mail.yahoo.com';

$username = 'jamesemwallis@yahoo.co.uk';

$password = '';

$send = false;

// Subject
$subject = addslashes(strip_tags($_POST['subject']));

// Name
$name = addslashes(strip_tags($_POST['name']));

// Email
$email = addslashes(strip_tags($_POST['email']));

// Message
$message = addslashes(strip_tags($_POST['message']));

$htmlmessage = <<<MESSAGE
    <html>
    	<head>
            <title>$subject</title>
    	</head>

        <body>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong> $message</p>
            <p><strong>Services:</strong> $services</p>
            <p><strong>Project Class:</strong> $project_class</p>
        </body>
    </html>
MESSAGE;

/*//Create a new PHPMailer instance
$mail = new PHPMailer;
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom('ameira@example.com', 'Ameira Yanni');
//Set an alternative reply-to address
//$mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('jamesemwallis@yahoo.co.uk', 'James Wallis');
//Set the subject line
$mail->Subject = 'PHPMailer sendmail test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
*/

$mail = new PHPMailer;
$mail->isSMTP();
// $mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = TRUE;
$mail->Host = $host;
$mail->Port = '465';

$mail->Username = $username;
$mail->Password = $password;

$mail->From = $email;
$mail->FromName = $name;

// Add receive email address
$mail->addAddress($username);

$mail->isHTML(true);

$mail->Subject = $subject;

$mail->Body    = $htmlmessage;

// Send the message
if ( $mail->send())
{
    $send = true;
}

echo json_encode($send);
