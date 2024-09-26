import pandas

with open("data.xlsx", "rb") as f:
    data = pandas.read_excel(f, sheet=1)