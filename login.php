<?php
session_start();
if(isset($_SESSION['unique_id']))
header("location: users.php");
?>
<?php
include_once "header.php"
?>

<body>
    <div class="wrapper">
        <section class="form login">
            <header>Realtime Chatting</header>
            <form action="#">
                <div class="error">This is error message</div>

                <div class="field input">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email address">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Enter Password">
                    <i class="fas fa-eye"></i>
                </div>

                <div class="field button">
                    <input type="submit" value="Continue to chat">
                </div>
                <div class="link">Not yet signed up?<a href="index.php">Signup now</a></div>

            </form>
        </section>

    </div>
    <script src="passshowhide.js"></script>
    <script src="login.js"></script>
</body>

</html>