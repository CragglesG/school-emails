import pandas

with open("data.xlsx", "rb") as f:
    data = pandas.read_excel(f, sheet_name=1)

emails = data["Email"]

emails = emails.tolist()

fmt_emails = []

for i, email in enumerate(emails[:len(emails)-1]):
    split_email = email.split("@").pop()
    if split_email not in fmt_emails:
        fmt_emails.append(split_email)

with open("emails.txt", "w") as f:
    f.write('\n'.join(fmt_emails))