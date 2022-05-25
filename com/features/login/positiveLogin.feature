Feature: Login Page

  @Login
  Scenario Outline: user should be able to login with valid credentials
    Given user on index page url as https://automationteststore.com/ and page title as A place to practice your automation skills!
    When user clicks on Login Or Register link
    And user should be on account login page with option to login as RETURNING CUSTOMER or create an Account as I am a returning customer.
    And user enters login Name as <loginName> and password as <password>
    And user clicks on Login button in account login Page
    Then user should be presented with the following validation message as <loginValidationMessage>
    And user clicks on edit profile button
    And user enters firstName and lastName and emailAddress and telephone and fax in their respective box
    And user clicks on Continue button to confirms profile successful update message as Success: Your account has been successfully updated.
    When user clicks on logoff button and logout Continue Button
    Given user is back on index page url as https://automationteststore.com/ and page title as A place to practice your automation skills!

    Examples:
      | loginName       | password    | loginValidationMessage |
      | datastudioplace | Manchester1 | Welcome back           |