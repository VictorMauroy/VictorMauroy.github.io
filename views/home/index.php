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
                <img src="../../assets/images/profile/profile-picture-with-background.jpg" />
                <button>
                    <img src="../../assets/logos/Download_Arrow.png" />
                    <p>Download resume</p>
                </button>
            </div>
            <p>
<!-- Isn't there too much text ? 
    I should add informations about current location and experience  -->
                Hello ! My name is Victor Mauroy, a web developer who is also doing game development. 
                <br>
                <br>
                Originally doing a lot of C# and .NET development, I want to expand my skills. Therefore, practicing more different back-end languages and trying multiple front-end technologies is my current objective on my free time.
                <br>
                <br>
                Working as a software developer implies having a lot of things to learn and always staying up-to-date, that’s what I love : the never-ending path leading to complete mastery.</p>
        </div>
    </section>

    <section id="current-activity">
        <!-- AI generated image made by TheDigitalArtist -->
        <h2>Currently</h2>
        <p>Searching for a first job or an apprenticeship.</p>
    </section>

    <section id="skills">
        <h2>Technical skills</h2>
        <div class ="left-skills skill-section">
            <h3 class="skill-title-left">Back-end</h3>
            
            <div class="skill-item highlighted-item">
                <img src="../../assets/logos/net-logo.png" alt=".NET logo" />
                <span>.NET (C#)</span>
            </div>
            <div class="skill-item">
                <img src="../../assets/logos/javascript-logo.png" alt="javascript logo" />
                <span>Javascript</span>
            </div>
            <div class="skill-item">
                <img src="../../assets/logos/php-logo.png" alt="php logo" />
                <span>PHP</span>
            </div>
            <div class="skill-item">
                <img src="../../assets/logos/python-logo.png" alt="python logo" />
                <span>Javascript</span>
            </div>
            <div class="skill-item">
                <img src="../../assets/logos/pgsql-logo.png" alt="PostgreSQL logo" />
                <span>PostgreSQL</span>
            </div>
            <div class="skill-item">
                <img src="../../assets/logos/mysql-logo.png" alt="mysql logo" />
                <span>MySQL</span>
            </div>
        </div>
        
        <div class="right-skills skill-section">

        </div>

        <div class="left-skills skill-section">
        
        </div>
    </section>


    <?php
        // Insert the footer. 
        readfile("../../components/footer/footer.php");
    ?>
</body>

</html>
