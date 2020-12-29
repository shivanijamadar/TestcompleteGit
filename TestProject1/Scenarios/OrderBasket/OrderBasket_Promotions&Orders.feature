Feature: OrderBasket_Promotions&Orders

@PromotionsAndOrders
  Scenario: Verifying Promotions code to generate Invoice note under Documents window
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on Campaigns
    And I click on All Campaigns
    And I enter "Mxc Sports campaign" in Search Campaigns
    And I click on Promotions/Mailings
    And I click on Node Promotions
    And I open Promotion record "MXC Sports 2" 
    And I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Rave sole Trader"
    And I click on Red colour Arrow
    And I enter Product Name On Order Id wizard "MXC Sports - Football"
    And I enter P/O Refrence "prod578"
    And I enter Qty 4
    And I select Seller Information Sold By "Streamline Distribution"
    And I click on Add Button to displayed product in the section below with correct information
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Promotions tab
    And I enter a Promotion Code 
    And I click on Search button for promotions
    And I select a promotion code
    And I click on Apply Promotion
    And I click on blue colour right facing arrow
    And I click on Order Line Promotions icon from action buttons in the order line
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I navigate to Orders Homepage
    And I click on Billing Wave Release
    And I click on Refresh button from the action list icon in the window Documents
    Then Invoice note should be present in Documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice