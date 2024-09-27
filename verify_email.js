const ireland_file = await Deno.readTextFile("ireland/emails.txt")
const england_file = await Deno.readTextFile("england/emails.txt")

const ireland = ireland_file.split('\n')
const england = england_file.split('\n')

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
