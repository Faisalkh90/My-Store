# MyStore
***
## Project Summary

Build single-page application (SPA) by using [Angular](http://angularjs.org) to offer a rich, dynamic experience on the web. an e-commerce website – an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

***
## Key features and functionalities
- <b> Product list page:</b> Displays the user's available products in various quantities


- <b>Product details page:</b>  More information about a certain product is displayed


- <b>Shopping cart:</b> It contains the products that the user has placed in their shopping cart


- <b>Checkout:</b> Gathers information about the user in order to place an order (e.g., name, address, payment details, etc.)


- <b>Order confirmation:</b> Displays the result when the user has completed the checkout procedure

- <b>data.json: </b> The list of products is retrieved by using the HttpClient service to read the data.json file
*** 
## What I learned

- Components
  - The list of products is retrieved from an external API or by using the HttpClient service to read the provided data.json file.
- Data Flow
  - When information needs to be shared between parent and child components, the application uses the @Input decorator.
  - Conversely, when sending data from a child component to its parent component, the application uses the @Output decorator and EventEmitter class.

- Routing
  - The application uses the ``` <router-outlet> ``` placeholder and the ```routerLink``` attribute in HTML templates.
  - As a single-page application, the page does not reload during navigation.

***
## Setup
Make sure you installed the `npm`
- `npm install`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
***
## Tools
- TypeScript
- Angular
- HTML
- CSS
- Bootstrap

