import pandas as pd

data = pd.read_csv("dataset/anxiety_dataset.csv")

data['text'] = data['text'].str.lower()

label_map = {
    "low":0,
    "moderate":1,
    "high":2
}

data['label'] = data['label'].map(label_map)

print(data.head())
