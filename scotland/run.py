import pandas

with open("data.xlsx", "rb") as f:
    data = pandas.read_excel(f, sheet_name=2)

emails = data["Unnamed: 9"]

emails = emails.tolist()

fmt_emails = []

for i, email in enumerate(emails[:len(emails)-1]):
    if type(email) != str:
        continue
    elif "@" not in email:
        continue
    else:
        split_email = email.split("@").pop()
        if split_email not in fmt_emails:
            fmt_emails.append(split_email)

with open("emails.txt", "w") as f:
    f.write('\n'.join(fmt_emails))