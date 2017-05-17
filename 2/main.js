"use strict";


// const
var Admin = "admin",
    Admin_password = "Black Overlord",
    Canceled = "Sign-in canceled",
// var
    Login = prompt("Login", "Enter login"),
    Password;



switch(Login) {
    case Admin:
        Password = prompt("Password", "Enter Password");

        switch(Password) {
            case Admin_password:
                alert("Welcome!");
                break;

            case null:
                alert(Canceled);
                break;

            default:
                alert("Password is incorrect");
        }
        break;


    case null:
        alert(Canceled);
        break;


    default:
        alert("I don't know you");
}
