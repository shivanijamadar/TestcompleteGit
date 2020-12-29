Feature: OrderBasketSundryText

 @EditingSundryText
  Scenario: Changing Sundry Text
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Order button
    And I enter a company "SJB The British Bookshop" in Ship To field
    Then Information Text should be displayed under Ship To field
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "UK Sterling", Billing Plan should be "Advance Charge"
    And I click on Texts sub tab
    And Document, Warehouse, Label and Footnote Texts should not be empty
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", first Product "Rave Rocket  and the Argonauts"  
    And I enter P/O Reference code "INV1", Quantity 2, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I retrieve the Total Value for first product
    And I click Checkout button
    And I click on New Order button
    And I enter a company "The Raven Bookshop" in Ship To field
    And I click Order Attributes tab
    And I click on Texts sub tab
    And I check Custom text checkbox
    And I change the text in Document Text to "Document"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale" and a second Product "Rave Rocket  and the Argonauts" 
    And I enter P/O Reference code "INV2", Quantity 1, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I retrieve the Total Value for second product
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I open customer information panel for "SJB The British Bookshop"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling" 
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed for first customer
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open customer information panel for "The Raven Bookshop"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling" 
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed for second customer
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    
    