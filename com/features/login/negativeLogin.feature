Feature: Login Page - User Unsuccessful Login attempts


  Scenario Outline: User should NOT be able to login with invalid credentials
    And user enters wrong combination of both login Name as <loginName> or password as <password>
    And user clicks on Login_Button
    Then User gets error message as <loginValidationErrorMessage> and still on Home page title as <pageTitle>

    Examples:
      | loginName       | password      | loginValidationErrorMessage                  | pageTitle     |
      | WrongLoginName  | Manchester1   | Error: Incorrect login or password provided. | Account Login |
      | datastudioplace | WrongPassword | Error: Incorrect login or password provided. | Account Login |
      | WrongLoginName  | WrongPassword | Error: Incorrect login or password provided. | Account Login |
      |                 |               | Error: Incorrect login or password provided. | Account Login |
      | datastudioplace |               | Error: Incorrect login or password provided. | Account Login |
      |                 | Manchester1   | Error: Incorrect login or password provided. | Account Login |