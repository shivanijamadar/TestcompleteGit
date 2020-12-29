  
Given("I am logged in Ingenta Commercial Application", function Login(){
 // VideoRecorder.Start();

  TestedApps.Advance_Startup_1.Run();

  Aliases.Advance_Startup_1.LoginForm.gbTrusted.txtUserName.Click();

  Aliases.Advance_Startup_1.LoginForm.gbTrusted.txtUserName.SetText("user1");

  Aliases.Advance_Startup_1.LoginForm.gbTrusted.txtPassword.Click();
 
  Aliases.Advance_Startup_1.LoginForm.gbTrusted.txtPassword.SetText(Project.Variables.Password);

  Aliases.Advance_Startup_1.LoginForm.cmdOK.ClickButton();
  
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm", 30000);
  
  Aliases.Aptify_Shell.AptifyShellForm.Maximize();
});

AfterScenario(function (scenario){
 Sys.Process("Aptify Shell").Terminate();
// VideoRecorder.Stop();
})

When("I click on Sales & Marketing", function clickSalesAndMarketing(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.DblClickItem("advance> Home|Sales & Marketing");
});

When("I click on Customer Management", function clickCustomerManagement(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.DblClickItem("advance> Home|Customer Management");
});

When("I click on Product Management", function clickProductManagement(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.DblClickItem("advance> Home|Product Management");
});

When("I click on Customer Service", function clickCustomerService(){
  Aliases.Aptify_Shell.AptifyShellForm.WinFormsObject("WindowDockingArea2").WinFormsObject("DockableWindow2").WinFormsObject("aptifyTree").WinFormsObject("tvwMain").ClickItem("advance> Home|Customer Services");
});

Then("I click on Customer Service", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.ClickItem("advance> Home|Customer Services");
});

Then("I Click on Orders", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
});

When("I click on Inventory", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
});

Then("I navigate to Orders Homepage", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.ClickItem("advance> Home|Orders");
});