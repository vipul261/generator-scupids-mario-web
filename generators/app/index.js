'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the first-rate ' + chalk.red('scupids-mario-web') + ' generator!'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
    }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: function () {
        this.fs.copy(
            //Packages
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        );
        this.fs.copy(
            //Bower Packages
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json')
        );
        this.fs.copy(
            //Controller
            this.templatePath('_appController.js'),
            this.destinationPath('app/controllers/app.js')
        );
        this.fs.copy(
            //Model
            this.templatePath('_baseModel.js'),
            this.destinationPath('app/models/base.js')
        );
        this.fs.copy(
            //Collection
            this.templatePath('_baseCollection.js'),
            this.destinationPath('app/collections/base.js')
        )
        this.fs.copy(
            //Views
            this.templatePath('_baseView.js'),
            this.destinationPath('app/views/base.js')
        )
        this.fs.copy(
            //main html file
            this.templatePath('_index.html'),
            this.destinationPath('index.html')
        );
        this.fs.copy(
            //main js file
            this.templatePath('_main.js'),
            this.destinationPath('main.js')
        );
        this.fs.copy(
            //config js file
            this.templatePath('_appConfig.js'),
            this.destinationPath('app/config.js')
        );
        this.fs.copy(
            //Paths js file
            this.templatePath('_appPaths.js'),
            this.destinationPath('app/config/paths.js')
        );
        this.fs.copy(
            //Shims js file
            this.templatePath('_appShims.js'),
            this.destinationPath('app/config/shims.js')
        );
        this.fs.copy(
            //App js file
            this.templatePath('_app.js'),
            this.destinationPath('app.js')
        );
        this.fs.copy(
            //Workspace View
            this.templatePath('_workspaceView.js'),
            this.destinationPath('app/views/workspace.js')
        );
        this.fs.copy(
            //App Router
            this.templatePath('_appRouter.js'),
            this.destinationPath('app/routers/app.js')
        );
        this.fs.copy(
            //Workspace Template
            this.templatePath('_appWorkspaceTemplate.html'),
            this.destinationPath('app/templates/appWorkspace.html')
        );
        this.fs.copy(
            //Layout View
            this.templatePath('_layoutView.js'),
            this.destinationPath('app/views/layout.js')
        );
        this.fs.copy(
            //Item View
            this.templatePath('_itemView.js'),
            this.destinationPath('app/views/item.js')
        );
        this.fs.copy(
            //Collection View
            this.templatePath('_collectionView.js'),
            this.destinationPath('app/views/collection.js')
        );
        this.fs.copy(
            //Composite View
            this.templatePath('_compositeView.js'),
            this.destinationPath('app/views/composite.js')
        );
        this.fs.copy(
            //Navigation View
            this.templatePath('_navigationView.js'),
            this.destinationPath('app/views/navigation.js')
        );
        this.fs.copy(
            //Navigation Template
            this.templatePath('_navigationTemplate.html'),
            this.destinationPath('app/templates/navigation.html')
        );
        //Content View Factory
        this.fs.copy(
            //Home
            this.templatePath('_contentViewFactory.js'),
            this.destinationPath('app/factory/contentViewFactory.js')
        );
        //ContentViews
        this.fs.copy(
            //Home
            this.templatePath('_homeView.js'),
            this.destinationPath('app/views/contentViews/home.js')
        );
        this.fs.copy(
            //Section
            this.templatePath('_sectionView.js'),
            this.destinationPath('app/views/contentViews/section.js')
        );
        //Content Templates
        this.fs.copy(
            //Home
            this.templatePath('_homeTemplate.html'),
            this.destinationPath('app/templates/home.html')
        );
        this.fs.copy(
            //Section
            this.templatePath('_sectionTemplate.html'),
            this.destinationPath('app/templates/section.html')
        );
        this.fs.copy(
            //Base CSS File
            this.templatePath('_base.css'),
            this.destinationPath('app/css/base.css')
        );
    },

    install: function () {
        this.installDependencies();
    }
});
