import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private userDetails = [
        {id: 0, userName: 'venkat', isFlagged: false, countryResidenceCode: 'CAD'},
        {id: 1, userName: 'Neeraja', isFlagged: true, countryResidenceCode: 'INR'},
        {id: 2, userName: 'Rishi Sunak', isFlagged: true, countryResidenceCode: 'GBP'},
    ];

    getUserDetails() {
        return this.userDetails;
    }
}
