import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { addArticle } from './pages/addArticle';
import { adminComponent } from './pages/adminComponent';
import { buttonComponent } from './pages/buttonComponent';
import { validationCheck } from './pages/validationDirective';


angular
	.module('app', [uiRouter])
	.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', ($stateProvider, $locationProvider, $urlRouterProvider) => {
		$stateProvider
			.state('home', {
		        url: '/'
		    })
			.state('admin', {
				url: '/admin',
				template: '<admin-component></admin-component>'
			})
			.state('admin.edit', {
				url: '/article/:articleId/edit',
				template: '<add-article></add-article>'
			})
			.state('admin.add', {
				url: '/article/add',
				template: '<add-article></add-article>'
			});

	    $locationProvider.html5Mode({
	      enabled: true
	    });

	    $urlRouterProvider.otherwise('/');
	}])
	.component('adminComponent', adminComponent)
	.component('buttonComponent', buttonComponent)
	.directive('addArticle', addArticle)
	.directive('validationCheck', validationCheck);