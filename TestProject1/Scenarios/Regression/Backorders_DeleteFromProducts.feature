Feature: Backorders_DeleteFromProducts

@backorderDeleteFromProducts
  Scenario: Verifying deletes the backordered quantity of product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the Product record for "BXN Sports - Golf"
    And I click on Manage Backorders
    And I search and select product "BXN Sports - Golf"
    And I click On Add Symbol
    And I click on Next button
    And I click on Next button
    And I deselect first order details
    And I click on Next button
    And I click on All tab
    And I click on Products tab from backorder wizard
    And I click on Delete Icon
    And I click on Undo Icon
    And I click on No from popup message
    And I click on Undo Icon
    And I click on Yes from popup message
    And I click on Delete Icon
    And I click on Next button
    And I click on Finish button from backorder wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the documents window
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Product name "BXN Sports - Golf"
    And I enter Reference from documents window
    And I click on Search button
    Then order should be display under order Query page 
    And I close the search criteria field
    And I click on Customer Service
    And I open product record for "BXN Sports - Golf" and select Inventory Overview tab
    And I click on Refresh button from product information panel
    And The Backordered figure should be reduced by the quantity of the Delete
    And I click on save record and close form button
    And I click on Transactions tab
    And Line Item Status Should be "Backorder Cancel"
    And Backorders with Negative number
    
  # we will have to put a comment after feature file // minimum 2 backorders with two different customers are required .... this will make sure whoever picks this script will make that arrangement 