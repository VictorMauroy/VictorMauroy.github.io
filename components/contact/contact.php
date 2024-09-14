<?php 

    $name = "";
    $email = "";
    $message = "";
    $request_status = "";

    if($_SERVER["REQUEST_METHOD"] == "POST") // Waiting for the form to be completed, then act. 
    {
        // Do not forget to SANITIZE
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $request_status = "The form has been successfully submitted.";
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