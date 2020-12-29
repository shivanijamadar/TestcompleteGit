﻿var baseProduct
var newProductWithoutPrefix
var parIdentifierType
var productTitleprefix 
var organization 
var newPrductTitle 
var productSubType
var unitWeightValue


When("I click on New Product from Customer Services", function clickNewProductCS (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.Click();
});

When("I select {arg} from Product Types", function selectProductTypeNewProd (productType){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo.ClickItem(productType);
  productSubType = productType
});

When("I enter without prefix", function enterRandomWithoutPrefix (){
  let productName = "RaveProduct";
  let randomStr = Math.random().toString(36).replace(/[^a-z]+/g, '');
  let withoutPrefix = aqString.Concat(productName," "+randomStr);
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(withoutPrefix);
  baseProduct = withoutPrefix;
});

When("I enter pubdate", function enterPubdateNewProd(){
  let txtPubDate = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  txtPubDate.Click();
  txtPubDate.Keys(aqDateTime.Today());
  txtPubDate.Keys("[Tab]");
});


When("I click on Next Button from Create new product wizard", function clickNextBtnNewProd (){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
});

When("I click on Finish button from Create new product wizard", function clickFinishBtnNewProd (){
  let wizardControl = Aliases.Aptify_Shell.PTProductWizard.WizMain;
  wizardControl.btnFinish.ClickButton();
});

Then("I enter recently created product as Base product", function enterBaseProduct (){
  let lnkBaseProduct = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Products_ProductLookupName.txtLink;
  lnkBaseProduct.SetText(baseProduct);
  lnkBaseProduct.Keys("[Enter]");
});

Then("I click on Finish button", function (){
  Sys.Process("Aptify Shell").WinFormsObject("PTProductWizard").WinFormsObject("WizMain").WinFormsObject("btnFinish").ClickButton();
});

Then("product should be displayed with all the information as given during creation of the record", function checkpointProductDispalyWithAllInfo (){
  let withoutPrefix = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
  let titlePrefix = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_TitlePrefix.txtInner.Text.OleValue;
  let imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Organizations.LookupSearchCombo.Text.OleValue;
  let txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  let clmIdentifierTypeDescription = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_General.Products_Tabs_General.Products_ProductDetails_PTproductIdentifiers.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 1).OleValue;
  
  
  if(aqObject.CompareProperty(titlePrefix, cmpEqual,productTitleprefix, true,3))
  {
    Log.Checkpoint("Same Title Prefix has been display")
  }
  else{
  Log.Error("Different Title Prefix has been display");
  }
  
  if(aqObject.CompareProperty(withoutPrefix, cmpEqual,baseProduct, true,3))
  {
    Log.Checkpoint("Same withoutPrefix has been display")
  }
  else{
  Log.Error("Different withoutPrefix has been display");
  }
  
  
  if(aqObject.CompareProperty(organization, cmpEqual,imprint, true,3))
  {
    Log.Checkpoint("Same oraganisation has been display on product information panel")
  }
  else{
  Log.Error("Different oraganisation has been display on product information panel");
  }
  
  
  if(aqObject.CompareProperty(parIdentifierType, cmpEqual,clmIdentifierTypeDescription, true,3))
  {
    Log.Checkpoint("Same Identifier Type Description has been display on product information panel")
  }
  else{
  Log.Error("Different Identifier Type Description has been display on product information panel");
  }
  
  if(aqObject.CompareProperty(txtProductSubType, cmpEqual,productSubType, true,3))
  {
    Log.Checkpoint("Same product sub type has been display on product information panel")
  }
  else{
  Log.Error("Different product sub type has been display on product information panel");
  }
  
});

Then("All the information of the Base product should be reflected under imprint and without prefix field", function checkpointBaseProductInfoDisplay (){
  Delay(8000);
  let titlewithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
  let titleprefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner.Text.OleValue;
  let imprintname  = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink.Text.OleValue;
  
  
  if(aqObject.CompareProperty(titlewithoutPrefix, cmpEqual,baseProduct, true,3))
  {
    Log.Checkpoint("Same withoutPrefix of Base product has been display")
  }
  else{
  Log.Error("Different withoutPrefix of Base product has been display");
  }
  
  
  if(aqObject.CompareProperty(titleprefix, cmpEqual,productTitleprefix, true,3))
  {
    Log.Checkpoint("Same TitlePrefix of Base product has been display")
  }
  else{
  Log.Error("Different TitlePrefix of Base product has been display");
  }
  
  
  if(aqObject.CompareProperty(imprintname, cmpEqual,organization, true,3))
  {
    Log.Checkpoint("Same imprint of base product has been display")
  }
  else{
  Log.Error("Different imprint of base product has been display");
  }
  
});

Then("I edit Without prefix field", function editWithoutPrefix (){
  let prodName = "BaseProduct";
  let randomStr = Math.random().toString(36).replace(/[^a-z]+/g, '');
  let withoutPrefix = aqString.Concat(prodName," "+randomStr);
  
  
  let txtnewWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtnewWithoutPrefix.Click();
  txtnewWithoutPrefix.Keys("^a [Clear]");
  txtnewWithoutPrefix.SetText(withoutPrefix);
  newProductWithoutPrefix = withoutPrefix;
});


