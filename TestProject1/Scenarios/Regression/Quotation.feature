Feature: Quotation

 @CreatingQuotationOrderWithMultipleProducts
  Scenario: Testing order process as Quotation
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "RAVE Sole Trader" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I enter Default PO Ref "TIO" and click Apply
    And I select Order Process Type as "Quotation"
    And I set Release Priority to "Immediate"
    And Order Date should be today, Currency Type should be "UK Sterling",and Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And P/O Ref displayed should be as entered in the Default PO Ref
    And I add products in order basket and enter quantity 5
    And all the products should be displayed in Order Basket as Supplied
    And I edit the orders and change the quantity to 3 
    And I click on Left facing arrow
    And columns like Supply, Backordered, Held, Totals should be displayed
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Invoice generated
    And I click on Customer Service
    And I open customer information panel
    And I navigate to open account profile "Streamline Sterling"
    And I click on Ledger tab
    And I refresh the page
    And Order should not be posted to the Ledger
    And I close customer information panel
    And I click on Find Orders
    And I search for transactions for Customer under Order Query 
    And Order Type should be Quotation
    And I close the Order Query
    And Inventory should remain unchanged for all products in the order basket
    
    
    
    