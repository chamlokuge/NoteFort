import mongoose, { Schema, Document } from 'mongoose';
import { UserType } from '../types/loginRegistrationTypes';

export interface IGeneralUser extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userType?: UserType,
    uuid : string,
  }

const GeneralUserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: UserType, required: false },
    uuid: { type: String, required: true },
  })

export interface Note{
  id:string,

}
  
  export default mongoose.model<IGeneralUser>('GeneralUser', GeneralUserSchema);