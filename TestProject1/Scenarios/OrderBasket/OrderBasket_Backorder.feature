Feature: OrderBasket_Backorder

@Backorder
  Scenario: Verifying Backorder to generate advice note under Documents window
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I search the product to check the Inventory "BXN Guide to Sports - Badminton"
    And I click on New Order from folder list
    And I enter Company Name in Ship To "account one"
    And I click on Red colour Arrow
    And I enter Product Name On Order Id wizard "BXN Guide to Sports - Badminton"
    And I enter P/O Refrence "prod56"
    And I enter Qty under Orders Id wizard
    And I click on Add Button to displayed product in the section below with correct information
    And I enter same product again to check the inventory "BXN Guide to Sports - Badminton"
    Then Inventory should be Zero or less than Zero
    And Order should be processed successfully
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 10
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I select Payment Type "On account"
    And I click on Checkout button
    And I click on Find Order from Customer services tab
    And I enter Customer Name "account one"
    And I click on Search button
    And On Order Query Page Order should be displayed as Backorder
    And I close the Order Query Page
    And I navigate to Orders Homepage
    And I click on Refresh button from the action list icon in the window My Open Basket
    And Record should be deleted from the My Open Baskets window
    And I click on Refresh button from the action list icon in the window Recent Orders
    And current order with Order Qty as 10, Bill to Name as "account one" should be displayed in the recent orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window Documents
    And Document Produced and Document Attached both the columns should be checked to generate relevant documents
    And Advice note should be displayed in Documents window
    And I open the document generated
  
    