"use strict";


var ADMIN           = "admin",
    ADMINPASSWORD   = "Black Overlord",
    CANCELED        = "Sign-in canceled";

var Login = prompt("Login", "Enter login");


if ( Login == ADMIN ) {

        var Password = prompt("Password", "Enter Password");

        if ( Password == ADMINPASSWORD ) {
            alert("Welcome!");
        } else
        if ( Password == null ) {
            alert(CANCELED);
        } else {
            alert("Password is incorrect");
        }

} else if ( Login == null ) {
    alert(CANCELED);
} else {
    alert("I don't know you");
}
