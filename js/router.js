define([
    'jquery',
    'underscore',
    'backbone',
    'views/users/userlist-view'
], function($, _, Backbone,UserListView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            '' : 'home'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter();
        app_router.on('route:home', function(){
            var userListView = new UserListView();
            userListView.render();
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});