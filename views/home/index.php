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

    <h1>Temporary galery of images</h1>
    
    <p>I <strong>do not</strong> own the images and use them for testing my galery.</p>
    <section class="galery">
        <img src="../../assets/images/omer-tunc-sovale-copy.jpg" alt="Omer Tunc picture 1"/>
        <img src="../../assets/images/omer-tunc-the-night-the-angel-and-our-gang.jpg" alt="Omer Tunc picture 2"/>
        <img src="../../assets/images/omer-tunc-wolverin-copy.jpg" alt="Omer Tunc picture 3"/>
        <img src="../../assets/images/paulina-bochniak-saviour.jpg" alt="Polina Bochniak Saviour"/>
        <img src="../../assets/images/xc-k-.jpg" alt="Don't remember"/>
        <img src="../../assets/images/yuumei-wenqing-yan-feel-the-wind-post.jpg" alt="Yuumei wenqing"/>
        <img src="../../assets/images/zhang-pengzhen-1920.jpg" alt="Zhang Pengzhen"/>
    </section>


    <?php
        // Insert the footer. 
        readfile("../../components/footer/footer.php");
    ?>
</body>

</html>
