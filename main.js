require.config({
	paths:{
		'angular':'bower_components/angular/angular',
	},
	shim:{
		'angular':{
			exports:'angular'
		}
	}

});

require(['src/app'],function () {
	console.log(angular);
        angular.bootstrap(document, ['app']);
    }
);




