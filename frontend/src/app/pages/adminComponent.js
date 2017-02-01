export const adminComponent = {
	template: '<div ui-view=""><p>Total amount of articles {{$ctrl.articles.length}}</p>' +
			'<div><div ng-repeat="article in $ctrl.articles">{{article.title}}</div>' +
				'<div class="col-sm-6 col-md-4" ng-repeat="article in $ctrl.articles">' +
	        		'<div class="thumbnail">' +
	            		'<div class="caption">' +
	              			'<h3>{{ article.title }}</h3>' +
				            '<p>{{ article.author }}</p>' +
				            '<p>' +
				            	'<a ui-sref=".edit({ articleId: article.articleId })" class="btn btn-primary" role="button">Edit</a>' +
				                '<button class="btn btn-danger" role="button">Remove</button>' +
				            '</p>' +
			            '</div>' +
			        '</div>' +
				'</div>' +
			'</div></div>',
	controller: ['$http', function($http) {
		$http.get('http://localhost:3000')
			.then(res => this.articles = res.data);
	}]
};