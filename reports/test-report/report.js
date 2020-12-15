$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('Cart.feature');
formatter.feature({
  "line": 1,
  "name": "I want to handle allegros cart manipulation",
  "description": "",
  "id": "i-want-to-handle-allegros-cart-manipulation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Adding some gloves to the cart should increase article count by 1",
  "description": "",
  "id": "i-want-to-handle-allegros-cart-manipulation;adding-some-gloves-to-the-cart-should-increase-article-count-by-1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@cart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the -allegro home- page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I press the -consent- button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I search for \"maseczka\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the first article with the keyword \"MASECZKA\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I land on the -oferta- page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the -add to cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press the -continue shopping- button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The cart articles counter should be equal to 1",
  "keyword": "Then "
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 9111890995,
  "status": "passed"
});
formatter.match({
  "location": "General.pressConsentButton()"
});
formatter.result({
  "duration": 2392316787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"maseczka\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 981895567,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 8623145167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"MASECZKA\"",
      "offset": 46
    }
  ],
  "location": "Cart.clickOnFirstArticle(String)"
});
formatter.result({
  "duration": 8725951825,
  "status": "passed"
});
formatter.match({
  "location": "Cart.landedOnOfertaPage()"
});
formatter.result({
  "duration": 29651197,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressAddToCartButton()"
});
formatter.result({
  "duration": 1214857430,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressContinueShoppingButton()"
});
formatter.result({
  "duration": 1951381065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "Cart.assertCartArticlesCount(int)"
});
formatter.result({
  "duration": 140731995,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Adding some medical gloves, masks and disinfectant fluid to the cart should increase article count by 3",
  "description": "",
  "id": "i-want-to-handle-allegros-cart-manipulation;adding-some-medical-gloves,-masks-and-disinfectant-fluid-to-the-cart-should-increase-article-count-by-3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@cart"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open the -allegro home- page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I press the -consent- button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I search for \"maseczka\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the first article with the keyword \"MASECZKA\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I land on the -oferta- page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I press the -add to cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I press the -continue shopping- button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I open the -allegro home- page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I search for \"rękawiczki medyczne\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the first article with the keyword \"RĘKAWICZKI\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I land on the -oferta- page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I press the -add to cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I press the -continue shopping- button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I open the -allegro home- page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I search for \"płyn dezynfekujący\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on the first article with the keyword \"PŁYN\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I land on the -oferta- page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I press the -add to cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I press the -continue shopping- button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The cart articles counter should be equal to 3",
  "keyword": "Then "
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 7629026804,
  "status": "passed"
});
formatter.match({
  "location": "General.pressConsentButton()"
});
formatter.result({
  "duration": 1751065486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"maseczka\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 1145172569,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 7902947681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"MASECZKA\"",
      "offset": 46
    }
  ],
  "location": "Cart.clickOnFirstArticle(String)"
});
formatter.result({
  "duration": 6261022480,
  "status": "passed"
});
formatter.match({
  "location": "Cart.landedOnOfertaPage()"
});
formatter.result({
  "duration": 69414106,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressAddToCartButton()"
});
formatter.result({
  "duration": 1237623163,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressContinueShoppingButton()"
});
formatter.result({
  "duration": 3157887176,
  "status": "passed"
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 4104160885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"rękawiczki medyczne\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 1599649051,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 6080309963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"RĘKAWICZKI\"",
      "offset": 46
    }
  ],
  "location": "Cart.clickOnFirstArticle(String)"
});
formatter.result({
  "duration": 5817797005,
  "status": "passed"
});
formatter.match({
  "location": "Cart.landedOnOfertaPage()"
});
formatter.result({
  "duration": 197796301,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressAddToCartButton()"
});
formatter.result({
  "duration": 1162096044,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressContinueShoppingButton()"
});
formatter.result({
  "duration": 3065316361,
  "status": "passed"
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 4143058107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"płyn dezynfekujący\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 1558098023,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 6859220048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"PŁYN\"",
      "offset": 46
    }
  ],
  "location": "Cart.clickOnFirstArticle(String)"
});
formatter.result({
  "duration": 5899728384,
  "status": "passed"
});
formatter.match({
  "location": "Cart.landedOnOfertaPage()"
});
formatter.result({
  "duration": 21382941,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressAddToCartButton()"
});
formatter.result({
  "duration": 1069073716,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressContinueShoppingButton()"
});
formatter.result({
  "duration": 2239969364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 45
    }
  ],
  "location": "Cart.assertCartArticlesCount(int)"
});
formatter.result({
  "duration": 2712622087,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Adding masks, medical gloves and removing masks should increase article count by 1",
  "description": "",
  "id": "i-want-to-handle-allegros-cart-manipulation;adding-masks,-medical-gloves-and-removing-masks-should-increase-article-count-by-1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@cart"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "I open the -allegro home- page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I press the -consent- button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I open the -allegro home- page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I search for \"maseczka\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on the first article with the keyword \"MASECZKA\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I land on the -oferta- page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I press the -add to cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I press the -continue shopping- button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I open the -allegro home- page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I search for \"rękawiczki medyczne\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on the first article with the keyword \"RĘKAWICZKI\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I land on the -oferta- page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I press the -add to cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I press the -continue shopping- button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I press the -cart- button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I remove first item from the cart",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "The cart articles counter should be equal to 1",
  "keyword": "Then "
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 7953034349,
  "status": "passed"
});
formatter.match({
  "location": "General.pressConsentButton()"
});
formatter.result({
  "duration": 2481323615,
  "status": "passed"
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 3741489314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"maseczka\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 739486901,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 7767045937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"MASECZKA\"",
      "offset": 46
    }
  ],
  "location": "Cart.clickOnFirstArticle(String)"
});
formatter.result({
  "duration": 5842131390,
  "status": "passed"
});
formatter.match({
  "location": "Cart.landedOnOfertaPage()"
});
formatter.result({
  "duration": 134019806,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressAddToCartButton()"
});
formatter.result({
  "duration": 1759892737,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressContinueShoppingButton()"
});
formatter.result({
  "duration": 3737523235,
  "status": "passed"
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 2890879810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"rękawiczki medyczne\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 1201823183,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 8154707935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"RĘKAWICZKI\"",
      "offset": 46
    }
  ],
  "location": "Cart.clickOnFirstArticle(String)"
});
formatter.result({
  "duration": 7241216334,
  "status": "passed"
});
formatter.match({
  "location": "Cart.landedOnOfertaPage()"
});
formatter.result({
  "duration": 57677100,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressAddToCartButton()"
});
formatter.result({
  "duration": 1297824778,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressContinueShoppingButton()"
});
formatter.result({
  "duration": 3026160105,
  "status": "passed"
});
formatter.match({
  "location": "Cart.pressCartButton()"
});
formatter.result({
  "duration": 4770865260,
  "status": "passed"
});
formatter.match({
  "location": "Cart.removeFirstItemFromCart()"
});
formatter.result({
  "duration": 1768010015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "Cart.assertCartArticlesCount(int)"
});
formatter.result({
  "duration": 1187657426,
  "status": "passed"
});
});