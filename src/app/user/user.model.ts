export interface User {
  imageUrl:string;
  name:string;
  email:string;
  address:{
    street:string,
    city:string
  };
  phone: Date;
}
