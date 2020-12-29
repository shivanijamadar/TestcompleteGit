Feature: OrderBasket_SetPriceAndInventoryComponents

@SetPriceAndInventoryFromComponents
  Scenario: Set price and inventory components
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "RAVE Sole Trader"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I change the Release Priority to "Immediate"
    And Order Date should be Today's date and Order Process Type should be "Invoice"
    And Order Type should be "Normal Sale" and The Currency Type should be "UK Sterling"
    And Billing Plan should be "Advance Charge"
    And I click on the red arrow
    And I enter Product Name On Order Id wizard "RAVE  Stock From Components"
    And I enter P/O Refrence "product1267"
    And I enter Qty 6
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    And The values should be correctly displayed under Backordered and Totals column
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And Advice note should be displayed in Documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I click on Find Orders from folder list
    And I enter Customer Name "RAVE Sole Trader"
    And I click on Search button
    And Order details should be correctly displayed on Order Query page
    And On Order Query Page Order should be displayed as Backorder
    And Order Type as "AdviceNote" should be displayed
    And Order Status as "Open Order" should be displayed
    And Document reference should be displayed under summary tab
    And I click on Customer Service
    And I open the product record "RAVE Stock From Components"
    And I click on Inventory tab from Product Information Panel
    And Physical and Available column data should be Empty
    And I click on Save Record and Close Form button to close the record
    And I close the search form
    And I open the product record "RAVE Stock From Components Product 1"
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be decreased
    And I click on Save Record and Close Form button to close the record
    And I open the product record "RAVE Stock From Components Product 2"
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be decreased
    And I click on Save Record and Close Form button to close the record
    
    