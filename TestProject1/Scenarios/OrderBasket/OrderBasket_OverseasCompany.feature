Feature: OrderBasket_OverseasCompany

@OverseasCompany
  Scenario: Verifying Overseas Company 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "RaveOverseas"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I change the Release Priority to "Immediate"
    And I click on the red arrow
    And I enter Product Name On Order Id wizard "Amazing Jake and the Shaggy Dog"
    And I enter P/O Refrence "product1"
    And I enter Qty 1
    And I click on Add Item
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 10
    And I click on Save button from Please Select a Product section 
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    And The values should be correctly displayed in the Supply Column and the Totals should be correct
    And I click on Checkout button
    And I search for the company "RaveOverseas"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open correct profile of person record "Streamline Sterling"
    And I click on Ledger tab from account receivables
    And The correct value should be posted to the Sterling Ledger 
    And I click on Save Record and Close Form button to close the record
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And Invoice note should be present in Documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I open the product record "Amazing Jake and the Shaggy Dog"
    And I click on Inventory tab from Product Information Panel
    And Inventory should be correctly downgraded
    And I click on Save Record and Close Form button to close the record
    And I click on Save Record and Close Form button to close the record 
    
    