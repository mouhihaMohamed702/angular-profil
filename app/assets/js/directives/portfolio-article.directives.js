/**
* @desc portfolioArticle directive is responsible to load the jobs inside my portfolio
* @example <portfolio-article ng-repeat="portfolio in profile.portfolios"></portfolio-article>
*/

angular
    .module('profile')
    .directive('portfolioArticle', portfolioArticleDirective);

function portfolioArticleDirective() {
    return {
        restrict: 'E',
        templateUrl: '/assets/templates/portfolio-article.html'
    }
}