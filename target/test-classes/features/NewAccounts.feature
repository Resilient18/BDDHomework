@NewAccountsFeature 
Feature: TechFios Bank and Cash New Account Functionality Validation

Background: 
Given User is on the Techfios login page 

@Scenario1
Scenario Outline: User should be able to login with valid credentials and open a new account 

When User enters username as "<username>" 
When User enters password as "<password>" 
When User clicks signin button 
Then User should land on dashboard page 
And User clicks bankCash button 
When User clicks newAccount
#Then User should land on addNewAccount page 
Then User enters accountTitle as "<accounttitle>"
Then User enters description as "<description>"
Then User enters initialBalance as "<balance>"
Then User enters accountNumber as "accountNumber" 
Then User enters contactPerson as "<contactPerson>" 
Then User enters phoneNumber as "<phoneNumber>" 
Then User enters internetBankingUrl as "<internetBankingUrl>" 
And User clicks submit button 


Examples: 

|username         |password|accounttitle     |description    |balance|accountNumber|contactPerson |phoneNumber|internetBankingUrl|
|demo@techfios.com|abc123 | MyCheckingAccount|TestingBDDCodes|150000|145667        |Raji          |23455555| www.google.com|
