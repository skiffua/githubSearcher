<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('error_reporting', E_ALL);
// echo "test";
$field = "size";
$operator = ">";
$value = 50;

$data = $_POST["rool"]

//Initialize cURL.
$ch = curl_init();
 
//Set the URL that you want to GET by using the CURLOPT_URL option.
curl_setopt($ch, CURLOPT_URL, "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc");
 
//Set CURLOPT_RETURNTRANSFER so that the content is returned as a variable.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    // 'Accept: application/vnd.github.mercy-preview+json',
    // 'Authorization: token 5c67da5c67f5d67ac5ff5acdf675facbe875t86a',
    'User-Agent: "php"'
]);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

//Set CURLOPT_FOLLOWLOCATION to true to follow redirects.
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
 
//Execute the request.
$data = curl_exec($ch);

// echo var_dump($data);
 
//Close the cURL handle.
curl_close($ch);
 
//Print the data out onto the page.
echo  json_encode($data);

?>