# Configuring a GraphQL server with AppSync

## Creating an AppSync GraphQL Server

In the AWS console navigate to AWS AppSync and click the "Create API" button

![AppSync Menu](https://i.ibb.co/DD1pyHM/Screen-Shot-2021-05-27-at-11-09-03-AM.png)

In the next screen select the "Build from scratch" option and click Start

![GraphQL Menu](https://i.ibb.co/wrP3bDv/Screen-Shot-2021-05-27-at-11-10-51-AM.png)

Choose a name for your API

![AppSync Menu](https://i.ibb.co/SN2FJDN/Screen-Shot-2021-05-27-at-11-11-12-AM.png)

You will be taken to the "Getting Started" menu. From here click "Edit Schema" to create a GraphQL Schema for your API

![AppSync Menu](https://i.ibb.co/j45SL9n/Screen-Shot-2021-05-27-at-11-15-57-AM.png)

The following Schema defines a simple data type called "Document" which has an ID, Name, and a URL. You can learn more about GraphQL Schemas [here](https://graphql.org/learn/schema/). Click "Save Schema" once the Schema has been written.

![AppSync Menu](https://i.ibb.co/bRqHRT6/Screen-Shot-2021-05-27-at-11-23-04-AM.png)

AWS allows you to automatically create a Data Table using DynamoDB based on a GraphQL type and connect it to your GraphQL server. To do this click the "create resources" button 


In the next menu click "use existing type" and use the dropdown menu to choose the "document" type. Give the table a name and then scroll down and click the "Create Table" button. You now have a DynamoDB table that will store information about your Documents
![AppSync Menu](https://i.ibb.co/NxpJ6Gf/Screen-Shot-2021-05-27-at-11-25-06-AM.png)

## Adding a Document to the Table TODO: SET THIS UP TO POPULATE AUTOMATICALLY FROM S3 (IF TIME)

You can add a new Document to the DynamoDB table by navigating to the "queries" section in the AppSync menu for your API and using a Mutation to add a new Document. AWS makes writing this mutation easier with the following steps

1. In the Dropdown menu, change from "Query" to "Mutation" and hit the "+" button next to the dropdown menu
2. In the section below the Dropdown Menu, open the "createDocument" tab and select "name" and "url" under input
3. next to the check boxes you can enter the name and URL of the document. In my case I am using an image called "World Map" that is stored in an S3 Bucket
4. Hit the orange "run" button to run the mutation. The rightmost box will confirm if the mutation was successful.

![Instructions](https://i.ibb.co/GCpT76k/Screen-Shot-2021-05-27-at-12-00-15-PM.png)

Now that the GraphQL API has been created and connected to a data source, It can be called by the Library prototype once the API Key and Link have been passed to the Prototype

## Setting up the Library Prototype with the GraphQL server

Click on the "settings" section of your AppSync API, you should see fields for API_URL and API KEY
These should be passed into the Library Prototype as environment variables REACT_APP_API_URL and REACT_APP_API_KEY respectively. This can be added in a .env file or passed through the shell (can we assume the user knows how to do this?)
You can learn about passing environment variables [here](https://create-react-app.dev/docs/adding-custom-environment-variables/)
(//general question for Paul: when making these kinds of documentations, what kind of "tech literate" assumptions can we make??//)



