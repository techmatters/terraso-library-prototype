# Hosting the Terraso Library from GitHub with Amplify

## Connecting the GitHub repository
* Navigate to https://us-west-1.console.aws.amazon.com/amplify/home?region=us-west-1#/home and click "Get Started" button under Deliver
* Select GitHub and click the Continue button
<br><img src="images/select-github.png" width="800">
* You may be required to Authenticate with GitHub, if so follow the instructions on your screen to Authenticate.
* Once GitHub authorization is successful choose the repository and branch and click next
<br><img src="images/select-repo.png" width="800">
* on "App and Build Settings" click next
* Review the details of your application and then click "Save and Deploy"
* <br><img src="images/review.png" width="800">

## Adding Environment Variables
* in App Settings, click environment variables
<br><img src="images/env-variable-menu.png" width="800">
* click the "Manage Variables" box
* Add variables for REACT_APP_API_KEY and REACT_APP_API_KEY
<br><img src="images/env-variables.png" width="800">
