![Logo](https://i.ibb.co/1dtk21K/logo-on-green-background-2021-03-10-11am.png)
# Terraso Library Prototype

The Terraso Library Prototype is a Progressive Web App that allows the user to view "documents" (images, pdfs, text files, etc.) And gives them the opportunity to save these documents to be viewed offline. This prototype was created as part of the [1000 Landscapes Project](https://techmatters.org/project/1000-landscapes/) primarily to research the fucntionality and limitations of Progressive Web Apps. This prototype also relies on Amazon services such as AppSync, DynamoDB, and Amazon S3
This Application is currently being hosted [here](https://master.d24bw2t7286rd8.amplifyapp.com/#/)

## Installation 
This content prototype uses npm for package management and can be installed and ran with the following commands
```
npm i https://github.com/techmatters/terraso-library-prototype (currently not working? Ask Paul about security)
npm run start
```
You can also download the Source Code [here](https://github.com/techmatters/terraso-library-prototype/archive/refs/heads/master.zip)

## Using the Terraso Library Prototype
The Homepage contains an overview of the prototype as well as a dropdown menu for changing the language of the application
![homepage](https://i.ibb.co/HpsWG0T/Screen-Shot-2021-05-27-at-4-25-35-PM.png)

The dropdown menu uses i18next to change between languages. English, French and Spanish are available. 
![dropdown](https://i.ibb.co/qd29CKn/Screen-Shot-2021-05-27-at-4-43-37-PM.png)

The Documents page contains a list of Documents (fetched from a GraphQL API)
![documents](https://i.ibb.co/M6z1rG9/Screen-Shot-2021-05-27-at-4-25-56-PM.png)


You can click (or tap, if on mobile) on buttons to open a Document.

Clicking (or tapping) the heart button next to each Document will "favorite" that document, adding it to the Cache and making that document available offline.
![favorite](https://i.ibb.co/nbvZ45H/Screen-Shot-2021-05-27-at-4-26-25-PM.png)

The About Page contains additional information and links to the source code and terraso website

## Setting up an AWS Resources
[Setting up S3 bucket to host documents](https://github.com/techmatters/terraso-library-prototype/blob/master/S3config.md)

[Setting up an AppSync GraphQL server](https://github.com/techmatters/terraso-library-prototype/blob/master/GraphQL.md)
