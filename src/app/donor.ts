import { User } from './user';

export class Donor {
    donorId: number;
    bloodGroup: string;
    age: number;
    user: User;

    constructor(
        user?: User,
        donorId?: number,
        bloodGroup?: string,
        age?: number
    ) {

    }
}