Feature: OrderBasket_MoveInventoryToMakeSets

@MoveInventoryToMakeSets
  Scenario: Move Inventory to make sets
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Sets Make & Break button
    And I select Product "Ravesetproduct12" under Inventory Sets Make and Break window
    And I check the checkbox Move Inventory to Make Sets
    And I select product in the frame 
    And I click on Next button from Inventory Sets Make and Break window
    And I check the checkboxs beside the product name in the frame right side
    And I click on Next button from Inventory Sets Make and Break window
    And I check the checkboxes to select
    And I click on Finish to close the wizard
    Then Inventory Movement should be successfully done
    And I search for the product "Ravesetproduct12"
    And Physical Inventory should be blank under Inventory tab