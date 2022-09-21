<?php 

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];

require("mailer/Exception.php");
require("mailer/PHPMailer.php");
require("mailer/SMTP.php");

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'UTF-8';

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'andrimalano3@gmail.com';                 // Наш логин
$mail->Password = 'swdjakzpkwxtcwfc';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('andrimalano3@gmail.com', 'Portfolio');   // От кого письмо 
$mail->addAddress('v_tyapkov@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Текст: ' . $text . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    $massage = 'Ошибка';
} else {
    $massage = 'Данные отправлены';
}

    $response = ['massage' => $massage];

    header('Content-type: application/json');
    echo json_encode($response);

?>