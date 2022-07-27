# Product App: NodeJs-API

Technology Stack:
1.  Node JS >= v10.16.0 with ExpressJs.
2.  MySQL Database for storage.

## Installation
### NodeJs

The first steps in using Node.js is the installation of the Node.js libraries on the client system. To perform the installation of Node.js, perform the below steps;

Step 1) Go to the site https://nodejs.org/en/download/ and download the necessary binary files. From the node.js official website you have to the download the 32/64-bit setup files for Node.js.
Then proceed with nodejs installation on your window machine.

Once installation is completed, check your nodejs version by using following command:

  ``` json
    C:\node -v
    v10.16.0
  ```

### MySQL Database

For MySQL database installation, please refer https://dev.mysql.com/downloads/installer/

 ```
 Create database name: j6zqxiyb22
 username: root
 password: root
 
 Or Go to Project Direcotory 
 Edit database/config/config.json file and rename values accordingly
 
 I was try to use .env for manage dev and prod, for time issue i did't include.
 
 ```

### Start the server

``` json
    By default server will run in development mode.
    1: npm run setup 
    2: set DEBUG=stock_demo:* & nodemon start
    
   For Windows: set DEBUG=stock_demo:* & nodemon start
   For Linux:  DEBUG=stock_demo:* & nodemon start
   
```

## API List

#### Get Methods

###### Get Product List

  ```
 
  1: 127.0.0.1:3000/product?result=10&currencyCode=CAD
  
  it will return all product list you can set limit by result value
  
 ```

###### Product View
  ```
  1: 127.0.0.1:3000/product/detail?productId=7&currencyCode=CAD
  
  it will return product details you can set limit by result value
  
 ```

###### Product View
  ```
  1: 127.0.0.1:3000/product/most-viewed
  2: 127.0.0.1:3000/product/most-viewed?result=1&currencyCode=CAD
  
  it will return most viewed product list you can set limit by result value
  
 ```
 
 
 
   
   
 
