import { UserType } from './../types/loginRegistrationTypes';
import { Request, Response, Router } from 'express';
import { MethodResponse, ResponseStatusCode } from '../types/commonTypes';
import { AuthenticationController } from './../controllers/authenticationController';

export const loginRegistrationRouter: Router = Router();

loginRegistrationRouter.post("/login", async (request, response) => {
    let email: string = String(request.body.email);
    let password: string = String(request.body.password);

    let loginResponse: MethodResponse = await AuthenticationController.login({
      email,
      password
    })
    response.status(loginResponse.status).send({
      responseMessage: loginResponse.responseMessage,
      payload: loginResponse.payload
    })
    
  })

  loginRegistrationRouter.post("/register", async (req :Request, res: Response) => {

    console.log(req.body);

    let email: string = String(req.body.email);
    let password: string = String(req.body.password);
    let firstName: string = String(req.body.firstName);
    let lastName: string = String(req.body.lastName);

    let loginResponse: MethodResponse = await AuthenticationController.registerUser({
      email,
      password,
      firstName,
      lastName
    })
    res.status(loginResponse.status).send({
      responseMessage: loginResponse.responseMessage,
      payload: loginResponse.payload
    })
    
  })


