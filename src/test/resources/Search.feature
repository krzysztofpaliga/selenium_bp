Feature: Searching for products

  I want to be able to search for products

  @search
  Scenario: Search for disinfectant fluid
    Given I open the -allegro home- page
    When  I press the -consent- button
    And   I search for "płyn dezynfekujący"
    And   I press the -search- button
    Then  I see at least 5 articles

  @search
  Scenario: Search for gloves
    Given I open the -allegro home- page
    When  I press the -consent- button
    And   I search for "rękawiczki"
    And   I press the -search- button
    Then  I see at least 5 articles

  @search
  Scenario: Search for masks
    Given I open the -allegro home- page
    When  I press the -consent- button
    And   I search for "maseczka"
    And   I press the -search- button
    Then  I see at least 5 articles
