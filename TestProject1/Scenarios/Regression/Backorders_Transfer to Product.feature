Feature: Backorders_Transfer to Product

@backorderTransferToProduct
  Scenario: Verifying backorders with Transfer to Product process
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open both the products to check the Backorder Figure
    And I click on Manage Backorders
    And I search and select product "BXN Guide to Sports - Badminton"
    And I click On Add Symbol
    And I click on Next button
    And I click on Next button
    And I deselect first order details
    And I click on Next button
    And I click on the icon Copy or Transfer product
    Then Product To link box should be display under Transfer or Copy frame 
    And Product Version field should be disabled
    And Supply site To field should be display with defaulted Supply Site "Watford"
    And Copy checkbox should be display
    And Apply button should be disabled
    And Cancel button should be display
    And Cancel,Back and Next buttons should be display
    And Help, Finish button should be disabled
    And I search and select product to Transfer "BXN Sports - Hockey"
    And I select Supply site from dropdown "Watford"
    And I click on Apply button from backorder wizard
    And I click on Next button
    And I click on Finish button from Backorder Wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window Documents
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "account one"
    And I enter Product name "BXN Sports - Hockey"
    And I click on Search button
    And I open product record and select Inventory Overview tab
    And The backorder figure should be incremented
    And I click on save record and close form button
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "BackOrder"
    And Backorders with Positive number
    And I close the record
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "account one"
    And I enter Product name "BXN Guide to Sports - Badminton"
    And I click on Search button
    And I open product record and select Inventory Overview tab
    And The backordered figure should be reduced by the quantity of the transfer
    And I click on save record and close form button
    And I click on Transactions tab
    And Line Item Status Should be "Backorder Cancel"
    And Backorders with Negative number
    
    
    # we will have to put a comment after feature file // minimum 2 backorders with two different customers are required .... this will make sure whoever picks this script will make that arrangement 
    
   
    
    