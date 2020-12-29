Feature: ConfirmSetsMade
 
 @ConfirmSetsMade
  Scenario: Confirming sets made
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Sets Make & Break
    And I enter a set in Product "Ravesetproduct12"
    And I select the checkbox Confirm Sets Made Up
    And I select the transaction
    And I click on Next button
    And I enter size 5 to make sets
    And I enter Packets 1 to make sets
    And I enter Qty Loose 1 to make sets
    And I select the products listed
    And I click on Confirm Sets Madeup
    And I click OK to confirm the transaction
    Then Product set should be displayed in the list below
    And I click on Finish
    And I open product set information panel
    And I click Manage Inventory sub tab
    And I select the recent transaction
    And I click on Loose to Forward 
    And I click Ok to message stating 'record(s) Loose moved to Forward Location'
    And I confirm all the pending transactions 
    And confirmed products should be cleared from all transactions
    And I click on Finish button to close Confirm Transactions window
    And I click Save Record and Close Form button
    And I open information panel for first product in Set 
    And I click Overview sub tab
    And Made into Sets and Disposal Qty should be displayed
    And I click Save Record and Close Form button
    And I open information panel for second product in Set
    And I click Overview sub tab
    And Made into Sets and Disposal Qty should be displayed
    And I click Save Record and Close Form button
    
    