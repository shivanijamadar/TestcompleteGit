Feature: QuotationPayment

 @CreatingQuotaionOrder
  Scenario:1 Creating order with order process as Quotation
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "RAVE Sole Trader" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I enter Default PO Ref "QUOZ" and click Apply
    And I select Order Process Type as "Quotation"
    And I set Release Priority to "Immediate"
    And Order Date should be today, Currency Type should be "UK Sterling",and Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And P/O Ref displayed should be as entered in the Default PO Ref
    And I select a Product "Amazing Jake and the Shaggy Dog" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And columns like Supply, Backordered, Held, Totals should be displayed
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    
  
 @PayingQuotationOrder     
  Scenario:2 Making payment for a Quotaion 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on Find Orders
    And I search for transactions for Customer "RAVE Sole Trader" 
    And I select Order Process Type as "Quotation"
    And I select Order Type as "Quotation"
    And I click Search
    And I select the Quotation order created
    And I click on Release Quotes from Order Release tab
    Then Pop-up window My Pending Basket should be displayed 
    And I click refresh on my pending basket until the record is displayed
    And I select a pending order
    And Open basket button should be enabled
    And I click on Open Basket
    And I retrieve the Supply Value
    And I click on Left facing arrow
    And I make payment 
    And I click Checkout button
    And I close open order query and my pending basket windows
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Invoice generated
    And I click on Customer Service
    And I click on Find Orders
    And I search for transactions for Customer "RAVE Sole Trader"
    And I select Order Process Type as "Quotation" under Order Query
    And I select Order Type as "Quotation"
    And I click Search
    And I select Order Process Type as "" under Order Query to clear filters
    And I click Search
    And I select the first row 
    And Order Status should be Completed Order 
    And I click on the Transactions tab
    And Order value should match the Total Order value on checkout
    And Transactions tab should display quotation and invoice record 
