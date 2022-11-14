# The Project - Coffee Capital

![CoffeeCapitalLogoTrm](https://user-images.githubusercontent.com/109460560/201080268-01f186c0-8d4e-481e-a636-fd9e0e281aa3.png)


## Motivation of Application Development 

Coffee Capital online order application allows the user to place an order ahead at their local coffee shop, so that it is ready for them to collect when they reach. 

A simple application has been created allowing the user to view the available beverages and food items on the menu, which communicates with the database to place an order in real time. 


## User Story

```md
AS A Customer
I WANT to order coffee online
SO THAT I can collect it when ready

```

## System Architecture and Flow
<img width="809" alt="concept" src="https://user-images.githubusercontent.com/109460560/201594428-daedb201-dc56-4b9d-9862-8fe8b535277b.png">


## Links to Deployed Application
[Link to deployed working application]- https://coffee-capital.herokuapp.com/ 

[Link to Github] - https://github.com/Tim-KS/Coffee-Capital


## Accetance Criteria
```md
GIVEN a customer is presented with the Coffee Capital homepage
The customer is able to able to view the the information about Coffee Capital cafe
THEN customer is also able to view the Coffee Capital cafe menu items with price before signing in
If the customer does not have a sign in ID
WHEN the customer clicks on "Sign up" 
THEN the customer is redirected to the sign up page
THEN the customer is able to sign up using their name, email and password
If the customer already has an accocunt with Coffee Capital
WHEN the customer clicks on "Login" 
THEN the customer is redirected to the login page
THEN the customer logs in using email address and password
WHEN the customer clicks on the menu item
THEN the menu item appears with a description of the cafe item
WHEN the customer clicks on add to cart, the item is added to the cart
THEN the customer the redirected to the homepage to view addtional menu items
THEN the customer is able to add more items to the cart
WHEN the customer has completed their order
THEN the customer clicks on the cart to view the cart items
THEN the customer is displayed with the cart items in their order
WHEN the customer clicks on "Checkout", the order is placed 
THEN the customer is informed that the order is confirmed with payment amount and
THEN the customer recieves an email informing them that their order is ready to pick up

```

## Mock-up

The following video shows an example of the functionality of the application:
 - **Demo Video**


 - **Homepage**
 
 <img width="1920" alt="landing page" src="https://user-images.githubusercontent.com/109460560/201599203-c2e2d71c-97ce-492d-869d-23851265f991.png">

 - **Login Screen**
 - 
 <img width="1920" alt="login-page" src="https://user-images.githubusercontent.com/109460560/201599210-984ab01f-155b-41a7-97fa-274f0b26aa05.png">

 
 - **Login Signup**
 
 <img width="1920" alt="sign-up-page" src="https://user-images.githubusercontent.com/109460560/201599247-c0ad5c4d-8284-4fe5-b6e7-71f31ff1489b.png">


 - **User presented with menu**
 
 <img width="1920" alt="menu" src="https://user-images.githubusercontent.com/109460560/201599263-ec14484c-8315-4ddf-9994-be3c5498e6c8.png">

 
 - **Description provided of the menu item selected**
 
 <img width="1132" alt="item-description" src="https://user-images.githubusercontent.com/109460560/201599297-e28db1fd-66d5-4d25-b02d-c7b365c8d2c0.png">


 - **Order Cart updated**
 
<img width="1920" alt="updated-cart-items" src="https://user-images.githubusercontent.com/109460560/201605871-a33bb032-7a32-4ec0-9961-513d0e809942.png">


 - **Order Summary**
 <img width="579" alt="order summary" src="https://user-images.githubusercontent.com/109460560/201599305-4051d29a-627a-4c52-ac25-73d29e9dcae8.png">


 - **Order Confirmation**
 
 <img width="985" alt="order confirmation" src="https://user-images.githubusercontent.com/109460560/201599321-e3ba950d-64c7-4d82-91fd-afa8021a9e9b.png">

 - **Email sent to the user - order is ready to collect**
  
<img width="818" alt="order-email-sent-to-user" src="https://user-images.githubusercontent.com/109460560/201600648-cc6e67da-23a1-480a-a797-da2a2fd5e8fe.png">

## Installation Requirements

1. Installation of Microsoft Visual Studio
2. Open up Terminal within Microsoft and type in the following commands:
 - npm run seeds
 - npm i
 - npm start

## Future Developments
 - Use transporters other than email (twilio) for orders
 - Multiple Coffee Shops
 - Loyalty points
 - Gift cards
 - Add an admin user to view ALL orders
 - Electronic payment gateway
 - Refine modifications to orders once added to the cart
 - Allow users to see last order
 - Allow users to keep favourites


## Technologies Used

### Front-end
 - JavaScript - to allow users to interact with web pages
 - jQuery - used to minimise the the common tasks of JS
 - css - used for the style and layout of the page
 - bootstrap - used to create web page for Coffee Capital

### Back-end
 - bcrypt - *used to hash passwords*
 - dotenv - *used for environment variables*
 - express-session - *user sessions*
 - express-session-sequelize - *user sessions*
 - express - *for javascript with node*
 - express-handlebars - *used for views*
 - mysql2 - *used to connect to a MySQL database for Models, and create an Express.js API for the Controllers*
 - sequelize - *used to connect to a MySQL database for Models, and create an Express.js API for the Controllers*
 - nodemailer - *for email notifications*

## Authors
 - Tim Kandan-Smith: https://github.com/Tim-KS
 - Sean Wallace: https://github.com/SeanU2022
 - Sanket Panchal: https://github.com/DancingSandwich
 - Bhavika Mevada: https://github.com/bmevada
 
## Presentation
 
Link to presentation:
https://docs.google.com/presentation/d/1zaAPnaO1laEanKa4NJLDgq0o4--l7Ei_rGL40afoBFQ/edit#slide=id.g16bb8dcf656_0_41

# Happy ordering - Best wishes Coffee Capital

<img width="882" alt="happy-coffee" src="https://user-images.githubusercontent.com/109460560/201603652-24b03766-86df-4363-b8cb-ce1b4498e8b0.png">





