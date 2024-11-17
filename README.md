[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=chamlokuge_Thirdfort&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chamlokuge_Thirdfort)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=chamlokuge_Thirdfort&metric=bugs)](https://sonarcloud.io/dashboard?id=chamlokuge_Thirdfort)  
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=chamlokuge_Thirdfort)
<!--![badge](https://action-badges.now.sh/chamlokuge/thirdfort?action=build)-->  

# NoteFort 🏰🔒 

A place where your notes are secure and safe. 📔 ✏️  

## API Documentation  
[See here for API Documentation](APIDocumentation.md)  

[See here for Swagger API Documentation](https://app.swaggerhub.com/apis/chamlokuge/Test2/1.0.0) 

## Features

🔒 - Auth required

- 🔒 Add note
- 🔒 Update note
- 🔒 Delete note
- 🔒 Archive note
- 🔒 Unarchive note
- 🔒 View all notes
- 🔒 View all archived notes  
- 🔒 View all unarchived notes

## Dependancies
- Node v12.x.x or higher   
- MongoDB v5.x.x or higher  
- Typescript v3.9.x or higher  
- Jest - Test framework

## How to Setup

- Fork the repository in the GitHub
- Clone the project into your local computer  
- Set up `.env` file in reference to `.env.stub`  
- Run following commands
    - `npm install`
    - `npm test`
    - `npm start`  
    
## Authorization  
   
- {Authorization: Bearer <Replace with jwt token>}  
- Secure routes are implemented using JWT  
    - The user registers, and a user acoount is created  
    - The user logs in, and a JSON web token is assigned to the user  
    - This token is sent by the user when trying to access secure routes  
    - Once the token has been verified, the user is then allowed to access the secure         routes.  
- Enhanced security using JWT  
    
 ##  Choose of Technology  
 
 #### Nodejs  
 - This app does not require heavy processing   
 - Have more I/O operations  
  
 #### MongoDB  
 - To save notes and note status     
 - Adding more fields to a scema is less time consuming  
   
 #### Typescript  
 - Class and Module Support  
 - Static Type-checking  
 - ES6 Feature Support    
 - Clear Library API Definition  
 - Build-in Support for JavaScript Packaging     

 ##  Improvements  
   
 - Large notes support  
 - Enhanced security by encrypting notes of the user  
 - Add audio clips, images, PDF documents as attachments  
 - Add reminders for calender events  
 - Add collaborations to other authorized users  
 - Add pagination and caching to notes  
