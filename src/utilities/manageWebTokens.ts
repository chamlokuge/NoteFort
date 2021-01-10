import { Request, Response, NextFunction } from 'express';
import { ResponseStatusCode } from '../types/commonTypes';
import jwt from 'jsonwebtoken';
import JwtDecode from 'jwt-decode';
import { JWTtokenCreateParameters, JWTtokenReturnParameters} from './../types/loginRegistrationTypes';

const kJwtexpireTime = 60 * 60 * 8;

export async function createJWT(tokenParameters: JWTtokenCreateParameters): Promise<string> {

    let token;
    if(process.env.JWT_SECRET == undefined){
        throw 'error'
    }
        else{
          token= await jwt.sign({
                    _id : tokenParameters._id,
                    email: tokenParameters.email,
                  }, process.env.JWT_SECRET!, { algorithm: 'HS512', expiresIn: kJwtexpireTime, header: { "typ": "JWT" } });
                  
  }
  console.log(token);
  return token;
}

export function checkValidJWT(token: string): any {

  let jwtToken : string = process.env.JWT_SECRET as string;
  return jwt.verify(token,jwtToken);

}

/**
 * Process if token is valid
 * @param req resuest
 * @param res response
 * @param next function to call next
 */
export function checkToken(req: Request, res :Response, next:any) {

  if (process.env.SKIP_TOKEN_CHECK === '1') {
    return next()
  }

  const bearerHeader = req.headers['authorization'];

  try {
    const token = extractBearerTokenFromHeader(bearerHeader);

    let decodedToken = checkValidJWT(token)

    req.headers['userId'] = decodedToken._id;

    next()

  } catch (e) {
      console.error(e)
      res.sendStatus(ResponseStatusCode.Unauthorized);
  }

}

/**
 * Extract token from header authentication header value
 * @param header 
 */
function extractBearerTokenFromHeader(header?: string) {
  if (header && header.length > 1) {
      if (header.startsWith("Bearer ")) {
          return header.substring(7, header.length);
      } else {
          throw Error('Header does not start with Bearer ')
      }
  } else {
      throw Error('Token cannot be extracted')
  }
}


export function decodeJWT(token: string): any {

  try{
    let tokenParameters = JwtDecode(token);
    return tokenParameters;
  }
  catch{

    throw Error("Token decaode error")
  }

}


