Feature: OverrideCreditStatusCheck

 @OrderProcessWithOverrideCreditStatusCheck
  Scenario: Testing Order having Override Credit Status flag checked
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "RAVEStopped (Temporary Stop)" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I check the Override Credit Status Check checkbox
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "Amazing Jake and the Green Bay Packers" 
    And I enter P/O Reference code "TSA", Quantity 2, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click on Customer Service
    And I click on New Order button
    And I enter a company "Total Stop" in Ship To field
    And The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I check the Override Credit Status Check checkbox
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "Amazing Jake and the Green Bay Packers" 
    And I enter P/O Reference code "TSA", Quantity 2, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I retrieve the Total Value
    And Payment type should be On Account
    And I select payment type "Check/Cheque" and enter Cheque Number
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I open customer information panel 
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open correct profile "Streamline Sterling"
    And I click on Ledger tab
    And I click on Toggle Zero Outstanding
    And I refresh the page
    And Payment Reference and Base Value should be correctly displayed
    And I click on the Document reference
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open product information panel 
    And available quantity should be decreased
    And I click Save Record and Close Form button