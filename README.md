# Pitwall 🏎️
> Helping F1 fans think like race engineers.

Pitwall is a driver fingerprinting and race analysis platform that helps hardcore F1 fans understand races the way a race engineer would. It ingests a full season of telemetry and builds a unique behavioral fingerprint for each driver — breaking down braking aggression, cornering style, tyre management, and restart behavior — all backed by real data.

Understand what makes legends. Understand what makes legendary teams.

---

## What it does

F1 is one of the most data-driven sports in the world. Every tenth of a second on track is determined by decisions made at the pitwall — decisions backed by telemetry, strategy, and deep driver analysis. Pitwall brings that analysis to fans.

Pick any two drivers. Pick any race. See exactly where time was gained or lost, how their driving styles differ, and how they evolve across a season — framed exactly the way a race engineer would think about it.

---

## Core features

- **Driver Fingerprint** — braking aggression, throttle smoothness, and cornering style aggregated across a season into a single visual profile. Who is this driver, really?
- **Driver vs Driver Lap Comparison** — compare two drivers lap by lap at the same circuit. Where did one gain on the other? Which sector made the difference?
- **Safety Car Restart Behavior** — how quickly does a driver go from safety car pace to full racing pace? Measures aggression vs caution at the moment races are won and lost.
- **Tyre Management Insight** — connects braking and throttle style to tyre degradation. Smoother drivers run longer stints. This feature shows you the data behind that.
- **Season Evolution** — same driver, same track, across an entire season or career. How does their performance and style evolve over time?

---

## Tech stack

**Backend**
- Python
- FastAPI
- FastF1
- PostgreSQL
- NumPy + SciPy
- Pandas

**Frontend**
- React
- Recharts
- D3.js

**Deployment**
- Railway (backend)
- Vercel (frontend)

---

## Getting started

```bash
git clone https://github.com/ishika-sancheti/Pitwall.git
cd Pitwall

# Backend
cd pitwall-backend
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

pip install fastapi uvicorn fastf1
uvicorn main:app --reload

# Frontend (new terminal)
cd pitwall-frontend
npm install
npm run dev
```

Backend runs at `http://localhost:8000`

Frontend runs at `http://localhost:5173`

API docs at `http://localhost:8000/docs`

---

## API endpoints

| Endpoint | Description |
|---|---|
| `GET /driverfingerprint?driver=VER&year=2023` | Full behavioral fingerprint for a driver across a season |
| `GET /drivervsdriver/VER/LEC/2023/Monaco` | Head to head lap comparison |
| `GET /safetycarinsight?driver1=VER&driver2=LEC&race=Monaco&year=2023` | Restart aggression comparison |
| `GET /tyremgmt?driver1=VER&driver2=LEC&race=Monaco&year=2023` | Tyre management and degradation analysis |
| `GET /seasonevol?driver=LEC&year=2023&race=Monaco` | Season or career evolution for a driver |

---

## Project status

Currently in active development.

- [x] Backend: FastAPI setup complete
- [x] FastF1 integration complete
- [x] Driver vs driver speed trace chart working
- [ ] Database: PostgreSQL integration pending
- [ ] Remaining 4 features in progress
- [ ] Frontend: UI design in progress

---

## Roadmap

**Phase 2**
- Sim racing data upload — compare your own laps against real F1 drivers
- Weather and track conditions overlay
- User authentication and saved comparisons
- Shareable comparison links

---

## Data source

All telemetry data is sourced via [FastF1](https://docs.fastf1.dev/) — an open source Python library providing access to official F1 timing and telemetry data.
