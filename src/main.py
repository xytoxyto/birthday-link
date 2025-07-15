# filepath: /Users/bigxyto/birthday-link/backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Blessing(BaseModel):
    message: str
    amount: float
    from_: str

class Recipient(BaseModel):
    name: str
    age: int
    photo: str
    story: str
    goal: float
    raised: float
    daysLeft: int

recipient = Recipient(
    name="Antonio",
    age=33,
    photo="",
    story="Antonio is hosting a rooftop bash with live music, cake, and matching birthdays.",
    goal=500,
    raised=320,
    daysLeft=12
)
blessings = [
    Blessing(message="Happy Birthday Antonio! 🎉", amount=25, from_="Jane"),
    Blessing(message="Enjoy the DJ Upgrade!", amount=100, from_="John"),
]

@app.get("/recipient", response_model=Recipient)
def get_recipient():
    return recipient

@app.get("/blessings", response_model=List[Blessing])
def get_blessings():
    return blessings

@app.post("/blessings", response_model=Blessing)
def create_blessing(blessing: Blessing):
    blessings.append(blessing)
    return blessing