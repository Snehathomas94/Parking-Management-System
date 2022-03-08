
# PARKING MANAGEMENT SYSTEM API

## About the Project:

This is a parking management api system 


Languages used : NodeJs,ExpressJs,MongoDB
Front end : HTML and CSS
Documentation : Swagger API
Testing : Postman API 

## DEPLOYEMNT

To start the server 

```bash
  npm run start-dev
```

## Database Part:

To connect with the Database here we are 
using MongoDB Atlas installed on the local machine.

The login credentials are as follows:

PORT 3000
DBHOST = mongodb+srv://snehamthomas94:root@cluster0.wu0yt.mongodb.net/parking-api
 
username:snehamthomas94
pwd: root 

## Token secret is used to authenticate the user
TOKEN_SECRET=secret

JWT_EXPIRES_IN=24h

## Working 

1. The application starts with a Login screen
   which has three parts:

   (i)Home
   (ii)Signup
   (iii)Dashboard

(i) In the home part , you are requested to give username and password.
(ii)After you have given the username and password,click login button and 
you will be redirected to the signup screen.

On the sign up screen , the Session checker checks whether the credentials matches or not.
If it matches it will be redirected to the Dashboard screen.

If is doesnt matches, it will be redirected to the login screen.
otherwise will be redirected to a dashboard.

After signup , the details will be stored in the MongoDB database.

2. Swagger API    

The swagger api is used for documenting the application.
Inside the swagger api, one can perform all the
CRUD operations.

3. Postman Api 

The postman api is used to generate the test cases.
