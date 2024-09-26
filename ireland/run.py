import pandas

with open("data.xlsx", "rb") as f:
    data = pandas.read_excel(f, sheet_name=1)

emails = data["Email"]

emails = emails.tolist()

fmt_emails = []

for i, email in enumerate(emails[:len(emails)-1]):
    split_email = email.split("@")
    fmt_emails.append(split_email[1])

with open("ireland-emails.txt", "w") as f:
    f.write('\n'.join(fmt_emails))