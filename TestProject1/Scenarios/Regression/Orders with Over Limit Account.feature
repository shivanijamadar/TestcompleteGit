Feature: Orders with Over Limit Account

@OrdersWithOverLimit
  Scenario: Verifying Order process with account that has over limit
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Rave sole trader"
    And I click on Red colour right arrow icon
    And I select book-Paperback product "Flora of the reefs"
    And I enter P/o Reference "product123"
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "rave sole trader"
    And I click on Search button  
    Then Order Status should be display "Held Order"
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Hold"
    And I click on Refresh button from transactions tab
    And I click on the link to the Advice Note
    And I close Order Query page 
    And I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Rave sole trader"
    And I click on Red colour right arrow icon
    And I select Zero Price Product "Fine Art 1"
    And I enter P/o Reference "productZero"
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button 
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "rave sole trader"
    And I click on Search button  
    And Order Status should be display "Held Order"
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Hold"
    And I click on Refresh button from transactions tab
    And I click on the link to the Advice Note
    And I close Order Query page 
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Rave sole trader"
    And I click on Order attributes tab
    And I enter Order Type "Gratis Item"
    And I click on Red colour right arrow icon
    And I select Gratis Product "The Tallest Bridge"
    And I enter P/o Reference "productGratis"
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button 
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "rave sole trader"
    And I click on Search button  
    And Order Status should be display "Completed Order" 
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Supply"
    And I click on Refresh button from transactions tab
    And I click on the link to the Invoice
    And I close Order Query page 
      
    
    
    
    