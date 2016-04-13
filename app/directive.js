angular.module("staticTemplate").directive('staticInclude', function ($http, $templateCache, $compile) {
    return function (scope, element, attrs) {
        var templatePath = attrs.staticInclude;
        $http.get(templatePath, {
            cache: $templateCache
        }).success(function (response) {
            var contents = element.html(response).contents();
            $compile(contents)(scope);
        });
    };
}).directive('pane', function(){
      return {
        restrict: 'E',
        transclude:true,
        scope: { title:'@' },
        template: '<div>TemplateText</div> <ng-transclude></ng-transclude>'
      };
  });