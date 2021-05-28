
# Creating and Configuring an S3 Bucket

## Creating an S3 Bucket

After logging into Amazon AWS navigate to Amazon S3 and click the "create bucket" button
![AWS S3](https://i.ibb.co/Gf6VGLv/Screen-Shot-2021-05-27-at-9-24-40-AM.png)


You will be prompted to give your bucket a name (in my case I used "terraso-documents"). Make sure to uncheck the box labeled "block all public access"
![Bucket Creation](https://i.ibb.co/w6CmxV9/Screen-Shot-2021-05-27-at-9-25-14-AM.png)


Making your bucket public will require you to acknoweldge the following statement, after checking this box you can scroll to the bottom of the page and click the button marked "create bucket"
![Statement](https://i.ibb.co/hm0qzkc/Screen-Shot-2021-05-27-at-9-47-03-AM.png)

## Enabling CORS


In order to perform functions like caching in the Terraso Library Prototype you will need to enable CORS (cross origin resource sharing) for all documents in the bucket. In order to do this navigate back to the S3 Console and click on your S3 bucket
![Bucket Menu](https://i.ibb.co/j3YFnf4/Screen-Shot-2021-05-27-at-10-01-32-AM.png)
Click on the Permissions tab and scroll to the bottom of the page to find the CORS configuration and click on the edit button
![Permissions](https://i.ibb.co/cLzmLV9/Screen-Shot-2021-05-27-at-10-02-42-AM.png)
![CORS](https://i.ibb.co/HT8PCbr/Screen-Shot-2021-05-27-at-10-04-11-AM.png)


The following configuration will enable CORS between the S3 bucket and the domains specified.

## Uploading and Accessing Documents

You can now upload documents by going into your S3 bucket and clicking the upload button

![Bucket Menu](https://i.ibb.co/b3H1R2p/Screen-Shot-2021-05-27-at-10-36-22-AM.png)

Clicking on the name of a document will open a menu that contains an object URL, which is a link to that document. If you have configured your public access settings correctly you should be able to view this document by clicking directly on the link

![Document Menu](https://i.ibb.co/VLkDr9N/Screen-Shot-2021-05-27-at-10-22-57-AM.png)

Congratulations, you now have have an S3 bucket capable of hosting documents that can be used by the Terraso Library Prototype. Click here to learn how to configure an AppSync GraphQL server or [here](https://github.com/techmatters/terraso-library-prototype) to go back to the repository




