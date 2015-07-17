var ToolController = function($scope) {

    $scope.exciseTax = {
        "dutyStill": .063, //DOLLARS per liter
        "dutySparkling":.198, // DOLLAR per liter
        "irsStill":.2826619, // DOLLARS per liter
        "irsSparkling":.8981780 // DOLLARS per liter
    }; // dollars per liter

    $scope.shippingVars = [
        {
            "range": "1-100",
            "cost": 11.5/12
        },
        {
            "range": "101-200",
            "cost": 11/12
        },
        {
            "range": "201-300",
            "cost": 10.5/12
        },
        {
            "range": "301-400",
            "cost": 10/12
        },
        {
            "range": "401-500",
            "cost": 9.5/12
        },
        {
            "range": "501+",
            "cost": 9/12
        },
        {
            "range": "Full Container",
            "cost": 7/12
        },
        {
            "range": "Half Container",
            "cost": 8/12
        }
    ];

    $scope.shippingFixed = 6.75/12;



    $scope.adValarumTax = {
        "mpf":.3464, //percent on value
        "hmf":.125  // percent on value

    };

    $scope.wineType = undefined;

    $scope.pricePerBottle = undefined;

    $scope.euroToDollar = 1.09;

    $scope.dollarToEuro = 1 / $scope.euroToDollar;

    $scope.fees = [
        {
            "name":"Excise Tax",
            "value":$scope.exciseTax,
            "description": "20 cents per Liter"
        },
        {
            "name":"Ad Valarum Tax",
            "value":$scope.adValarumTax,
            "description": "2% of the total value"
        },
        {
            "name":"Euro To Dollar Rate",
            "value":$scope.euroToDollar,
            "description": "Euro -> Dollar Exchange Rate",
            "myFilter": "dollar"
        },
        {
            "name":"Dollar to Euro Rate",
            "value":$scope.dollarToEuro,
            "description": "Dollar -> Euro Exchange Rate",
            "myFilter": "euro"
        }
    ];

    $scope.LFL = { //per 12 bottles
        oneToOneHundred: 11.5,
        oneHundredToTwoHundred: 11,
        twoHundredToThreeHundred: 10.5,
        fourHundredToFiveHundred: 10,
        fiveHundredPlus: 9.5,
        flatPrice: 6.75

    };

    $scope.shippingOption = undefined;


    $scope.finalPrice = {
        "still": undefined,
        "sparkling": undefined,
        "isSet": undefined

    };

    $scope.ex =  {
        "still": undefined,
        "sparkling": undefined
    };


    $scope.calculatePrice = function(){
        $scope.pricePerBottle = parseFloat($scope.pricePerBottle)
        var ad = $scope.adValarumTax.mpf * $scope.pricePerBottle + $scope.adValarumTax.hmf;
        $scope.ex.still = ($scope.exciseTax.dutyStill + $scope.exciseTax.irsStill)*.75;
        $scope.ex.sparkling = ($scope.exciseTax.dutySparkling + $scope.exciseTax.irsSparkling)*.75;
        $scope.finalPrice.still =
            ad*$scope.euroToDollar +  $scope.ex.still + $scope.pricePerBottle + $scope.shippingOption + $scope.shippingFixed;
        $scope.finalPrice.sparkling =
            ad*$scope.euroToDollar +  $scope.ex.sparkling + $scope.pricePerBottle + $scope.shippingOption + $scope.shippingFixed;
        $scope.finalPrice.isSet = true;
    };




};

/* recommended */
angular
    .module("app.tool")
    .controller("ToolController", ToolController);

ToolController.$inject = ['$scope'];