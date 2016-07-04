<?php

 if(isset($_POST['submit'])) {
 
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "yaseen3327095758@gmail.com";
 
    $email_subject = "Thank you for Registration";
     
 
    // validation expected data exists
 
    if(!isset($_POST['fname']) ||
 
        !isset($_POST['lname']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['phone']) ||

        !isset($_POST['age']) ||
 
        !isset($_POST['sex'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $first_name = $_POST['fname']; // required
 
    $last_name = $_POST['lname']; // required
 
    $email_from = $_POST['email']; // required
 
    $telephone = $_POST['phone']; // not required
 
    $age = $_POST['age']; // required

    $sex = $_POST['sex']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
 
  }
 
  if(!preg_match($string_exp,$last_name)) {
 
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
 
  }
 
  if(strlen($sex) < 1) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
 
    $email_message .= "Age: ".clean_string($age)."\n";

    $email_message .= "Gender: ".clean_string($sex)."\n";
 
    
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 echo "<script>window.location=\"index.html\"</script>";

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>