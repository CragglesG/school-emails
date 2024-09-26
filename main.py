import pandas

with open("data.xlsx", "rb") as f:
    data = pandas.read_excel(f, sheet=1)

emails = data["email"]

fmt_emails = []

for email in emails:
    split_email = email.split("@")
    fmt_emails.append()