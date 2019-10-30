package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class demo1 {
	WebDriver driver;
	
	
	@Given("The URL of the demo web shop {string}")
	public void the_URL_of_the_demo_web_shop(String URL) {
		System.setProperty("webdriver.chrome.driver", "C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		
        driver = new ChromeDriver();
        driver.get("http://demowebshop.tricentis.com/login");
		driver.manage().window().maximize();
		Assert.assertTrue(driver.getTitle().contains("login"));
		}

	@When("user enters {string} as email")
	public void user_enters_as_mail(String email) {
		driver.findElement(By.id("Email")).sendKeys(email);
	}

	@When("user enters {string} as password")
	public void user_enters_as_password(String password) {
		driver.findElement(By.id("Password")).sendKeys(password);
	}

	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.cssSelector("input[value='Log in']")).click();
	    
	}

	@Then("user is in valid page")
	public void user_is_in_valid_page() {
		Assert.assertTrue(driver.findElement(By.linkText("Log out")));
	    
	}



}
