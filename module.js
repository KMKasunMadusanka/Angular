angular.module("MainModule",[]).controller("MainController",function ($scope){
    $scope.message = "Hii to Angular";

    $scope.lawyers=[
        {"Id":"1","Name":"Janaka Chathuranga","availability":true,"category":"Cards_Non_WOFF"},
        {"Id":"2","Name":"Mekala Rashmika","availability":false,"category":"Personal_Loan_Non_WOFF"},
        {"Id":"3","Name":"Yoshani Kavindya","availability":false,"category":"Personal_Non_WOFF"},
        {"Id":"4","Name":"Hashan Buddhima","availability":true,"category":"Auto_Loan_Non_WOFF"},
        {"Id":"5","Name":"Ashani Dikowita","availability":false,"category":"Cards_Non_WOFF"},
        {"Id":"6","Name":"Janaka Chathuranga","availability":true,"category":"Housing_Non_WOFF"}

    ];


    $scope.persentLawyers=[
        {"Name":"Prabath Udayanga"},
        {"Name":"Dilshani Bandara"},
        {"Name":"Ranura Ashvin disssanayake"}
    ];


});
