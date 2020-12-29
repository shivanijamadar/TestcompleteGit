﻿Feature: OrderBasket_ReserveInventoryToMakeSets

@ReserveInventoryToMakeSets
  Scenario: Verifying set product and paperback product to Reserve Inventory to make sets
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Sets Make & Break button
    And I select Product "Ravesetproduct12" under Inventory Sets Make and Break window
    And I check the checkbox Reserve Inventory To Make Sets
    And I enter Sets Required 10
    And I click on Finish Button
    And I click on OK button from popup window
    And I search for the first paperBack Product "ravepaperbackproduct1"
    And I click on Inventory tab from Product Information Panel
    Then Available Inventory should be less than the Physical Inventory
    And I click on Overview tab from product information panel
    And Awating Set Made-up should be displayed
    And I close the Product Information Panel
    And I search for the second paperBack Product "ravepaperbackproduct2" 
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be less than the Physical Inventory
    And I close the Product Information Panel
    And I search for the Set Product "Ravesetproduct12"
    And I click on Inventory tab from Product Information Panel
    And No Inventory should be displayed under Set Product
     