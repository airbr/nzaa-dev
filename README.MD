
# Quickstart

* Prerequisites:
 * MongoDB
 * NPM

1. Clone the repo `git clone https://github.com/airbr/nzaa-dev`
2. Install Node packages `npm install`
3. Start the express server `npm start`
4. Assuming #3 is successful, browse to `localhost:3000` in your preferred browser

An early deployment of this project without full functionality is [online at Heroku](https://secure-waters-81035.herokuapp.com/) 






Leaving this inspirational quote previous-me put here. You get em Morgan !

> I am always open for help and suggestions, the technologies in this project in the back-end were a brave new world for me! You can find me at `@atlbridge` on Twitter.

## Screenshots

Barebones front-page
![](https://i.imgur.com/uyvHVnt.png)


##### WDI7 Project 2 Summary:

This project was originally createdto meet the [technical requirements of Project 2 for WDI7](https://github.com/ATL-WDI-Curriculum/projects/blob/master/project2.md). The NZAA is a real-world local civic organization that has been active since the 1996 Olympics in Atlanta and has held yearly events since. This project aims to assist the association in storing, sharing, and distributing minutes of the associations activities with a kiwiana flavour.

[The current organisation has a humble website that has served them functionally well for over a decade since the Olympics but they have allowed me to begin volunteer work on a replacement website.](http://www.atlantanz.org/)

I look forward to working on this project in the future to fully substitute for the older website.

###Info

* [Technical specifications for WDI7 Project 2](https://github.com/ATL-WDI-Curriculum/projects/blob/master/project2.md)

* [Trello used in development of this project](https://trello.com/b/VjQBkaa1/project-2-ronr)

Technical summary:
--

This project intends to produce a minimum viable product of a MEN Stack application that performs CRUD operations on 2 models that are associated and use RESTful API practices.

[Passport is used for user signup and login strategies, authentication and authorization.](authentication and in effect authorization.)

The models for this app are `users` and `minutes`. These are associated as as the `_id` of the `currentUser` is written to the minutes document when it is created by the correctly authorized user. All minutes are viewable by all users at  `/minutes` and these minutes display the `'minutes.author'` property that is `=== 'user._id'` of the currentUser who created the minutes. 

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
* Heroku

