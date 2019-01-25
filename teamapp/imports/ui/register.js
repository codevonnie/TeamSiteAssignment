import { Template } from "meteor/templating";
import './register.html';

Template.register.events({
    'submit form'(event) {
        event.preventDefault();
        var username = event.target.username.value;
        var email = event.target.email.value;
        var password = event.target.password.value;
        var password2 = event.target.password2.value;
        var terms = event.target.terms.value;
        //confirm password
        //confirm terms checked


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