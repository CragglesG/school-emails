import pandas

data = pandas.read_csv("results.csv")

domains = data["SchoolWebsite"]

domains = domains.tolist()

fmt_domains = []

for domain in domains:
    if type(domain) == float:
        continue
    domain = (domain.removeprefix("http://")
              .removeprefix("https://")
              .removeprefix("http:")
              .removeprefix("HTTPS:")
              .removeprefix("www.")
              .removesuffix("/"))
    domain = domain.split("/")
    fmt_domains.append(domain[0])

with open("emails.txt", "w") as f:
    f.write('\n'.join(fmt_domains))