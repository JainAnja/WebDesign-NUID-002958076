# ASSIGNMENT 9 #

Q 1 :

Application can be executed at <server>:4111/login and that will redirect to /auth which will validate user email and password from mongo db collection users.

Test user: jain.anja_1@northeastern.edu
password: pwsd_1

MVC pattern is implemented with entry point in server.js and routes added to routes/login.js. 
Body parser is used to intercept request body.

Q2, 3 AND 4:

Following components are implemented:
1. Home
2. About
3. Jobs
4. Contact
5. RecommendationForm
6. ReactToaster (Custom implementation of react toaster)
7. Navbar

Dynamic component is rendered in jobs for columns in second row for recommendation form and toast.

App can be executed at localhost:3000
