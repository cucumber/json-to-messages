Feature: step statuses
  Shows the various statuses a step can have upon execution

  Scenario: passed
    When a passed step
    Then a passed step

  Scenario: failed and skipped
    When a failed step
    Then a skipped step

  Scenario: undefined
    Given an undefined step
