const ireland_file = await Deno.readTextFile("ireland/emails.txt");
const england_file = await Deno.readTextFile("england/emails.txt");
const scotland_file = await Deno.readTextFile("scotland/emails.txt");

const ireland = ireland_file.split("\n");
const england = england_file.split("\n");
const scotland = scotland_file.split("\n");

const common = [
  "gmail.com",
  "eircom.net",
  "hotmail.com",
  "outlook.com",
  "outlook.ie",
  "yahoo.com",
];

function verify_email(email) {
  const email_domain = email.split("@").pop();

  if (common.includes(email_domain)) {
    return "Fail";
  } else if (ireland.includes(email_domain)) {
    return "Ireland";
  } else if (england.includes(email_domain)) {
    return "England";
  } else if (scotland.includes(email_domain)) {
    return "Scotland";
  } else {
    return "Fail";
  }
}

export default verify_email;
