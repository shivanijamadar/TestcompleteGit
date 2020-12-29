Feature: Backorders_TransferToCustomer

@backorderTransferToCustomer
  Scenario: Verifying backorders with Transfer to Customer process
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the Product record
    And I click on Manage Backorders
    And I search and select customer "account two"
    And I click On Add Symbol from Backorder wizard
    And I click on Next button
    And I click on Next button
    And I deselect all the backorder for product "BXN Guide to Sport-Badminton"
    And I click on Next button
    And I click on Customers tab from backorder wizard
    And I click on Copy or Transfer customer
    Then Copy checkbox should be display under Transfer or Copy ship to frame
    And Apply button should be disabled under Transfer or Copy ship to frame
    And Cancel button should be display under Transfer or Copy ship to frame
    And I enter customer name "Rave sole trader" 
    And I click on Apply button from Transfer or Copy ship to frame
    And I click on Next button
    And I click on Finish button from Backorder Wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window Documents
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Product name "BXN Guide to Sports - Badminton"
    And I enter Customer Name "account two"
    And I click on Search button
    And I select the first from customer
    And I click on Transactions tab
    And Line Item Status Should be "Backorder Cancel"
    And Backorders with Negative number
    And I close the record
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Product name "BXN Guide to Sports - Badminton"
    And I enter Customer Name "rave sole trader"
    And I click on Search button
    And I close the search criteria field
    And I select the second To customer 
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "BackOrder"
    And Backorders with Positive number
    And I open product record and select Inventory Overview tab
    And I click on Refresh button from product information panel
    And Backorder figure should be remain unchanged
    
    # we will have to put a comment after feature file // minimum 2 backorders are required .... this will make sure whoever picks this script will make that arrangement 