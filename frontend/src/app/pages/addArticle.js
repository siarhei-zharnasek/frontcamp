export const addArticle = () => {
	return {
		template: '<form class="col-sm-6 col-md-4" name="addArticleForm" ng-submit="submitHandler()">' +
					'<input class="form-control" type="text" ng-model="data.title" required />' +
					'<textarea class="form-control" ng-model="data.description" validation-check required name="addArticleTextarea">lol</textarea>' +
					'<input type="submit">' +
				'</form>' +
				'{{addArticleForm.addArticleTextarea.$error.lengthInvalid ? "Please, type" : ""}}',
		controller: ['$scope', '$stateParams', '$http', '$state', ($scope, $stateParams, $http, $state) => {
			const articleId = $stateParams.articleId;
			const submitPutHandler = () => {
				$http.put(`http://localhost:3000/articles/${articleId}`, $scope.data).then(() => $state.go('admin', {}, { reload: true }));
			};
			const submitPostHandler = () => {
				$http({
					url: 'http://localhost:3000/articles/',
					headers: {
                    	'Content-Type': 'application/json; charset=utf-8'
        			},
        			method: 'POST',
        			data: $scope.data
				}).then(() => $state.go('admin', {}, { reload: true }));
			};

			$scope.submitHandler = $state.current.name === 'admin.edit' ? submitPutHandler : submitPostHandler;

			if ($state.current.name === 'admin.edit') {
				$http.get(`http://localhost:3000/articles/${articleId}`).then(data => $scope.data = data.data);
			}
		}],
		restrict: 'E'
	}
};