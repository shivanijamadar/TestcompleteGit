Feature: aOrderBasketUItest

 @TestingOrderBasketUI
  Scenario:Testing Order basket UI
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select a transaction type "Invoice"
    And I select a Sale type "Normal Sale"
    And I select a Product "Amazing Jake and the Red Balloon" to Order
    And I enter P/O Reference code "I123"
    And I enter Quantity 2 to Order
    And I select a seller "Streamline Distribution" in Sold By field
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    Then product should be displayed below with all the information submitted
    And Orders ID should be displayed with unique value on top of the page
    And buttons like Edit Line, Delete Line, Add/Edit Sundry Charge to Order Line should be displayed 
    And buttons like Order Line Promotions, Order Line OK should be displayed  
    


    
    
    