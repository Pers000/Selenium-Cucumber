Feature: Auth Test

  Background: 
    And User click on the login link

  @smoke
  Scenario: Login should be success
    And User enter the username as "ponsta360v6@gmail.com"
    And User enter the password as "Pass1234"
    When User click on the login button
    Then Login should be success

  @smoke
  Scenario: Login should not be success
    Given User enter the username as "ponsta360v6@gmail.com"
    Given User enter the password as "asdsad"
    When User click on the login button
    But Login should fail
