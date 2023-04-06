<?php
session_start();
if(!isset($_SESSION['unique_id']))
{
header("location:login.php");
}
?>


<?php
include_once "header.php"
?>
<body>
    <div class="wrapper">
        <section class="chatarea">
            <header>
            <?php
            include_once "php/config.php";
            $user_id=mysqli_real_escape_string($conn,$_GET['user_id'
]);
            $sql=mysqli_query($conn,"SELECT * from users where unique_id='{$user_id}'");
            if(mysqli_num_rows($sql)>0){
                $row=mysqli_fetch_assoc($sql);

            }
            ?>
                <a href="users.php" class="back-icon"><i class="fas fa-arrow-left"></i></a>
                <img src="php/imagess/<?php echo $row['img'] 
                    ?>" alt="">
                <div class="details">
                    <span><?php echo $row['fname'] . " " .$row['lname']?></span>
                    <p><?php echo $row['status'] ?></p>
                </div>
            </header>
            <div class="chatbox">
              
            </div>
            <form action="#" class="typing" autocomplete="off">
                <input type="text" name="outgoingid" value="<?php echo $_SESSION['unique_id'];?>" hidden>
                <input type="text"  name="incomingid" value="<?php echo $user_id;?>" hidden>
                <input class="type" type="text" name="message" placeholder="Type message here...">
                <button><i class="fab fa-telegram"></i></button>
            </form>
        </section>
    </div>
    <script src="chat.js"></script>
</body>

</html>