export class MyFirstController {
    constructor($scope) {
        this.city = 'Eindhoven';
        $scope.city = this.city;
    }
}
