package Login_demo_webshop;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import com.pages.Loginpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Table {
	
	WebDriver driver;
	String username;

		
		@Given("The URL of Demo Web Shop Application")
		public void the_URL_of_Demo_Web_Shop_Application() {
			System.setProperty("webdriver.chrome.driver", "C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
			
	        driver = new ChromeDriver();
	        PageFactory.initElements(driver,Loginpage.class);
			
			//launch browser
			driver.get("http://demowebshop.tricentis.com/login");
			driver.manage().window().maximize();
			}
		    
		

		@When("demo web shop user enters {word} as {word} username")
		public void demo_web_shop_user_enters_askmail_email_com_as_username(String email,String usertype) {
			username=email;
			//driver.findElement(By.id("Email")).sendKeys(email);
			Loginpage.email.sendKeys(email);
			
			
		}

		@When("demo web shop user enters {word} as password")
		public void demo_web_shop_user_enters_abc_as_password(String password) {
			//driver.findElement(By.id("Password")).sendKeys(password);
			Loginpage.password.sendKeys(password);
			
		    
		}

		@When("demo web shop user clicks on login button")
		public void demo_web_shop_user_clicks_on_login_button() {
			
			//driver.findElement(By.cssSelector("input[value='Log in']")).click();
			Loginpage.login.click();
			
		    
		}

		@Then("user login shall be successful")
		public void user_login_shall_be_successful() {
		    
			String s1=driver.findElement(By.xpath("/html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).getText();
			Assert.assertEquals(username, s1);
			System.out.println("login successful");
			driver.close();
			

		// TODO Auto-generated method stub

	

}
}
 


