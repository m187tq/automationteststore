Feature: Verification of Registration functionality

  @Register
  Scenario: user should be able to Register with valid credentials
    Given user on index page url as https://automationteststore.com and page title as A place to practice your automation skills!
    When user clicks on Login Or Register link
    And user should be on account login page with option to login as RETURNING CUSTOMER or create an Account as I am a returning customer.
    And user verifies register account radio button is checked and clicks on Continue button
    And user is on account create page and verifies page heading as CREATE ACCOUNT and page Url contains ?rt=account/create
    And user is in personal details in Your Personal Details
    And user enters First Name box as FirstName
    And user enters Last Name box as LastName
    And user enters fresh email in E-Mail box
    And user enters telephone and fax number
    And user on Address Section as Your Address
    And user enters Company name as YourCompanyName
    And user enters Address One box as YourAddress1
    And user enters Address Two box as YourAddress2
    And user enters city name in City box as Manchester
    And user selects Region or State from Dropdown box as Lancashire
    And user enters ZIP Code box as M11 IPT
    And user selects Country name from dropdown box as United Kingdom
    And user on login section as Login Details
    And user enters loginName in Login name box
    And user enters password in Password box as Password@123
    And user enters Confirm password in Password Confirm box as Password@123
    And user subscribed to Newsletter and check on Yes
    And user ticks on read and agree to the Privacy Policy radio button
    And user clicks on Continue button
    Then user gets success confirmation message as YOUR ACCOUNT HAS BEEN CREATED!
    And user gets congratulatory message as Congratulations! Your new account has been successfully created!
    And user clicks on ContinueAccountSuccess button
    Then user should be presented with welcome message as Welcome back
    When user clicks on logoff button and logout Continue Button
    #And user on index page url as https://automationteststore.com and page title as A place to practice your automation skills!
