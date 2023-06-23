Feature: Bookcar Application Test

Scenario: Login should be succesfull
Given user navigates to the Bookcart Application
And user clicks on the login button
And user enters the username
And user enters the password
When user clicks in the login button
Then login should be successful