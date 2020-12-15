$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('Search.feature');
formatter.feature({
  "line": 1,
  "name": "Searching for products",
  "description": "\nI want to be able to search for products",
  "id": "searching-for-products",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for disinfectant fluid",
  "description": "",
  "id": "searching-for-products;search-for-disinfectant-fluid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the -allegro home- page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I press the -consent- button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I search for \"płyn dezynfekujący\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see at least 5 articles",
  "keyword": "Then "
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 6883058254,
  "status": "passed"
});
formatter.match({
  "location": "General.pressConsentButton()"
});
formatter.result({
  "duration": 1178920894,
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
  "duration": 542440319,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 4670855158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "SearchSteps.assertNArticles(int)"
});
formatter.result({
  "duration": 152675826,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search for gloves",
  "description": "",
  "id": "searching-for-products;search-for-gloves",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open the -allegro home- page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I press the -consent- button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I search for \"rękawiczki\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I see at least 5 articles",
  "keyword": "Then "
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 8877784749,
  "status": "passed"
});
formatter.match({
  "location": "General.pressConsentButton()"
});
formatter.result({
  "duration": 1511382431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"rękawiczki\"",
      "offset": 13
    }
  ],
  "location": "SearchSteps.searchFor(String)"
});
formatter.result({
  "duration": 203868802,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 5109910137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "SearchSteps.assertNArticles(int)"
});
formatter.result({
  "duration": 353627096,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search for masks",
  "description": "",
  "id": "searching-for-products;search-for-masks",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I open the -allegro home- page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I press the -consent- button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I search for \"maseczka\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I press the -search- button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I see at least 5 articles",
  "keyword": "Then "
});
formatter.match({
  "location": "General.openAllegroHome()"
});
formatter.result({
  "duration": 9050762468,
  "status": "passed"
});
formatter.match({
  "location": "General.pressConsentButton()"
});
formatter.result({
  "duration": 882404412,
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
  "duration": 939371096,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.pressSearchButton()"
});
formatter.result({
  "duration": 7666685307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "SearchSteps.assertNArticles(int)"
});
formatter.result({
  "duration": 780361563,
  "status": "passed"
});
});