When("I enter Title prefix {arg}", function enterTitlePrefixNewProd (titlePrefix){
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtTitlePrefix.Click();
  txtTitlePrefix.Keys(titlePrefix);
  productTitleprefix = titlePrefix;
});

When("I enter imprint {arg}", function enterImprintNewProd (imprint){
  let lnkImprint = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink;
  lnkImprint.Click();
  lnkImprint.Keys(imprint);
  lnkImprint.Keys("[Tab]");
  organization = imprint;
});

When("I enter description {arg}", function enterDescriptionNewProduct (description){
  let txtDescription = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_Description.txtInner;  
  txtDescription.Click();
  txtDescription.Keys(description);
  txtDescription.Keys("[Tab]");
});

When("I enter Author name {arg}", function enterAuthorName (Authors){
  let txtAuthors = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Authors.txtInner;
  txtAuthors.Click();
  txtAuthors.Keys(Authors);
});

When("I select Dimension Group {arg}", function selectDimensionGrp (dimensionGroup){
  
  let ddDimensionGroup = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_DimensionGroupID.txtLink;
  ddDimensionGroup.Click();
  ddDimensionGroup.Keys(dimensionGroup);
  ddDimensionGroup.Keys("[Tab]");
});

When("I click on New icon", function clickNewBtnDimensionGrp (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I enter value {arg}", function entervalueDimesionGrp (value){
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
  txtValue.Keys(value);
  unitWeightValue = value;
});

When("I select ONIX Unit {arg}", function selectOnixUnit (onixUnit){
  let ddOnixUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
  ddOnixUnit.ClickItem(onixUnit);
});

When("I click on OK button", function clickOkBtnDimensionGrp (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I select Identifier Type {arg}", function selectIdentifierType (identifierType){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.ClickItem(identifierType);
  parIdentifierType = identifierType
});

When("I select range {arg}", function selectRangeIdentifierType (range){
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  subTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo.ClickItem(range);
});

When("I enter copyright year {arg}", function enterCopyrightYrNewProd (copyrightYear){
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;
  txtCopyrightYear.Keys(copyrightYear);
  parcopyrightYear = copyrightYear;
});

When("I select product disount type {arg}", function selectProdDiscountType (productdiscounType){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_ProductDiscountID.LookupSearchCombo.ClickItem(productdiscounType);
});

When("I select fulfilment product type {arg}", function selectFulfilmentProdType(fulfilmentproductType){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_FulfilmentProductTypeID.LookupSearchCombo.ClickItem(fulfilmentproductType);
});


When("I select Type from dimension record {arg}", function selectTypeFromDimensionRecord (type){
  let ddType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
  ddType.ClickItem(type);
  ddType.Keys("[Tab]");
});

Then("I create new product", function createNewProduct (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.ClickButton();
});

Then("I edit Title prefix {arg}", function editTitlePrefixNewProd (titleprefix){
  let txtnewTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtnewTitlePrefix.Click();
  txtnewTitlePrefix.Keys("^a [Clear]");
  txtnewTitlePrefix.SetText(titleprefix);
  newPrductTitle = titleprefix;
});

Then("I enter description {arg}", function enterDescriptionBaseProd (description){
  let txtDescription = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_Description.txtInner;  
  txtDescription.Click();
  txtDescription.SetText(description);
  txtDescription.Keys("[Tab]");
});

Then("I click on Next Button", function (){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
});

Then("I enter pubdate {arg}", function enterPubdateBaseProduct (pubDate){
  let txtPubDate = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  txtPubDate.Click();
  txtPubDate.SetText(pubDate);
  txtPubDate.Keys("[Tab]");;
});

Then("I enter copyright year {arg}", function enterCopyrightYrBaseProd (copyrightYear){
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;
  txtCopyrightYear.Click();
  txtCopyrightYear.SetText(copyrightYear);
});

Then("I check inventory sites to add multiple sites", function checkInventorySites (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_InventorySitesID.dropDownMultiSelect.Click();
  let radTreeView = Aliases.Aptify_Shell.DropDownPopupForm.treeInner;
  radTreeView.CheckItem("New York", true);
  radTreeView.CheckItem("Paris", true);
  
});

When("I click on New icon from Identifiers table", function clickNewBtnFromIdentifiersTable (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I click on Apply button from dimensions group", function clickApplyBtnFromDimensionGrp (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_Apply.Click();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});



Then("Unit weight for base product should be same for newly created product", function checkpointUnitWeightCompare (){
  Delay(2000);
  let C1FlexGrid = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.AptifyControlBase_Fill_Panel.flexSubType;
  let clmUnitWeight = C1FlexGrid.get_Item(5, 2).OleValue;
  
  
  if(aqObject.CompareProperty(clmUnitWeight, cmpEqual,unitWeightValue, true,3))
  {
    Log.Checkpoint("Same UnitWeight for base product has been display")
  }
  else{
  Log.Error("Different UnitWeight for base product has been display");
  }
});

Then("I click on Save Record and Close Form from product information panel", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});
