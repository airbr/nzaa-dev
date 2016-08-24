# Project2-RONR
## README

Key links:

[Project 2 Specifications](https://github.com/ATL-WDI-Curriculum/projects/blob/master/project2.md)

[Trello](https://trello.com/b/VjQBkaa1/project-2-ronr)

[Incomplete Project Deployed with Heroku](https://secure-waters-81035.herokuapp.com/)

About:
--
This project intends to produce a MVP of a MEN Stack application performing CRUD operations on 2 associated models. It should use RESTful API practices.

This app is for a basic association with a constitution that uses Roberts Rules of Order and needs to keep records minutes of meetings with the requirement that all members be able the view the minutes.

The web page allows users to sign up accounts and currently for testing purposes are automatically made board members (role: "boardMember").

Board members are able to create new minutes which are viewable by all users including regular users. Newly created minutes contain a property of author with the currentUser._id.
This allows for another user to login and see the user ID of who created minutes.


Update: V1.1

There are significant bugs encounted in the first version that has been deployed to Heroku, losing the ability to access boardMember functions. For testing, by default, new users will be administrator users.





Technologies used:
--
Node.JS
Mongo DB
Express JS
Mongoose
Bootstrap
CSS
HTML 5
Amazon Web Services

Critical Node Modules including:
--
Passport



References
--
This project was begun with substantial help from the following starter code primarily for its implementation of password functions:

[Express Security with Passport](https://github.com/ATL-WDI-Curriculum/express-security-with-passport)



