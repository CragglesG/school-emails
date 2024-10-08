# School Email Verifier
This is a handy tool to verify whether an email is from a primary or secondary school that is recognised by a government
institution.

## Installation

*Note: this project uses Deno and will not run with Node.js*

Installation is simple, all you have to do is clone this repo into your working directory:

````commandline
git clone https://github.com/CragglesG/school-emails
````

All done! You can now import the ``verifyEmail`` function into your JavaScript program.

## Usage Guide

Using ``verifyEmail``  is super easy, all you have to do is import it and call it with an email. You can import
it from the ``school-emails`` directory which you cloned into:

```javascript
import verifyEmail from './school-emails/verify_email.js'
```

Now you can call the function to verify an email:

````javascript
verifyEmail("email@example.com")
````

The ``verifyEmail`` function will either return the country that the school is located in or simply ``Fail`` if the
email does not belong to a recognised school.
