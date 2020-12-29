﻿var productSeries;
var author;

When("I open a company information panel for {arg}", function (customerName){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customerName);
  customer = customerName;
  
  clickSearchBtn();
  handleProductsGrid();
});

function clickSearchBtn(){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
}

function handleProductsGrid(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}

When("I click on Profile Tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Profile");
});

When("I click on Marketing Tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.ClickTab("Marketing");
});

When("I click on Interests Tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.ClickTab("Interests");
});

When("I click on New to open New Companies Interests Record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(16, 17);
});

When("I select Interest Type {arg}", function (interestType){ 
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.SetFocus();

  let ddInterestType = Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.InterestTypeID").WinFormsObject("LookupSearchCombo").WinFormsObject("EmbeddableTextBoxWithUIPermissions", "");
    
  ddInterestType.Click();
  ddInterestType.Keys(interestType);
  ddInterestType.Keys("[Tab]");
});

function t()
{
  
}

function SetNumber()
{
  try
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.SetFocus();
    //number = aqConvert.VarToInt("E");
    
  }
  catch (e)
  {
   // Log.Error("Unable to set the Number property value.", e.description);
  }
}

When("I check the Always Supply checkbox", function (){
 Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.AlwaysSupply").WinFormsObject("chkInternal").wState = cbChecked;
});

When("I enter Customer Reference {arg}", function (customerReference){
  let txtCustomerReference = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.CustomerReference").WinFormsObject("txtInner");

  txtCustomerReference.Click();
  txtCustomerReference.SetText(customerReference);
});

When("I enter Valid From Today's date", function (){
  let dateFrom = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.ValidFromDate").WinFormsObject("txtInner");

  dateFrom.Click();
  dateFrom.SetText(aqDateTime.Today());
});

When("I click on Criteria Tab", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").ClickTab("Criteria");
});

When("I enter Product Series {arg}", function (productSeriesPar){
  let ddProductSeries = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.ProductSeriesID").WinFormsObject("txtLink");

  ddProductSeries.Click();
  ddProductSeries.SetText(productSeriesPar);
  productSeries = productSeriesPar;
  ddProductSeries.Keys("[Tab]");
});

When("I click on General tab", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").ClickTab("General");
});

When("I click Save and Close Form", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.Group Box.1").WinFormsObject("MainGroupBox").Click();
   
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record and Close Form");
});
 

When("I open the Series record", function (){
  let radGridView = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PT.OTC.Companies").WinFormsObject("PT.OTC.Companies.Companies.TabControl").WinFormsObject("tabMain").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.TabControl").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  for(i;i<records;i++){
    let name = radGridView.wValue(i,5).OleValue;
    if(aqString.StrMatches("Ser:", name)){
      radGridView.DblClickRowIndicator(i);
    }
  }
});

Then("Name frame should display the product series starting with Ser:", function (){
  //  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.Group Box.2").WinFormsObject("MainGroupBox").Click(222, 7);
 //Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").Click();
  let name =  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Name").WinFormsObject("txtInner").get_Text();

   if((aqObject.CompareProperty(name, cmpContains, productSeries, true, 3))  &&  (aqObject.CompareProperty(name, cmpContains, "Ser:", true, 3))){
    Log.Checkpoint("Data displayed under Name frame is Correct");
    }
  else{
   Log.Error("Data displayed under Name frame is Incorrect");
   }
});



Then("I click Save and Close Form", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.Group Box.1").WinFormsObject("MainGroupBox").Click(); 
    
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record and Close Form");
});

Then("I click on New to open New Companies Interests Record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click();
});

Then("I select Interest Type {arg}", function (interestType){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.Group Box.2").WinFormsObject("MainGroupBox").Click(503, 58);
  let ddInterestType = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.InterestTypeID").WinFormsObject("LookupSearchCombo");
  
  ddInterestType.Click();
  ddInterestType.ClickItem(interestType);
  ddInterestType.Keys("[Tab]");
});

Then("I click on Criteria Tab", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").ClickTab("Criteria");
});

Then("I enter an Author {arg}", function (authorPar){
  let txtAuthor = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.AuthorID").WinFormsObject("txtLink");
  
  txtAuthor.Click();
  txtAuthor.SetText(authorPar);
  author = authorPar;
});

Then("I click on new Interest Classifications Record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.Sub-Type Control.1").WinFormsObject("_AptifyControlBase_Toolbars_Dock_Area_Top").ClickItem("SubType|New");
});

Then("I select Interest Classification Type {arg}", function (classificationType){
  let ddClassificationType = Sys.Process("Aptify Shell").WinFormsObject("SubTypeTemplateForm").WinFormsObject("PTInterestClassifications.Form").WinFormsObject("PTInterestClassifications.Tabs").WinFormsObject("tabMain").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General.LookupTree").WinFormsObject("LookupSearchCombo");
  
  ddClassificationType.Click();
  ddClassificationType.ClickItem(classificationType);
  ddClassificationType.Keys("[Tab]");
});

