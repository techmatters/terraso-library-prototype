# Configuring a GraphQL server with AppSync

## Creating a server

* In the [AppSync console](https://console.aws.amazon.com/appsync/home), click "Create API":
* Under "Customize your API or import from Amazon DynamoDB," click "Build from scratch"
* Click Start
* Give your API a name (such as "Terraso Library"):
* Click Create
* Under "Define the schema", click Edit Schema
* Paste in the following GraphQL

```graphql
schema {
	query: Query
	mutation: Mutation
}

type Query {
	getDocuments: [Document]
}

type Mutation {
	getDocuments(id: ID!, name: String, url: String): Document
}

type Document {
	id: ID!
	name: String
	url: String
}
```


This defines a simple data type called "Document" which has an ID, Name, and a URL.

* Click Save Schema

AWS allows you to automatically create a Data Table using DynamoDB based on a GraphQL type and connect it to your GraphQL server.

* Click Create Resources

On the next screen:

* Under "Define or select a type," click "Use existing type"
* Under "Select a type," select "Document"
* Scroll to the bottom and click Create

## Adding documents

1. Inside AWS AppSync > Terraso Library, click on Queries in the left-hand nav.
2. Under Explorer, click on the dropdown menu. Select "Mutation."
3. Click +
4. Click on the triangle beside `createDocument` to show its contents
5. Under createDocument > Input, check name
6. Under createDocument > Input, check url
7. Give your document a name
8. Paste in the Object URL to your document (from your S3 bucket)

You should see something like this:
<br><img src="docs/images/queries-menu" width="800">

9. Click the orange play (>) button

You'll see some JSON containing a document ID if it succeeds.

Repeat steps 7-9 to create additional documents.

Now that the GraphQL API has been created and connected to a data source, It can be called by the Library prototype once the API Key and Link have been passed to the Prototype

## Configure your environment to use the GraphQL server

1. Inside AWS AppSync > Terraso Library, click on Settings in the left-hand nav.

Edit your `.env` file:
* Replace `REACT_APP_API_URL` with the API URL (under API Details)
* Replace `REACT_APP_API_KEY` with Key (under Default authorization mode > Key)

Save your changes in your text editor.
