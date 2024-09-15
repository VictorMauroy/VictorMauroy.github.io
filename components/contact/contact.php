<?php 

    $name = "";
    $email = "";
    $message = "";


    $name_error = "";
    $email_error = "";
    $message_error = "";
    $request_status = "";

    if($_SERVER["REQUEST_METHOD"] == "POST") // Waiting for the form to be completed, then act. 
    {
        // Validation and sanitazing of the NAME input.
        $name = $_POST['nom'];
        $final_name = ""; // If every validation successfully ended, that variable will be set.
        
        $name_length = strlen($name);
        if($name_length === 0) {
            $name_error = "That field cannot be left empty.";
        } 
        else if($name_length < 4) {
            $name_error = "Please, enter a valid name. Yours seems too short.";
        } 
        else if($name_length > 40) {
            $name_error = "Please, enter a valid name. Yours seems too long.";
        } 
        else {
            $no_tag_name = strip_tags($name);
            $final_name = htmlspecialchars($no_tag_name, ENT_QUOTES, 'UTF-8');
            $name_error = "";
        }


        // Validation and sanitazing of the EMAIL input.
        $email = $_POST['email'];
        $final_email = "";

        $email_length = strlen($email);
        if($email_length === 0) {
            $email_error = "That field cannot be left empty.";
        } 
        else if($email_length < 4) {
            $email_error = "Please, enter a valid mail. Yours seems too short.";
        } 
        else if($email_length > 40) {
            $email_error = "Please, enter a valid mail. Yours seems too long.";
        } 
        else {
            $sanitized_email = filter_var($email, FILTER_SANITIZE_EMAIL);
            if(filter_var($sanitized_email, FILTER_VALIDATE_EMAIL)) {
                $final_email = $sanitized_email;
                $email_error = "";
            } else {
                $email_error = "Please, enter a valid email. Unexpected email format.";
            }
        }

        // Validation and sanitazing of the MESSAGE input.
        $message = $_POST['message'];
        $final_message = ""; // If every validation successfully ended, that variable will be set.
        
        $message_length = strlen($message);
        if($message_length === 0) {
            $message_error = "That field cannot be left empty.";
        } 
        else if($message_length < 20) {
            $message_error = "Your message is quite short. Was it an error ?";
        } 
        else if($message_length > 1000) {
            $message_error = "Your message seems too long. Can you reduce its length ?";
        } 
        else {
            $no_tag_message = strip_tags($message);
            $final_message = htmlspecialchars($no_tag_message, ENT_QUOTES, 'UTF-8');
            $message_error = "";
        }

        if(!empty($final_name) && !empty($final_email) && !empty($final_message)) {
            $request_status = "The form has been successfully submitted.";
            
        } else {
            $request_status = "The form hasn't been submitted. There might be some errors with your informations.";
        }

    }
?>

<section id="contact">
    <h2>Say hello</h2>
    <p>Do you want to learn more ? Send me a message by using the following form or my links, I'll quickly answer.</p>
    
    <div id="contact-wrapper">
        <form action="#contact" method="POST" onsubmit="return formValidation()">
            
            <div class="form-element">
                <label for="nom">Name</label>
                <input autocomplete="on" placeholder="Enter your first and last name" name="nom" 
                    type="text" onblur="nameValidation()" value="<?php echo $name; ?>">
                <span id="name-error"></span>
            </div>
            
            <div class="form-element">
                <label for="email">Mail</label>
                <input type="mail" name="email" autocomplete="on" placeholder="Enter your email address" onblur="emailValidation()" value="<?= $email; ?>">
                <span id="email-error"></span>
            </div>
            
            <div class="form-element" id="message-area">
                <label for="message">Message</label>
                <textarea name="message" placeholder="Enter your message here" onblur="messageValidation()" rows="6"><?= $message; ?></textarea>
                <span id="message-error"></span>
            </div>
    
            <input type="submit" id="submit-button" value="Send" />
            <span id="submission-status"><?= $request_status ?></span>
        </form>

        <div id="other-contacts">
            <div id="informations">
                <div class="information-element">
                    <img src="../../assets/logos/colored-logos/gmail-logo_blue.png" alt="email logo" />
                    <span><a class="contact-link" href="mailto:mauroy.victor@gmail.com">mauroy.victor@gmail.com</a></span>
                </div>
                <div class="information-element">
                    <img src="../../assets/logos/colored-logos/Localisation_logo.png" alt="address logo" />
                    <span><a class="contact-link" href="https://www.google.com/maps/place/Amiens/">80000 Amiens</a></span>
                </div>
            </div>
            <div class="links">
                <div class="github-link github-button">
                </div>
                <div class="linkedin-link linkedin-button">
                </div>
            </div>
        </div>
    </div>
</section>