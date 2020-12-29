Feature: OrderTemporaryStoppedAccount

 @OrderWithTemporaryStoppedCustomer
  Scenario: Testing billing/order process with temporarily stopped account
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "RAVEStopped (Temporary Stop)" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "Amazing Jake and the Lost Weekend" 
    And I enter P/O Reference code "TSA", Quantity 1, seller "Streamline Distribution" 
    And Status bar above should display a message 'Account Is On Hold'
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And there should be an icon when hovered should indicate the line is held
    And I click on Edit Line icon
    And Configuration, Valuation, Supply Status, Net, sections should be displayed
    And Backorders, Held, Totals sections should be displayed
    And I click Save button
    And I click on Left facing arrow
    And columns like Supply, Backordered, Held, Totals should be displayed
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I click on Find Orders
    And I enter Customer
    And I enter Product 
    And I click on Search button
    And Line Item Status should be displayed as "Hold"
    And I open product information panel 
    And available quantity should not be decreased
    And I click Save Record and Close Form button
    
    
    