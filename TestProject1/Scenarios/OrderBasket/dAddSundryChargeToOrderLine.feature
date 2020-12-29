Feature: dAddSundryChargeToOrderLine

 @TestingAddingSundryChargeToOrderLine
  Scenario: Adding sundry charges to a product in order basket
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select a transaction type "Invoice"
    And I select a Sale type "Normal Sale"
    And I select a Product "Amazing Jake and the Red Balloon" to Order
    And I enter P/O Reference code "Scol"
    And I enter Quantity 2 to Order
    And I select a seller "Streamline Distribution" in Sold By field
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Add/ Edit Sundry Charge to Order Line icon
    And I select a Sundry Charge Type "Author Rights"
    And I select a Invoice Group "Streamline Distribution"
    And I select a Organisation "Streamline Distribution"
    And I enter a Charge Value 4
    And I click Save button
    Then details should be displayed below with all the information submitted 

 