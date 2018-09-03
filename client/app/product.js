app.controller('ProductsCtrl', function($scope, Employee) {

  // $scope.product = new Product();
   $scope.employeeModel = new Employee();
    
    var customerCollection = function() {
        
        Employee.queryDefined().$promise.then(function (employees) {
        $scope.employees = employees.employees;
      })
    };

    customerCollection();
    
    
    $scope.add = function(employeeModel) {
      Employee.save(employeeModel,function(employeeModel){
      customerCollection();
      });
    };
    
    // $scope.update = function(product) {
    //   product.$update(function(){
    //     refresh();
    //   });
    // };
    
    $scope.remove = function(employeeModel) {
      Employee.delete(function(){
        customerCollection();;
      });
    };
    
    // $scope.edit = function(id) {
    //   $scope.product = Product.get({ id: id });
    // };  
    
    // $scope.deselect = function() {
    //   $scope.product = "";
    // }
    
    })