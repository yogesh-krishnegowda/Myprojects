Feature: Login feauture
Scenario Outline: A valid user scenario
Given The URL of Demo Web Shop Application
When demo web shop user enters <username> as <usertype> username
And demo web shop user enters <password> as password
And demo web shop user clicks on login button
Then user login shall be successful 

Examples:
|username|password|usertype|
|askmail@email.com|abc123|admin|
|askmail@email.com|abc123|guest|
|askmail@email.com|abc123|vendor|