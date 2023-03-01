
# Under The Hood

## Description

A vehicle maintenance reminder, tracking and scheduling application.

This project in

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Application Prep

**Prerequisites** Install this application on a server with Node.js and Express.js already installed.

In the Top Level Folder
- `npm install --save-dev concurrently`

In the /client directory
- `npm install @apollo-client graphql jwt-decode

In the /server directory
- `npm install --save-dev nodemon`
- `npm install apollo-server-express bcrypt express graphql jsonwebtoken mongoose`

**NOTE** The above steps were used to install dependencies during app development.  These steps should *not* be necessary to install and run this application.  See *installation* steps below for setting up the application for your own use.

## Installation

After you clone the repository...

- From the top Level older, open a terminal window and run `npm run install`.  This will install all dependencies for the top level, as well as the /client and /server.

- From the same location, run `npm run develop` to start both client and server applications simultaneously in Development mode.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

The following individuals worked together to create this application:

- [Maggie Delaney](https://github.com/maggierdelaney)
- [Isabella Pettini](https://github.com/isabella-pettini)
- [Parker Scully](https://github.com/Pscully21)
- [Jessica Oboh](https://github.com/JessicaOB)
- [Sean Collins](https://github.com/iseanc)

## License

[MIT License](/LICENSE).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
