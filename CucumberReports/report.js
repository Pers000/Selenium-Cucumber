$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\features\\login.feature");
formatter.feature({
  "name": "Auth Test",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderPage.userClicksOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should be success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User enter the username as \"monsterthutty\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.userEnterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the password as \"Pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.userEnterThePasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.userClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.loginShouldBeSuccess()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login link",
  "keyword": "And "
});
formatter.match({
  "location": "HeaderPage.userClicksOnTheLoginLink()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login should not be success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User enter the username as \"monsterthutty\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.userEnterTheUsernameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the password as \"asdsad\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.userEnterThePasswordAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.userClickOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should fail",
  "keyword": "But "
});
formatter.match({
  "location": "LoginPage.loginShouldFail()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});