![Logo](docs/images/terraso-logo.png)
# Terraso Library

The Terraso Library is a Progressive Web App that allows the user to view documents (images, PDFs, text files, etc.) and store them for offline reading. This was created as part of the [1000 Landscapes Project](https://techmatters.org/project/1000-landscapes/) primarily to research the functionality and limitations of Progressive Web Apps. This relies on Amazon Web Services: AppSync, DynamoDB, and Amazon S3.

## Using the Terraso Library
The homepage contains an overview viewer:
<br><img src="docs/images/home.png" width="800">

You can change languages using a dropdown menu. English, French and Spanish are available.
<br><img src="docs/images/languages.png" width="800">

The Documents page contains a list of Documents (fetched from a GraphQL API)
<br><img src="docs/images/list-documents.png" width="800">

You can click (or tap, if on mobile) on buttons to open a Document.
<br><img src="docs/images/read-pdf.png" width="800">

Clicking (or tapping) the heart button next to each Document will favorite that document, adding it to the Cache and making that document available offline.
<br><img src="docs/images/favorite.png" width="800">

The Terraso Library is a Progressive Web App (PWA) and can be installed to the homescreen of a mobile device. [How to install a Progressive Web App onto the homescreen of a mobile device.](https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/#:~:text=Installing%20a%20PWA%20on%20iOS&text=Navigate%20to%20the%20website%20you,like%20a%20native%20iOS%20app)

## For developers

### Prerequisites
Before using the Terraso Library, install git, node and npm. You will also need an Amazon Web Services (AWS) account to configure it like we have. It should work without AWS, but we don't have instructions for that.

### Installation
```
git clone https://github.com/techmatters/terraso-library-prototype
cd terraso-library-prototype
npm install
npm run start
cp .sample.env .env
```

### Setting up an AWS Resources
* [Set up an S3 bucket to host documents](docs/S3-CONFIG.md)

* [Setting up an AppSync GraphQL server](docs/GRAPHQL.md)

* [Hosting on Amplify](docs/AMPLIFY.md)

### Project Summary
* [Summary of the Goal/Purpose of the Terraso Library](docs/project-summary.pdf) outlines some of the design choices and and difficulties encountered during the project as well as features that could be implemented in the future
