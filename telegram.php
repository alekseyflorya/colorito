<?php

/* https://api.telegram.org/bot877582523:AAEuDVeaa6-DDBttqFdcOrxY-UBHfPAjL50/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$phone = $_POST['user_phone'];
$token = "877582523:AAEuDVeaa6-DDBttqFdcOrxY-UBHfPAjL50";
$chat_id = "-1001299782809";
$arr = array(
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you-page.html');
} else {
  echo "Error";
}
?>