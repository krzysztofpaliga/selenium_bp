import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class SearchSteps {

    @When("^I search for (.*?)")
    public void searchFor(String article) {
        driver().findElement(By.cssSelector("input[data-role=search-input]")).sendKeys(article);
    }

    @When("^I press the -search- button")
    public void pressSearchButton() {
        driver().findElement(By.cssSelector("button[data-role=search-button]")).click();
    }

    @Then("^I see at least (.*?) articles")
    public void assertNArticles(int count) {
        assert(driver().findElements(By.cssSelector("article")).size() >= count);
    }

    private WebDriver driver() {
        return General.webDriver;
    }
}
