import { createJWT } from '../utilities/manageWebTokens';
import { v4 as uuid } from 'uuid';
import GeneralUser, { IGeneralUser } from './../models/generalUserModel';
import { MethodResponse, ResponseStatusCode } from '../types/commonTypes';
import { GeneralUserRegistationParams, LoginParameters, UserType} from '../types/loginRegistrationTypes';
import { getHashedPassword, hashedMatchesPlain } from '../utilities/managePasswords';

export class AuthenticationController{

    public static async registerUser(userInfo: GeneralUserRegistationParams): Promise<MethodResponse> {
        
        try {
          let isDuplicate = await GeneralUser.exists({ email: userInfo.email });

          if (isDuplicate) {
            return new MethodResponse(ResponseStatusCode.BadRequest, 'the email is already in use');
          }

          const hashedPassword = await getHashedPassword(userInfo.password);
          const _uuid : string = uuid();
          const newUser: IGeneralUser = new GeneralUser({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: hashedPassword,
            userType: userInfo.userType,
            uuid : _uuid
          });
          await newUser.save();
          
          let jwtToken = await createJWT({
                _id : newUser._id,
                email: newUser.email,
              });
          return new MethodResponse(ResponseStatusCode.Success, 'success', jwtToken);
            
        } catch (why) {
            console.error(why);
          return new MethodResponse(ResponseStatusCode.InternalError, why)
        }
      }

      public static async login(userInfo: LoginParameters): Promise<MethodResponse> {
        try {
          let recordFromDB : IGeneralUser | null;
          
            recordFromDB = await GeneralUser.findOne({ email: userInfo.email });
          
          if (recordFromDB == null) {
            return new MethodResponse(ResponseStatusCode.BadRequest, 'the email doesnt match any account');
          }
          let passwordsMatch = await hashedMatchesPlain(userInfo.password, recordFromDB.password);
          if (!passwordsMatch) {
            return new MethodResponse(ResponseStatusCode.BadRequest, 'incorrect password');
          }
          
          let jwtToken = await createJWT({
              _id : recordFromDB._id,
              email: recordFromDB.email,
          });

          return new MethodResponse(ResponseStatusCode.Success, 'success', jwtToken);
         
        } catch (why) {
          return new MethodResponse(ResponseStatusCode.InternalError, why)
        }
      }

}
