package steps;



import org.junit.Before;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class AccountsStepDefinition extends TestBase {
	
	LoginPage loginpage;
	
	/*
	 * @Before public void beforeRun() { 
	 * initDriver();
	 * 
	 }*/
	
	@Given ("^User is on the Techfios login page$")
	public void User_is_on_the_Techfios_login_page() { 
		initDriver(); 
		driver.get("https://www.techfios.com/billing/?ng=login/");
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.enterUserName(username);
		
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
	    loginpage.enterPassword(password);
	}

	@When("^User clicks signin button$")
	public void user_clicks_signin_button() {
	    loginpage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page()  {
	    Assert.assertEquals("Dashboard- iBilling", loginpage.getPageTitle());
	    takesScreenshot(driver);
	}
	
	@Then("^User clicks bankCash button$")
	public void user_clicks_bankCash_button()  {
		loginpage.clickBankAndCashButton();
	    
	}

	@When("^User clicks newAccount$")
	public void user_clicks_newAccount() {
		loginpage.clickNewAccountButton();
		
	}

	/*
	 * @Then("^User should land on addNewAccount page$") public void
	 * user_should_land_on_addNewAccount_page() {
	 * Assert.assertEquals("Add New Account", "	loginpage.getPageHeading()");
	 * 
	 }*/

	@Then("^User enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String accounttitle)  {
	   loginpage.enterAccountTitle(accounttitle);
	}

	@Then("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) {
	    loginpage.enterDescription(description);
	}

	@Then("^User enters initialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_as(String balance)  {
	    loginpage.enterInitialBalance(balance);
	}

	@Then("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber)  {
	    loginpage.enterAccountNumber(accountNumber);
	}

	@Then("^User enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String contactPerson)  {
	   loginpage.enterContactPerson(contactPerson);
	}

	@Then("^User enters phoneNumber as \"([^\"]*)\"$")
	public void user_enters_phoneNumber_as(String phoneNumber)  {
	    loginpage.enterPhoneNumber(phoneNumber);
	}

	@Then("^User enters internetBankingUrl as \"([^\"]*)\"$")
	public void user_enters_internetBankingUrl_as(String internetBankingUrl)  {
	    loginpage.enterInternetBankingUrl(internetBankingUrl);
	}

	@Then("^User clicks submit button$")
	public void user_clicks_submit_button()  {
	    loginpage.clickSubmitButton();
	}



}
