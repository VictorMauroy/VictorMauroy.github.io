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
    <h2>Me contacter</h2>
    <p>Do you want to learn more ? Send me a message by using the following form or my links, I'll quickly answer.</p>
    
    <div>
        <form action="" method="POST">
            
            <div class="form-element">
                <input autocomplete="on" placeholder="Name" name="nom" type="text" value="<?php echo $name; ?>">
                <span class="hidden-span">The field is required.</span>
            </div>
            
            <div class="form-element">
                <input type="mail" name="email" autocomplete="on" placeholder="Email" value="<?= $email; ?>">
                <span class="hidden-span">The field is required.</span>
            </div>

            <div class="form-element">
                <input type="text" name="message" placeholder="Message" value="<?= $message; ?>">
                <span class="hidden-span">The field is required.</span>
            </div>
    
            <input type="submit" value="Send" />
            <span><?= $request_status ?></span>
        </form>

        <div>

        </div>
    </div>
</section>