const ireland = await Deno.readTextFile("ireland/emails.txt").split("\n")
const england = await Deno.readTextFile("england/emails.txt").split("\n")

function verify_email(email) {
    const email_domain = email.split("@")[1]

    if (email_domain in ireland) {
        return "Ireland"
    } else if (email_domain in england) {
        return "England"
    } else {
        return "Fail"
    }
}

export default verify_email