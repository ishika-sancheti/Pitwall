from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import fastf1

app=FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_race_data(d1, d2, year, race):
    session=fastf1.get_session(year, race, "Race")
    session.load()
    fastest_d1=session.laps.pick_drivers(d1).pick_fastest()   #fastest lap time of d1
    d1_tel=fastest_d1.get_telemetry()
    fastest_d2=session.laps.pick_drivers(d2).pick_fastest()   #fastest lap time of d2   
    d2_tel=fastest_d2.get_telemetry()
    return {
        "driver1":d1_tel[['Speed', 'Throttle', 'Brake', 'Distance']].to_dict(orient='records'),
        "driver2":d2_tel[['Speed', 'Throttle', 'Brake', 'Distance']].to_dict(orient='records')
        }

@app.get("/")
async def root():
    return {"message":"welcome to pitwall!"}

@app.get("/drivervsdriver/{d1}/{d2}/{year}/{race}")
async def driver_comparison(d1:str, d2: str, race: str, year: int):
        driver= { "d1":d1, "d2":d2, "race":race, "year":year }
        return get_race_data(d1, d2, year, race)