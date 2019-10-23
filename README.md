#VINAY_SRIDHARA COMMENTS ON THE PROJECT "moberries-Frontend task"

# LIVE URL : https://moberries-frontend-task.herokuapp.com/
# Please use test card number 4000 0200 0000 0000 for testing

# To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
3) Run command "npm start". Runs the app in the development mode.
   Opens the application in the browser
4) Run command "npm test" to run all the test cases.

# Highlights
- The entire state management is made using the Context-Api
- No props are shared across any of the components
- Every child component of SubscriptionApp component accesses context values using useContext.
- All the event handling and setState are managed in the parent SubscriptionApp component.
- Have used React Hooks like useState in few functional components.
- All child components are functional components
- Used node-sass library for using scss and it's features
- The design is responsive.
- Used normalize.css to reset the css styles.
- Used validator package to validate email and credit card information

# Feature:-
- Subscription plan is rendered initially with the default values. 
- User can select different values in the plan and see the amount payable in the bottom text summary
- Next user can enter his details like name, email and address. All fields are valiated.
- Next user can enter credit card details. All fields are validated. 
- Credit card number with valid format has to be entered. Use 4000 0200 0000 0000 for testing
- Next user can see the overall summary. Once terms and coditions are agreed, user can submit.
- All the state values are finally logged to console

# NOTE: 
- This project could have been done using Redux for state management. 
- As there was no complex state values involved, context-api was decided to use. 