Then("I enter Interest Classification Code {arg}", function (classificationCode){
  let ddClassificationCode = Sys.Process("Aptify Shell").WinFormsObject("SubTypeTemplateForm").WinFormsObject("PTInterestClassifications.Form").WinFormsObject("PTInterestClassifications.Tabs").WinFormsObject("tabMain").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General.LookupTree").WinFormsObject("LookupSearchCombo");
  
  ddClassificationCode.Click();
  ddClassificationCode.Keys(classificationCode);
});

Then("I click Ok", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I open the Author record", function (){
  let radGridView = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PT.OTC.Companies").WinFormsObject("PT.OTC.Companies.Companies.TabControl").WinFormsObject("tabMain").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.TabControl").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  for(i;i<records;i++){
    let name = radGridView.wValue(i,5).OleValue;
    if(aqString.StrMatches("Aut:", name)){
      radGridView.DblClickRowIndicator(i);
    }
  }
});

Then("Name frame should display the author name starting with Aut:", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General.Group Box.2").WinFormsObject("MainGroupBox").Click(503, 58);
  let name =  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Name").WinFormsObject("txtInner").get_Text();


   if((aqObject.CompareProperty(name, cmpContains, author, true, 3))  &&  (aqObject.CompareProperty(name, cmpContains, "Aut:", true, 3))){
    Log.Checkpoint("Data displayed under Name frame is Correct");
    }
  else{
   Log.Error("Data displayed under Name frame is Incorrect");
   }
});

When("I enter Standing Orders Quantity {arg}", function (qty){
  let txtQuantity = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Quantity").WinFormsObject("txtInner");

  txtQuantity.Click();
  txtQuantity.SetText(qty);
});

When("I click on Save Form", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").ClickTab("Criteria");
  
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record");
});


Then("I enter Standing Orders Quantity {arg}", function (qty){
  let txtQuantity = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Quantity").WinFormsObject("txtInner");

  txtQuantity.Click();
  txtQuantity.SetText(qty);
});

When("I minimze", function (){
  Aliases.Aptify_Shell.FormTemplateForm.Minimize();
});

When("I enter Valid From a Date Last Year", function (){
  let dateFrom = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.ValidFromDate").WinFormsObject("txtInner");
  let date = aqDateTime.AddDays(aqDateTime.Today(), 5);
  dateFrom.Click();
  dateFrom.SetText(aqDateTime.AddMonths(date, -12));
});

When("I enter Valid To Yesterday", function (){
  let dateTo = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.ValidToDate").WinFormsObject("txtInner");
  
  dateTo.Click();
  dateTo.SetText(aqDateTime.AddDays(aqDateTime.Today(), -1));
});

When("I enter Author {arg}", function (authorPar){
  let txtAuthor = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.AuthorID").WinFormsObject("txtLink");
  
  txtAuthor.Click();
  txtAuthor.SetText(authorPar);
  author = authorPar;
});

When("I select Product Sub type {arg}", function (productType){
  let ddProductSubType = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.SubTypeID").WinFormsObject("LookupSearchCombo");
  
  ddProductSubType.Click();
  ddProductSubType.ClickItem(productType);
  ddProductSubType.Keys("[Tab]");
});

When("I select Audience Type {arg}", function (audienceType){
  let ddAudienceType = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.AudienceTypeID").WinFormsObject("LookupSearchCombo");
  
  ddAudienceType.Click();
  ddAudienceType.ClickItem(audienceType);
  ddAudienceType.Keys("[Tab]");
});

When("I enter Imprint {arg}", function (imprint){
  let ddImprint = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.OrganizationID").WinFormsObject("LookupSearchCombo");
  
  ddImprint.Click();
  ddImprint.ClickItem(imprint);
  ddImprint.Keys("[Tab]");
});

When("I select Interest Classification Type {arg}", function (classificationType){
  let ddClassificationType = Sys.Process("Aptify Shell").WinFormsObject("SubTypeTemplateForm").WinFormsObject("PTInterestClassifications.Form").WinFormsObject("PTInterestClassifications.Tabs").WinFormsObject("tabMain").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General.LookupTree").WinFormsObject("LookupSearchCombo");
  
  ddClassificationType.Click();
  ddClassificationType.ClickItem(classificationType);
  ddClassificationType.Keys("[Tab]");
});

When("I enter Interest Classification Code {arg}", function (classificationCode){
  let ddClassificationCode = Sys.Process("Aptify Shell").WinFormsObject("SubTypeTemplateForm").WinFormsObject("PTInterestClassifications.Form").WinFormsObject("PTInterestClassifications.Tabs").WinFormsObject("tabMain").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General").WinFormsObject("PTInterestClassifications.Tabs.General.LookupTree").WinFormsObject("LookupSearchCombo");
  
  ddClassificationCode.Click();
  ddClassificationCode.Keys(classificationCode);
});

When("I click Ok", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("Name frame should display the selection criteria correctly", function (){
  throw new NotImplementedError();
});

When("I click on new Interest Classifications Record", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.Sub-Type Control.1").WinFormsObject("_AptifyControlBase_Toolbars_Dock_Area_Top").ClickItem("SubType|New");
});



