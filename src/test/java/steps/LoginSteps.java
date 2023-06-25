package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	WebDriver driver;
	
	@Given("user navigates to the Bookcart Application")
	public void userNavigatesToTheBookcartApplication() {
		 driver = new ChromeDriver();
		 driver.get("https://bookcart.azurewebsite.net/");
		 System.out.println(driver.getTitle());
	}

	@And("user clicks on the login button")
	public void userClicksOnTheLoginButton() {
		 
		 
	}

	@And("user enters the username")
	public void userEntersTheUsername() {
		driver.findElement(By.cssSelector("input[formcontrolname='username']")).sendKeys("ponsta360v6@gmail.com"); 
	}

	@And("user enters the password")
	public void userEntersThePassword() {
		driver.findElement(By.cssSelector("input[formcontrolname='password']")).sendKeys("Pass123!");	 
	}

	@When("user clicks in the login button")
	public void userClicksInTheLoginButton() {
		 
		 
	}

	@Then("login should be successful")
	public void loginShouldBeSuccessful() {
		 
		 
	}

	@When("Login shoul fail")
	public void loginShoulFail() {
		 
		 
	}

}
