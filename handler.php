<? if (strlen($_POST['phonenumber'])<2 || strlen ($_POST['name'])<1) {echo "false"; exit;}

if ($_POST['lang']=="ru") $text="Наш менеджер свяжется с Вами для уточнения деталей и подтверждения Вашего бронирования";
else $text="Наш менеджер зв'яжеться з Вами для уточнення деталей і підтвердження Вашого бронювання";

?>

<html>
<?=$text;?>




<script type="text/javascript">
setTimeout('location.replace("http://myroom.kiev.ua/")', 30000);
  /*Изменить текущий адрес страницы через 30 секунды (30000 миллисекунд)*/
</script>
</html> 

<?		

$to="info@megapolis.kiev.ua"; // адреса получателя
$to2="shelterforlight@gmail.com"; // адреса 2-го получателя
$mail_subj = "Новый заказ с сайта"; // тема письма

//тело письма
$mail_body=" 

Здравствуйте!<br /> <br /> 

На сайте новая заявка от ".$_POST['name']." \r\n <br /> 
\r\n <br />";  
if (strlen($_POST['phonenumber'])>0) $mail_body.="Телефон: ".$_POST['phonenumber']." <br /> \r\n";
if (strlen($_POST['messages'])>0) $mail_body.="Комментарий: ".$_POST['messages']." <br /> \r\n";
if (strlen($_POST['date1'])>0) $mail_body.="Дата заезда: ".$_POST['date1']." <br />  \r\n";
if (strlen($_POST['date2'])>0) $mail_body.="Дата выезда: ".$_POST['date2']." <br />  \r\n";
if (strlen($_POST['hostel'])>0) $mail_body.="Хостел по адресу: ".$_POST['hostel']." \r\n";



smtpmail ($to, $mail_subj, $mail_body);
smtpmail ($to2, $mail_subj, $mail_body);


function smtpmail($to, $subject, $body, $from="softcommail@ukr.net") {
	
	global $phpmailer;
if ( !is_object( $phpmailer ) || !is_a( $phpmailer, 'PHPMailer' ) ) { // проверяем, существует ли объект $phpmailer и принадлежит ли он классу PHPMailer
    // если нет, то подключаем необходимые файлы с классами и создаём новый объект
    require_once $_SERVER["DOCUMENT_ROOT"].'phpm/class.phpmailer.php';
    require_once $_SERVER["DOCUMENT_ROOT"].'phpm/class.smtp.php';
    $phpmailer = new PHPMailer( true );
}
$phpmailer->ClearAttachments(); // если в объекте уже содержатся вложения, очищаем их
$phpmailer->ClearCustomHeaders(); // то же самое касается заголовков письма
$phpmailer->ClearReplyTos(); 
$phpmailer->From = $from; // от кого, Email
$phpmailer->FromName = 'SOFTCOM eMail'; // от кого, Имя
$phpmailer->Subject = $subject; // тема
$phpmailer->SingleTo = true; // это означает, что если получателей несколько, то отображаться будет всё равно только один (если непонятно, спросите, я вам подробно объясню в комментариях)
$phpmailer->ContentType = 'text/html'; // тип содержимого письма
$phpmailer->IsHTML( true );
$phpmailer->CharSet = 'utf-8'; // кодировка письма
$phpmailer->ClearAllRecipients(); // очищаем всех получателей
$phpmailer->AddAddress( $to); // добавляем новый адрес получателя
//$phpmailer->AddAddress( 'alex.v.palkin@gmail.com'); // добавляем новый адрес получателя
$phpmailer->Body = $body;
//$phpmailer->AddAttachment(getcwd() . '/plugins/' . $plugin_name . '.zip', $plugin_name . '.zip'); // добавляем вложение
$phpmailer->Send(); // отправка письма

 }
 
 ?>