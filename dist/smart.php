<?php $name=$_POST['name'];$text=$_POST['text'];$email=$_POST['email'];require("mailer/Exception.php");require("mailer/PHPMailer.php");require("mailer/SMTP.php");$mail=new PHPMailer\PHPMailer\PHPMailer();$mail->CharSet='UTF-8';$mail->SMTPDebug=3;$mail->isSMTP();$mail->SMTPOptions=array('ssl'=>array('verify_peer'=>false,'verify_peer_name'=>false,'allow_self_signed'=>true));$mail->Host='smtp.gmail.com';$mail->SMTPAuth=true;$mail->Username='andrimalano3@gmail.com';$mail->Password='swdjakzpkwxtcwfc';$mail->SMTPSecure='ssl';$mail->Port=465;$mail->setFrom('andrimalano3@gmail.com','Portfolio');$mail->addAddress('v_tyapkov@mail.ru');$mail->isHTML(true);$mail->Subject='Данные';$mail->Body='
		Пользователь оставил данные <br> 
	Имя: '.$name.' <br>
	Текст: '.$text.'<br>
	E-mail: '.$email.'';if(!$mail->send()){$massage='Ошибка';}else{$massage='Данные отправлены';}$response=['massage'=>$massage];header('Content-type: application/json');echo json_encode($response); ?>