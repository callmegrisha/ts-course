import axios from 'axios';

const USERS_URL: string = 'https://dummyjson.com/users';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

enum BloodGroup {
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-',
}

interface IHair {
  color: string;
  type: string;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

interface IAddress {
  address: string;
  city: string;
  coordinates: ICoordinates;
  postalCode: string;
  state: string;
}

interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface ICompany {
  address: IAddress;
  department: string;
  name: string;
  title: string;
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: Date;
  image: string;
  bloodGroup: BloodGroup;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
}

async function getUsers(url: string): Promise<IUser[] | void> {
  try {
    const { data: { users } } = await axios.get(url);

    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }
  }
}

(async () => {
  const users = await getUsers(USERS_URL);
  console.log(users);
})();

export {};
