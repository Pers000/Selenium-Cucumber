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
  "name": "User enter the username as \"ponsta360v6@gmail.com\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[contains(@class,\u0027mat-focus-indicator mat-menu-trigger\u0027)]//span[1]\"}\n  (Session info: chrome\u003d114.0.5735.134)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TAMIDUK\u0027, ip: \u0027172.28.160.1\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.134, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\PERS\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:57452}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5fba9e0f6e8ffe19e8b0d642088af2ce\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(@class,\u0027mat-focus-indicator mat-menu-trigger\u0027)]//span[1]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pages.LoginPage.loginShouldBeSuccess(LoginPage.java:45)\r\n\tat ✽.Login should be success(src\\test\\java\\features\\login.feature:11)\r\n",
  "status": "failed"
});
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
  "name": "User enter the username as \"ponsta360v6@gmail.com\"",
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});