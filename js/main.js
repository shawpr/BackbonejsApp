require.config({
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone'
    }

});

require([
    'app',
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});