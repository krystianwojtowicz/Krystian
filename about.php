<?php
// $con = mysqli_connect('localhost', 'root');
// if($con) {
//     echo "Connection successful";
// } else {
//     echo "Connection failed";
// }

// mysqli_select_db($con, 'form');

// $email = $_POST['email'];

// $query = "INSERT INTO users (email) VALUES ('$email')";

// mysqli_query($con, $query);
// header('lacation:index.php');



// if (isset($_POST['submit'])) {
// $email = $_POST['email'];
// $host = "localhost";
// $dbUsername = "root";
// $dbPassword = "";
// $dbname = "form";

// $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
// if(mysqli_connect_error()) {
//     die('Connect Error('m mysqli_connetct_errno().')'. mysqli_connect_error());
// } else {
//     $SELECT = "SELECT email From users Where amail = ? Limit 1;"
//     $INSERT = "INSERT Into users (email) values(?)";

//     $stmt = $conn->prepare($SELECT);
//     $stmt->bind_param("s", $email);
//     $stmt->execute();
//     $stmt->bind_results($email);
//     $stmt->store_result();
//     $rnum = $stmt->num_rows;

//     if($rnum==0) {
//         $stmt->close();
//         $stmt = $conn->prepare($INSERT);
//         $stmt->bind_param('s', $email);
//         $stmt->execute();
//         echo "New record inserted successfully";
//     } else {
//         echo "Someone already register using this email";
//     }
//     $stmt->close();
//     $conn->close();
// }
// }
// else {
//     echo "Submit button is not set";
// }





if (isset($_POST['submit'])) {
    if (isset($_POST['email'])) {
        
        $email = $_POST['email'];
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "form";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM users WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO users(email) values(?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("s",$email);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}

?>