
# Creating an S3 Bucket

After logging into Amazon AWS navigate to Amazon S3 and click the "create bucket" button
![AWS S3](https://i.ibb.co/Gf6VGLv/Screen-Shot-2021-05-27-at-9-24-40-AM.png)


You will be prompted to give your bucket a name (in my case I used "terraso-documents"). Make sure to uncheck the box labeled "block all public access"
![Bucket Creation](https://i.ibb.co/w6CmxV9/Screen-Shot-2021-05-27-at-9-25-14-AM.png)


Making your bucket public will require you to acknoweldge the following statement, after checking this box you can scroll to the bottom of the page and click the button marked "create bucket"
![Statement](https://i.ibb.co/hm0qzkc/Screen-Shot-2021-05-27-at-9-47-03-AM.png)

# Enabling CORS


In order to perform functions like caching in the Terraso Library Prototype you will need to enable CORS (cross origin resource sharing) for all documents in the bucket. In order to do this navigate back to the S3 Console and click on your S3 bucket
![Bucket Menu](https://i.ibb.co/j3YFnf4/Screen-Shot-2021-05-27-at-10-01-32-AM.png)
Click on the Permissions tab and scroll to the bottom of the page to find the CORS configuration and click on the edit button
![Permissions](https://i.ibb.co/cLzmLV9/Screen-Shot-2021-05-27-at-10-02-42-AM.png)
![CORS](https://i.ibb.co/HT8PCbr/Screen-Shot-2021-05-27-at-10-04-11-AM.png)


The following configuration will enable CORS between the S3 bucket and the domains specified.



