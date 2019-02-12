<?php

// TODO
// check refer domain

$ad_w = $_GET['w'];
$ad_h = $_GET['h'];
$ad_id = $_GET['id'];

$ads = [
    '123' => [
        'id' => '123',
        'w' => '320',
        'h' => '50',
        'url' => '',
        'image' => '',
    ],
    '432' => [
        'id' => '123',
        'w' => '300',
        'h' => '250',
        'url' => '',
        'image' => '',
    ],
];

$request_json = json_encode($ads[$ad_id], true);
echo $_GET['callback'] . "(" . $request_json . ");";

?>