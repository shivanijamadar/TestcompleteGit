Feature: BackordersCopyToProduct

 @CopyingBackordersToAProduct
  Scenario: Testing Orders- Backorders (Copy to Product)
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I retrieve quantity of Confirmed Backorders for From product "Great Barrier reef"
    And I retrieve quantity of Confirmed Backorders for To product "BXN Sports - Netball"
    And I go to Backorder Wizard
    And I enter the From product
    And I click on Blue plus icon to add Product
    And I click Next button 
    And I click Next button 
    And I deselect an Order
    And I click Next button 
    And I click on Copy or Transfer Product icon
    Then fields like Product To, Product Version, Supply Site To should be displayed
    And buttons like Apply as disabled, Cancel and copy checkbox should be displayed
    And buttons like Help and Finish as disabled, Cancel, Back, Next should be displayed
    And I enter To Product
    And I select Supply Site To "Watford"
    And I check the Copy checkbox
    And I click on Apply
    And I click Next button 
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I click on Orders from folder list
    And I run Billing Wave Release
    And I click refresh on Documents
    And I retrieve the document reference 
    And I click on Customer Service
    And I click on Find Orders
    And I search for transactions under Order Query
    And Order Quantity displayed should be correct
    And quantity of Confirmed Backorders should be incremented for From product "BXN Sports - Netball"
    And quantity of Confirmed Backorders should remain unchanged for To product "Great Barrier reef"
    
    