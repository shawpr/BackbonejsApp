define([
    'jquery',
    'underscore',
    'backbone',
    'collections/users-collection'
], function($, _, Backbone,UsersCollection){
    var UsersListView = Backbone.View.extend({

        //element where the list and details would be rendered
        el: '.page',


        events: {
            "click .userLink":"getUserDetails",
            "click .savePageLink":"bookmarkPage",
            "click #navPreviousLink":"navToUserList"
        },

        //renders the user list fetched from the url
        render: function(){
            var self = this;
            self.usersCollection = new UsersCollection();
            self.usersCollection.fetch({
                success: function(users) {
                    self.userList = users.models;
                    var template = _.template($('#userListTemplate').html());
                    self.$el.html(template({users: self.userList}));
                }
            });
        },

        //to filter the selected user details from the json
        getUserDetails: function(e){
            var self = this;
            var rowId = parseInt(e.currentTarget.attributes["row-index"].value);
            var userDetail = _.filter(self.userList, function (item) {
                return item.attributes.id === rowId;
            });

            var template = _.template($('#userDetailsTemplate').html());
            self.$el.html(template(({userDetail: userDetail[0]})));
        },


        //function to bookmark a page
        bookmarkPage: function(){
            var bookmarkURL = window.location.href;
            var bookmarkTitle = document.title;

            if (window.external && ('AddFavorite' in window.external)) {
                // IE Favorites
                window.external.AddFavorite(bookmarkURL, bookmarkTitle);
            } else {
                // Safari, Chrome
                alert('Press ' + (/Mac/i.test(navigator.platform) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
            }

            return false;
        },

        //to navigate to the previous page
        navToUserList: function(){
            this.render();
        }

    });
    return UsersListView;
});
