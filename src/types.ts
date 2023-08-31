export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IUser{
  name: string;
  email: string;
  password: string;
  id: number;
  barbecues: string[];
  authToken: string;
  error?: string;
}


export interface ILoginAttributes {
  email: string;
  password: string;
}