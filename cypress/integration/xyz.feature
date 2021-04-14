Feature: Search a product




  Scenario: In order to search a product in the West Elm application
    Given open the west elm website
    When user search a product in the search box of home page
    Then user should be displayed PIP page

  Scenario: add to cart

    When user select the finish, qty and add to cart
    Then item is added to cart
    And select another shade, finish and qty
# And select another finish
# And add the qty

