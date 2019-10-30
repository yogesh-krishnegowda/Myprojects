$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefileDemo/Table.feature");
formatter.feature({
  "name": "Login feauture",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "A valid user scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Demo Web Shop Application",
  "keyword": "Given "
});
formatter.step({
  "name": "demo web shop user enters \u003cusername\u003e as \u003cusertype\u003e username",
  "keyword": "When "
});
formatter.step({
  "name": "demo web shop user enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "name": "demo web shop user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user login shall be successful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "usertype"
      ]
    },
    {
      "cells": [
        "askmail@email.com",
        "abc123",
        "admin"
      ]
    },
    {
      "cells": [
        "askmail@email.com",
        "abc123",
        "guest"
      ]
    },
    {
      "cells": [
        "askmail@email.com",
        "abc123",
        "vendor"
      ]
    }
  ]
});
formatter.scenario({
  "name": "A valid user scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Demo Web Shop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Table.the_URL_of_Demo_Web_Shop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user enters askmail@email.com as admin username",
  "keyword": "When "
});
formatter.match({
  "location": "Table.demo_web_shop_user_enters_askmail_email_com_as_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user enters abc123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "Table.demo_web_shop_user_enters_abc_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Table.demo_web_shop_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login shall be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.user_login_shall_be_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid user scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Demo Web Shop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Table.the_URL_of_Demo_Web_Shop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user enters askmail@email.com as guest username",
  "keyword": "When "
});
formatter.match({
  "location": "Table.demo_web_shop_user_enters_askmail_email_com_as_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user enters abc123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "Table.demo_web_shop_user_enters_abc_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Table.demo_web_shop_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login shall be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.user_login_shall_be_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid user scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Demo Web Shop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Table.the_URL_of_Demo_Web_Shop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user enters askmail@email.com as vendor username",
  "keyword": "When "
});
formatter.match({
  "location": "Table.demo_web_shop_user_enters_askmail_email_com_as_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user enters abc123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "Table.demo_web_shop_user_enters_abc_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "demo web shop user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Table.demo_web_shop_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login shall be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Table.user_login_shall_be_successful()"
});
formatter.result({
  "status": "passed"
});
});