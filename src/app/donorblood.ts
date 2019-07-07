import { Donor } from './donor';

export class DonorBlood {
    donorBloodId: number;
    donor: Donor;
    city: string;
    frequency: number;
    dateOfBloodDonation: string;

    constructor(
        donor?: Donor,
        city?: string,
        frequency?: number,
        dateOfBloodDonation?: string
    ) {

    }
}