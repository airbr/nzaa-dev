
# Quickstart

NB: This project has been deployed [online at Heroku](https://secure-waters-81035.herokuapp.com/) but without full functionality allowed locally as of this ReadMe Commit.

* Prerequisites
 * MongoDB
 * ExpressJS
 * NodeJS

1. Clone the repo `git clone https://github.com/airbr/nzaa-dev`
2. Install Node packages `npm install`
3. Start the express server `npm start`
4. Assuming #3 is successful, browse to `localhost:3000` in your preferred browser



I am always open for help and suggestions, the technologies in this project in the back-end were a brave new world for me! You can find me at `@atlbridge` on Twitter.

## Screenshots

Barebones front-page
![](https://i.imgur.com/uyvHVnt.png)
Snippet: User panel that is displayed logged in as Board member:
![](https://i.imgur.com/I0G6wWT.png)
Snippet: un-styled but functional display of minutes objects:
![](https://i.imgur.com/c4ymp6n.png)


User-panel that is displayed logged in as a regular member:
![](https://i.imgur.com/KPpFobR.png)



##New Zealand Atlanta Project README 
### WDI7 Project 2 Summary:

This project is in development for the New Zealand Atlanta Association and [was chosen to submit for the technical requirements of Project 2 for WDI7](https://github.com/ATL-WDI-Curriculum/projects/blob/master/project2.md). The NZAA is a real-world local civic organization that has been active since the 1996 Olympics in Atlanta and has held yearly events since. This project aims to assist the association in storing, sharing, and distributing minutes of the associations activities with a kiwiana flavour.

[The current organisation has a humble website that has served them functionally well for over a decade since the Olympics but they have allowed me to begin volunteer work on a replacement website.](http://www.atlantanz.org/) This project at the current commit ``DEMO`` represents my development and learning some newer technologies to create a secure and transparent user/login environment.

I look forward to working on this project in the future to fully substitute for the older website.

###Key links:

* [Technical specifications for WDI7 Project 2](https://github.com/ATL-WDI-Curriculum/projects/blob/master/project2.md)

* [Trello using in development of this project](https://trello.com/b/VjQBkaa1/project-2-ronr)

Technical summary:
--

>The "MEN" Stack: **M**ongoDB, **E**xpresSJS, **N**odeJS. 

This project intends to produce a minimum viable product of a MEN Stack application that performs CRUD operations on 2 models that are associated and use RESTful API practices.

[Passport is used for user signup and login strategies, authentication and authorization.](authentication and in effect authorization.)

The models for this app are `users` and `minutes`. These are associated as as the `_id` of the `currentUser` is written to the minutes document when it is created by the correctly authorized user.

All minutes are viewable by all users at  `/minutes` and these minutes display the `'minutes.author'` property that is `=== 'user._id'` of the currentUser who created the minutes. 

>In other words people can see who posted the particular minutes in a RESTful manner. Styling can come later

Technologies used:
--
* Node.JS
 * EJS Template engine 
* Mongo DB
* Express JS
* Mongoose
* Bootstrap
* CSS
* HTML 5
* Amazon Web Services
* Heroku

