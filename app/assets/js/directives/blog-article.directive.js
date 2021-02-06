/**
* @desc blogArticle directive is responsible to load the articles inside the blog
* @example <blog-article ng-repeat="post in profile.posts"></blog-article>
*/

angular
    .module('profile')
    .directive('blogArticle', blogDirective);
    
function blogDirective() {
    return {
        restrict: 'E',
        templateUrl: '/assets/templates/blog-article.html'
    }
}