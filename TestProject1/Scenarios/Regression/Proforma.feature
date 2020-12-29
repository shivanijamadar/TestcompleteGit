Feature: Proforma

@Proforma
  Scenario: Verifying order process with order made into Proforma
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "account one"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I enter default P/O ref "Proforma123"
    And I click on Apply button
    And I select Order Process Type "Proforma" 
    And Order Date should be Today's date and Order Process Type should be "Proforma"
    And Order Type should be "Proforma" and The Currency Type should be "UK Sterling"
    And Billing Plan should be "Advance Charge"
    And I change the Release Priority to "Immediate"
    And I click on the red arrow
    And Pages should be close
    And The P/O Reference should be display 

    And I add products in order basket
    And The products should be display in the order basket
    
    
    And I edit the Order Qty for all the products in the input field Quantity 3
    And All the orders from order basket should be display as Supplied
    
    
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    
    And values should be correctly display in the supply and totals column
    And I click on Checkout button
    
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window documents
    And created order should be Proforma
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I search for the customer "account one"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open correct profile of person record "Streamline Sterling"
    And I click on Ledger tab
    And I click on Find Option from Other Actions
    And I enter Document Reference in Find field
    And Our order should not be display under Ledger tab
    And I close the Records
    And Inventory should remain unchanged for all products in order basket
    
    
    