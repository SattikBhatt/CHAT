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
        <section class="form signup">
            <header>Realtime Chatting</header>
            <form action="#" enctype="multipart/form-data">
                <div class="error">This is error</div>
                <div class="name-details">
                    <div class="field input">
                        <label>First Name</label>
                        <input type="text" name="fname" id="" placeholder="First Name" required>
                    </div>
                    <div class="field input">
                        <label>Last Name</label>
                        <input type="text" name="lname" placeholder="Last Name" required>
                    </div>
                </div>
                <div class="field input">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email address" required>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Enter Password" required>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field image">
                    <label>Select image</label>
                    <input type="file" name="image">
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to chat">
                </div>
                <div class="link">Already signed up?<a href="login.php">Login now</a></div>

            </form>
        </section>

    </div>
    <script src="passshowhide.js"></script>
    <script src="signup.js"></script>
</body>

</html>