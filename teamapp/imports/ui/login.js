import { Template } from "meteor/templating";
import {Meteor} from 'meteor/meteor';
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
    "click #sign-in-google": function(e, tmpl){
        Meteor.loginWithGoogle({
            requestPermissions: ['email']
          }, function(error) {
            if (error) {
              console.log(error); //If there is any error, will get error here
            }else{
              console.log(Meteor.user());// If there is successful login, you will get login details here
            }
        });
    }
});

// Template.login.helpers({
//     isLoginServicesConfigured() {
//         return Accounts.isLoginServicesConfigured();
//     }
// });

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