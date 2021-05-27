# Configuring a GraphQL server with AppSync

In the AWS console navigate to AWS AppSync and click the "Create API" button

![AppSync Menu](https://i.ibb.co/N6FSPdN/Screen-Shot-2021-05-27-at-11-09-03-AM.png)

In the next screen select the "Build from scratch" option and click Start

![GraphQL Menu](https://i.ibb.co/wrP3bDv/Screen-Shot-2021-05-27-at-11-10-51-AM.png)

Choose a name for your API

![AppSync Menu](https://i.ibb.co/SN2FJDN/Screen-Shot-2021-05-27-at-11-11-12-AM.png)

You will be taken to the "Getting Started" menu. From here click "Edit Schema" to create a GraphQL Schema for your API

![AppSync Menu](https://i.ibb.co/N6FSPdN/Screen-Shot-2021-05-27-at-11-09-03-AM.png)

The following Schema defines a simple data type called "Document" which has an ID, Name, and a URL. You can learn more about GraphQL Schemas [here](https://graphql.org/learn/schema/). Click "Save Schema" once the Schema has been written.

![AppSync Menu](https://i.ibb.co/N6FSPdN/Screen-Shot-2021-05-27-at-11-09-03-AM.png)

AWS allows you to automatically create a Data Table using DynamoDB based on a GraphQL type and connect it to your GraphQL server. To do this click the "create resources" button

![AppSync Menu](https://i.ibb.co/N6FSPdN/Screen-Shot-2021-05-27-at-11-09-03-AM.png)

In the next menu click "use existing type" and use the dropdown menu to choose the "document" type. Give the table a name and then scroll down and click the "Create Table" button. You now have a DynamoDB table that will store information about your Documents
![AppSync Menu](https://i.ibb.co/N6FSPdN/Screen-Shot-2021-05-27-at-11-09-03-AM.png)
