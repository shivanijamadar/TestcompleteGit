﻿Feature: OrderBasketNYPInventory

 @TestingOrderWithNYPProduct
  Scenario: Testing order process when product is Not Yet Published
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "RAVE Sole Trader" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "SJB Stock From Components" 
    And I enter P/O Reference code "NYPI", Quantity 5, seller "Streamline Distribution" 
    And I click on Calculate button
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And Supply Information as 'This product is not available for supply' should be displayed
    And I click on Left facing arrow
    And I retrieve the Total Value
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click refresh on Documents
    And I click on Customer Service
    And I click on Find Orders
    And I enter Customer 
    And I enter Product
    And I click on Search button
    And Line Item Status should be displayed as Backorder
    And I click on the record for Summary 
    And Supply for This transaction and Order Line Summary should be 0
    And I open product information panel for product "SJB Stock From Components Product 1"
    And available quantity should be decreased
    And I click Save Record and Close Form button
    And I open product information panel for product "SJB Stock From Components Product 2"
    And available quantity should be decreased
    And I click Save Record and Close Form button
    

  