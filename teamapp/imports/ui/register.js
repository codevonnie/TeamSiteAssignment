import { Template } from "meteor/templating";
import {Meteor} from 'meteor/meteor';
import './register.html';

Template.register.onRendered(function() {
    $('.register').validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            password2: {
                required: true,
                equalTo: password
            }
        },
        messages: {
            username: {
                required: "You must enter a username",
                minlength: "Username must be at least {0} characters"
            },
            email: {
                required: "You must enter an email",
                email: "You must enter a valid email"

            },
            password: {
                required: "You must enter a password",
                minlength: "Password must be at least {0} characters"

            },
            password2: {
                required: "You must reenter you password",
                equalTo: "Passwords must be the same"

            }
        }
    });
});

Template.register.events({
    'submit form'(event) {
        event.preventDefault();
        var username = $('[name=username]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var password2 = $('[name=password2]').val();
        var terms = $('[name=terms]').val();
        //confirm password
        //confirm terms checked

        Accounts.createUser({
            email: email,
            password: password,
            username: username
        });

        console.log(Meteor.user());
    }
});