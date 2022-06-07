$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/NewAccounts.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios Bank and Cash New Account Functionality Validation",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewAccountsFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks newAccount",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Then User should land on addNewAccount page"
    }
  ],
  "line": 17,
  "name": "User enters accountTitle as \"\u003caccounttitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters initialBalance as \"\u003cbalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters accountNumber as \"accountNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enters phoneNumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User enters internetBankingUrl as \"\u003cinternetBankingUrl\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accounttitle",
        "description",
        "balance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "internetBankingUrl"
      ],
      "line": 29,
      "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "MyCheckingAccount",
        "TestingBDDCodes",
        "150000",
        "145667",
        "Raji",
        "23455555",
        "www.google.com"
      ],
      "line": 30,
      "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountsStepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 3282077800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@NewAccountsFeature"
    },
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks newAccount",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Then User should land on addNewAccount page"
    }
  ],
  "line": 17,
  "name": "User enters accountTitle as \"MyCheckingAccount\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters description as \"TestingBDDCodes\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters initialBalance as \"150000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters accountNumber as \"accountNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters contactPerson as \"Raji\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enters phoneNumber as \"23455555\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User enters internetBankingUrl as \"www.google.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "AccountsStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3215372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "AccountsStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3086766300,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 6269770800,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 179794700,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinition.user_clicks_bankCash_button()"
});
formatter.result({
  "duration": 3054333300,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinition.user_clicks_newAccount()"
});
formatter.result({
  "duration": 3444657500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyCheckingAccount",
      "offset": 29
    }
  ],
  "location": "AccountsStepDefinition.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 3090208700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestingBDDCodes",
      "offset": 28
    }
  ],
  "location": "AccountsStepDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 3105895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150000",
      "offset": 31
    }
  ],
  "location": "AccountsStepDefinition.user_enters_initialBalance_as(String)"
});
formatter.result({
  "duration": 3090211300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountNumber",
      "offset": 30
    }
  ],
  "location": "AccountsStepDefinition.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 3085020700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raji",
      "offset": 30
    }
  ],
  "location": "AccountsStepDefinition.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 3090893200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23455555",
      "offset": 28
    }
  ],
  "location": "AccountsStepDefinition.user_enters_phoneNumber_as(String)"
});
formatter.result({
  "duration": 3094293000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 35
    }
  ],
  "location": "AccountsStepDefinition.user_enters_internetBankingUrl_as(String)"
});
formatter.result({
  "duration": 99560500,
  "status": "passed"
});
formatter.match({
  "location": "AccountsStepDefinition.user_clicks_submit_button()"
});
formatter.result({
  "duration": 666237800,
  "status": "passed"
});
});