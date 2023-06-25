$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\features\\login.feature");
formatter.feature({
  "name": "Bookcar Application Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login should be succesfull",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user navigates to the Bookcart Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userNavigatesToTheBookcartApplication()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED\n  (Session info: chrome\u003d114.0.5735.134)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TAMIDUK\u0027, ip: \u0027172.28.160.1\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.134, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\PERS\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63256}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 43c53228faec3de6cdb33bf566ce37eb\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat steps.LoginSteps.userNavigatesToTheBookcartApplication(LoginSteps.java:19)\r\n\tat ✽.user navigates to the Bookcart Application(src\\test\\java\\features\\login.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEntersTheUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEntersThePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks in the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userClicksInTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.loginShouldBeSuccessful()"
});
formatter.result({
  "status": "skipped"
});
});