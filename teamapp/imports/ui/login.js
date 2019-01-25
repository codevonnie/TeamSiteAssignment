import { Template } from "meteor/templating";
import './login.html';

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