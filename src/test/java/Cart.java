import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Cart {

    @When("^I click on the first article with the keyword (.*?)")
    public void clickOnFirstArticle(String keyword) {
        driver().findElements(By.cssSelector("._9c44d_3pyzl")).get(0).
                findElements(By.cssSelector("article")).get(0)
                .click();
    }

    @Then("^I land on the -oferta- page")
    public void landedOnOfertaPage() {
       assert(driver().getCurrentUrl().contains("oferta"));
    }

    @When("^I press the -add to cart- button")
    public void pressAddToCartButton() {
        driver().findElement(By.cssSelector("#add-to-cart-button")).click();
    }

    @Then("^The cart articles counter should be equal to (.*?)")
    public void assertCartArticlesCount(int count) {
        assert(driver().findElement(By.cssSelector("div[data-role=cart-quantity]")).getText().contains(""+count));
    }

    @When("^I press the -continue shopping- button")
    public void pressContinueShoppingButton() {
        driver().findElement(By.cssSelector("button[data-analytics-interaction-label=continueShopping]")).click();
    }

    @When("^I press the -cart- button")
    public void pressCartButton() {
        driver().findElements(By.cssSelector("a[href=\\/koszyk]")).get(0).click();
    }

    @When("^I remove first item from the cart")
    public void removeFirstItemFromCart() {
        driver().findElement(By.cssSelector("section._9f0v0:nth-child(4) > seller-offers:nth-child(1) > div:nth-child(2) > item:nth-child(1) > div:nth-child(1) > div:nth-child(2) > offer-row:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1) > i:nth-child(1)")).click();
    }
    private WebDriver driver() {
        return General.webDriver;
    }
}
