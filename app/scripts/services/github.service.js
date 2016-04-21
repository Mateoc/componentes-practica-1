angular.module('practicaUno')
.service('giuthubService',function($http, $q){

   this.getUser = function(user, resourcesToLoad){
       return $http.get('https://api.github.com/users/' + user).then(function(userInfo){
           userInfo = userInfo.data;
           var promises = [];
           Object.keys(resourcesToLoad).forEach(function(resourceKey){
               promises.push(getResource(userInfo[resourceKey]).then(function(resorce){
                   userInfo[resourcesToLoad[resourceKey]] = resorce;
                   return userInfo;
               }));
           });
           return $q.all(promises).then(function(){
               return userInfo;
           });
       });
   };

    this.getResource = getResource;

    function getResource(resource){
      return $http.get(resource).then(function(response){
          return response.data
      });
    }

});
