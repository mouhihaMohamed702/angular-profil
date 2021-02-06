angular
    .module('profile')
    .factory('dataservice', dataservice);


dataservice.$inject = ['$http'];

function dataservice($http) {
    return {
        getPosts: getPosts,
        getPortfolio: getPortfolio
    }

    function getPosts() {
        return $http.get('http://fellyph.com.br/blog/wp-json/wp/v2/posts/?per_page=3')
            .then(getPostsComplete)
            .catch(getPostsFailed);
    }

    function getPortfolio() {
        return $http.get('//fellyph.com.br/blog/wp-json/wp/v2/portfolio')
            .then(getPortfolioComplete)
            .catch(getPortfolioFailed);
    }

    function getPortfolioComplete(response) {
        return response.data;
    }

    function getPostsComplete(response) {
        return response.data;
    }

    function getPortfolioFailed(error) {
        console.error('XHR Failed for getPortfolio.' + error.data);
    }

    function getPostsFailed(error) {
        console.error('XHR Failed for getPots.' + error.data);
    }
}