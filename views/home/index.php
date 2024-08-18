<!DOCTYPE html>
<html>

<?php
    readfile("../../components/head/head.php");
?>

<body>
    <?php
        // Inserting the header with the navigation bar. 
        readfile("../../components/navigation/navigation.php");

        // Insert the links at the right of the page
        readfile("../../components/links/links.php");
    ?>

    
    <div id="banner">
        <div>
            <h1>Victor Mauroy</h1>
            <p>Web and Unity Developer</p>
            <a href="#about">Learn more</a>
        </div>
    </div>

    <section id="about">
        <h2>About me</h2>
        <div> <!-- Flex with image on the right and text on the left-->
            <div id="profile-picture">
<!-- Find a better profile picture -->
                <img src="../../assets/images/profile/profile_picture2_cropped.jpg" />
                <button>
                    <img src="../../assets/logos/Download_Arrow.png" />
                    <p>Download resume</p>
                </button>
            </div>
            <p>
<!-- Isn't there too much text ? 
    I should add informations about current location and experience  -->
                Hello ! My name is Victor Mauroy, web developer who is also capable of creating games. 
                <br>
                <br>
                Having completed many formations, I’m currently looking for a first job or an apprenticeship. 
                <br>
                <br>
                Originally doing a lot of C# and .NET development, I want to expand my skills. Therefore, practicing more different back-end languages and trying multiple front-end technologies is my current objective on my free time.
                <br>
                <br>
                Working as a software developer implies having a lot of things to learn and always staying up-to-date, that’s what I love : the never-ending path leading to complete mastery.</p>
        </div>
    </section>

    
    <p>I <strong>do not</strong> own the images and use them for testing my galery.</p>
    <section class="galery">
        <img src="../../assets/images/galery/omer-tunc-sovale-copy.jpg" alt="Omer Tunc picture 1"/>
        <img src="../../assets/images/galery/omer-tunc-the-night-the-angel-and-our-gang.jpg" alt="Omer Tunc picture 2"/>
        <img src="../../assets/images/galery/omer-tunc-wolverin-copy.jpg" alt="Omer Tunc picture 3"/>
        <img src="../../assets/images/galery/paulina-bochniak-saviour.jpg" alt="Polina Bochniak Saviour"/>
        <img src="../../assets/images/galery/xc-k-.jpg" alt="Don't remember"/>
        <img src="../../assets/images/galery/yuumei-wenqing-yan-feel-the-wind-post.jpg" alt="Yuumei wenqing"/>
        <img src="../../assets/images/galery/zhang-pengzhen-1920.jpg" alt="Zhang Pengzhen"/>
    </section>

    


    <?php
        // Insert the footer. 
        readfile("../../components/footer/footer.php");
    ?>
</body>

</html>
