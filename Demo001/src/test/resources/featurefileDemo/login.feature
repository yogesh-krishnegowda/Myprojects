Feature: Login feauture
Scenario: A valid user scenario
Given The URL of Demo Web Shop Application
When demo web shop user enters askmail@email.com as username
And demo web shop user enters abc123 as password
And demo web shop user clicks on login button
Then user login shall be successful 

Scenario: A valid user scenario
Given The URL of Demo Web Shop Application
When demo web shop user enters askmail1@email.com as username
And demo web shop user enters abc123 as password
And demo web shop user clicks on login button
Then user login shall be successful 