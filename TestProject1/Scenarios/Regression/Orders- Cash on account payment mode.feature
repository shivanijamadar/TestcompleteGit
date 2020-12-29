﻿Feature: Orders- Cash on account payment mode

@CashOnAccountPaymentMode
  Scenario: Verifying Orders with Cash On Account payment mode
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Account one"
    And I click on Order attributes tab
    And I select Order Process Type "Invoice" 
    
    And I click on Red colour Arrow
    And I enter Product Name On Order Id wizard "Amazing Jake and the Red Balloon"
    And I enter P/O Refrence "prod5678"
    And I click on Add Item from Order Basket page
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the documents window
    And I open the record from documents window
    
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Product name "Amazing Jake and the Red Balloon"
    And I enter Customer name "Account one"
    And I enter Reference from documents window
    And I click on Search button 
    Then order should be display under order Query page 
    And Order status should be display as "Completed Order" 
    And Order Process Type should be "Invoice"
    
    
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Account one"
    And I click on Order attributes tab
    And I select Order Process Type "Credit Note"
    And I select Order Type "credit into adjustments" 
    And I click on Red colour Arrow
    And I enter same product in Product link box "Amazing Jake and the Red Balloon"
    
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 1
    And I select credit reason "Agent Request"
    And I select cancel reason "Agent Request"
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I refresh the documents window to retrieve the document reference
    
    
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I click on New Order from folder list
    
    And I place a new order with same customer "Account one"
    And I click on Order attributes tab
    And I select Order Process Type "Invoice" 
    And I click on Red colour Arrow
    And I enter different Product Name On Order Id wizard "Amazing Jake and the Green Bay Packers"
    And I enter P/O Reference "prod567"
    And I click on Add Item 
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 4
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I select Payment option "Cash on account"
    And I select row to take the amount from credit
    And I click on Apply button from payment details
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window documents
    
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I search for the customer "account one"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open correct profile of person record "Streamline Sterling"
    
    And I click on Ledger tab
    And I click on Find Option from Other Actions
    And I enter document Reference in Find field
    And Record should be display under Ledger tab
    And I close the Find record window
    
    And I click on Find Option from Other Actions
    And I enter second document Reference in Find field
    And second document reference record should be display under Ledger tab
    And I close the Find record window 
    
    And I click on Fiscal Summary
    And Credits record should be display 
    And I click on save record and close form button 
    And I click on save record and close form button
    And I close the record
    