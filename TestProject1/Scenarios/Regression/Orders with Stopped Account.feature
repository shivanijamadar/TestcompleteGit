Feature: Orders with Stopped Account

@ordersWithStopAcount
  Scenario: Verifying billing/order process with account that is temporarily stopped
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Total stop"
    And I click on Order Attributes tab
    And I click on Red colour right arrow icon
    And I select book-Paperback product "Flora of the reefs"
    Then Pop-up message should be displayed as "Account Not Open"
    And I click on Ok button from popup
    And I close the Order basket
    And Pop up message should be displayed as "There are no items in this basket. Do you want to discard it?" 
    And I click Yes in the pop up warning messsage to close the window
    