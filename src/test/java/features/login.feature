Feature: Bookcar Application Test

  @smoke
  Scenario: Login should be succesfull
    Given user navigates to the Bookcart Application
    And user clicks on the login button
    And user enters the username
    And user enters the password
    When user clicks in the login button
    Then login should be successful

  Scenario: Login should NOT be succesfull
    Given user navigates to the Bookcart Application
    And user clicks on the login button
    And user enters the username
    And user enters the password
    When user clicks in the login button
    But Login shoul fail
