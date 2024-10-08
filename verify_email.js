let ireland = await Deno.readTextFile("ireland/emails.txt");
let england = await Deno.readTextFile("england/emails.txt");
let scotland = await Deno.readTextFile("scotland/emails.txt");

ireland = ireland.split("\n");
england = england.split("\n");
scotland = scotland.split("\n");

const common = [
  "gmail.com",
  "eircom.net",
  "hotmail.com",
  "outlook.com",
  "outlook.ie",
  "yahoo.com",
];

const studentPatterns = [
    "stu",
    "stud",
    "student",
    "hs",
    "k12"
];

function verifyEmail(email) {
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

function verifyStudentEmail(email) {
  const email_domain = email.split("@").pop();

  if (common.includes(email_domain) || !studentPatterns.includes(email.split("@")[0])) {
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
