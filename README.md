# Ground-BnB
This project is a clone of AirBnB.

Regular Installation Setup
--------------------------
1) Clone or Fork this directory - https://github.com/TBrockster/Ground-BnB
2) Run $(sudo npm install) in both /ground-bnb and /ground-bnb/client
3) To run $(npm run) in both /ground-bnb and /ground-bnb/client
4) To run tests, in client run $(npm run jas-test)
5) Install testcafe with $(sudo npm install -g testcafe) - https://devexpress.github.io/testcafe/documentation/getting-started/
6) To run web tests, from client run $(testcafe chrome ./web-tests/web.test.spec)

Initial Developer Installation Setup
------------------------------------
1) Install Node.JS 10.16.0 (Includes NPM 6.9.0) - https://nodejs.org/en/download/
2) Run $(node -v), to confirm node version
---Following - https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3 ---
3) *In the app directory, run $(npm init -y)
4) *In the app directory, run $(npm add express)
5) *In the app directory, run $(touch index.js)
6) *Copy basic express app code into index.js
7) *In the app directory, run $(sudo npm install -g create-react-app)
8) *In the app directory, run $(create-react-app client)

  Inside ground-bnb/client you can run several commands:

    npm start
      Starts the development server.

    npm run build
      Bundles the app into static files for production.

    npm test
      Starts the test runner.

    npm run eject
      Removes this tool and copies build dependencies, configuration files
      and scripts into the app directory. If you do this, you can’t go back!

    We suggest that you begin by typing:

      cd client
      npm start

9) *Add in the line "proxy": "http://localhost:5000" to client/package.json
10) *In the client directory, run $(npm install react-router-dom --save)

User Stories: Headlines
------------

As a Host
So I can list a space
I am able to sign in/out

As a Host
So I can list a space
I am able to sign up

***MVP***
As a Host
So I can list a space
I am able to list a space

As a Host
So I can list all of my properties
I am able to list multiple spaces

As a Host
So I am able to attact clients
I am able to name my space

***MVP***
As a Host
So I am able to attact clients
I am able to provide a description of my space*

As a Host
So I am able to make money
I am able to set a price per night

As a Host
So I am able to fully book my space
I can offer a range of dates for my space

As a Guest
So I can travel
I can request to hire any space for one night

As a Host
So I can maintain my space
I am able to approve bookings for my spaces

As a Guest
So I can avoid double-booking
I am unable to book an already booked property

As a Guest
So I can attempt to get a space
I am able to book a space until a previous booking request is confirmed


User Stories: Nice-to-haves
-------------
As a User
So I can track my sign up
I receive an email when I sign up

As a Host
So I can track my spaces
I receive an email when I create a space

As a Host
So I can track my spaces
I receive an email when I update a space

As a Host
So I can respond quickly
I receive an email when a user requests to book my space

As a Guest
So I know when a booking is accepted
I receive an email when a booking request is confirmed

As a Guest
So I can track my booking request
I receive an email when I request to book a space

As a Guest
So I can track my booking request
I receive an email when a booking request is confirmed

As a Guest
So I can track my booking request
I receive an email when a booking request is denied

As a Host
So I can track booking requests
I receive a text when a user requests to book one of my spaces

As a Guest
So I can track my booking requests
I receive a text when a booking request is confirmed

As a Guest
So I can track my booking requests
I receive a text when a booking request is denied

As a Host
So I can communicate with a Guest
I can use the chat function to message the Guest

As a Guest
So I can communite with a Host
I can use the chat function to message the Host

As a Guest
So I can pay
Stripe allows me to pay