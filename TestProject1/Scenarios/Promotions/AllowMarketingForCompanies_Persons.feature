Feature: AllowMarketingForCompanies&Persons

 @AllowingMarketingForCompany 
  Scenario:1 Allowing Marketing for companies
   Given I am logged in Ingenta Commercial Application
    When I click on Customer Management
    And I click on Companies
    And I click "All Companies" view
    And I open information panel for a Company "Company_754_61"
    And I click on Profile tab for Company
    And I click on Marketing subtab for Company
    And I check the Marketing Allowed checkbox for Company
    Then Marketing Allowed checkbox for Company should be checked
    
 @AllowingMarketingForPerson  
  Scenario:2 Allowing Marketing for persons
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Management
    And I click on Persons
    And I click "All Persons" view
    And I open information panel for a Person "South_40_79 Public"
    And I click on Profile tab for Person
    And I click on Marketing subtab for Person
    And I check the Marketing Allowed checkbox for Person
    Then Marketing Allowed checkbox for Person should be checked