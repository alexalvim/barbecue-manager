export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IParticipant {
  id: string;
  name: string;
  price: number;
  paid: boolean;
}

export interface IBarbecue{
  id: string;
  title: string;
  description: string;
  observation: string;
  priceWithDrinks: number;
  priceWithoutDrinks: number;
  participants: IParticipant[];
}

export interface IUser{
  name: string;
  email: string;
  password: string;
  id: number;
  barbecues: IBarbecue[];
  authToken: string;
  error?: string;
}


export interface ILoginAttributes {
  email: string;
  password: string;
}