import random

print("AI Exam Anxiety Detector")

name = input("Enter your name: ")

sleep = int(input("How many hours did you sleep last night? "))
stress = int(input("Rate your stress level (1-10): "))
confidence = int(input("Rate your confidence level (1-10): "))

score = stress + (10 - confidence)

if score <= 5:
    result = "Low Anxiety"
elif score <= 10:
    result = "Moderate Anxiety"
else:
    result = "High Anxiety"

print("\nResult for", name)
print("Anxiety Level:", result)