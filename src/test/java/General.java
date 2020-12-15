import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class General {

    static {
        System.setProperty("webdriver.gecko.driver","/home/user/Downloads/geckodriver");
    }

    public static WebDriver webDriver;

    @Before
    public void before() {
        webDriver = new FirefoxDriver();
        webDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void after() {
        webDriver.close();
    }

    @Given("^I open the -allegro home- page")
    public void openAllegroHome() {
        webDriver.get("https://allegro.pl");
    }

    @When("^I press the -consent- button")
    public void pressConsentButton() {
        webDriver.findElement(By.cssSelector("button[data-role=accept-consent]")).click();
    }
}
