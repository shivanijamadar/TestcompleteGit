Feature: oOrderWithGratisProduct

 @TestingOrdersWithGratisProduct
  Scenario: Transaction process with gratis product to place order
    Given I am logged in Ingenta Commercial Application
    When I click on Orders
    And I click on New Order 
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select a transaction type "Invoice"
    And I select a Sale type "Gratis Item"
    And I select a Product "The Great Escape 3" to Order
    And I select a License ID "Sale"
    And I select a Order Category "Bookshops"
    And I enter a Publisher Ref "ADV12"
    And I select a Gratis Reason "Gratis Content"
    And I enter Quantity 2 to Order
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    Then Checkout page should be displayed without payment method
    And I click Checkout button
    And I click Billing Wave Release
    And I click refresh on Documents
    And Invoice note should be displayed in Documents window as "Order Invoice Advice Note"
    And I open the Invoice generated