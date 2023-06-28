#@E2E
Feature: Products test

  @prod @cleanCart
  Scenario Outline: Add to cart
    And user login into the application with "<username>" and "<password>"
    And user search for a "<book>"
    When user add the book to the cart
    Then the cart badge should get updated

    @prod
    Examples: 
      | username      | password | book            |
      | monsterthutty | pass1234 | Roomies         |
      | monsterthutty | pass1234 | The Simple Wild |

    @test
    Examples: 
      | username      | password | book            |
      | monsterthutty | pass1234 | The Simple Wild |
