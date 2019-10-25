define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'models/users-model'
], function(_, Backbone, UsersModel){
    var UsersCollection = Backbone.Collection.extend({
        url: 'http://jsonplaceholder.typicode.com/users',
        model: UsersModel,
        parse: function(response) {
            console.log(response);
            return response;

        }
    });
    // You don't usually return a collection instantiated
    return UsersCollection;
});