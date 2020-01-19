export class CityController {
    public city = 'Eindhoven';
    
    constructor($scope: { city: string; }) {
        $scope.city = this.city
    }
}