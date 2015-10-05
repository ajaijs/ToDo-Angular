
app.controller('todoController', function($scope){

    $scope.tasks= [{TaskName:'Shoppping',TaskDate: '09-14-2015'}];
    var checkIndex;
    $scope.deleteBtn =false;

    function init()
    {
        $scope.lengths = $scope.tasks.length;

    }
    init()


    $scope.addData = function () {

        var tname = $scope.taskName;
        var tdate = $scope.taskDate;
        if(tname==="" ||tdate==="")
        {
            alert("Please fill out the fields..");

        }
        else if
            (tname==undefined||tdate==undefined)
        {
            alert("Please fill out the fields..");

        }
        else{
            var task = {TaskName:tname, TaskDate:tdate};
            $scope.tasks.push(task);
            init();
            clearForm();
            tname= "";
            tdate="";
        }

    }

    $scope.deleteData= function() {
        $scope.tasks.splice(checkIndex, 1)

        init();
        $scope.deleteBtn = false
    }


    $scope.check = function(index){
        checkIndex = index;
        $scope.deleteBtn = true;
    }
    function clearForm()
    {
        $scope.taskName = '';
        $scope.taskDate='';
    }

});
