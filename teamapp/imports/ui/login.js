import { Template } from "meteor/templating";
import './login.html';
import './register.js';
import '../../routes.js';

Template.login.onRendered(function() {
    $('.login').validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: true
            }
        }
        
    });
});

Template.login.events({
    'submit form'(event) {
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(username, password, function(error) {
            if (Meteor.user()) {
                console.log(Meteor.userID());
            }
            else{
                console.log("Error: " + error.reason);
            }
            
        });
    }
});