Feature: Demo web shop feature
Scenario: Login demo web shop scenario for valid users
Given The URL of the demo web shop "http://demowebshop.tricentis.com/login"
When user enters "askmail@email.com" as email
And user enters "abc123" as password
And user clicks on login button
Then user is in valid page