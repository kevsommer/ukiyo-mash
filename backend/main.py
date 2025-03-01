from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import crud
import models
import schemas
from database import SessionLocal, engine
from utils import expected_score, new_score

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# only for development purposes
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/api/items", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip)
    return items


@app.get("/api/items/random", response_model=List[schemas.Item])
def random_items(db: Session = Depends(get_db)):
    items = crud.get_random_items(db)
    return items


@app.get("/api/items/{item_id}", response_model=schemas.Item)
def read_item(item_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item


@app.patch("/api/items/vote/{winner_id}/{loser_id}")
async def update_elo(
    winner_id: int, loser_id: int, db: Session = Depends(get_db)
):
    winner_item = crud.get_item(db, item_id=winner_id)
    if winner_item is None:
        raise HTTPException(status_code=404, detail="Items not found")

    loser_item = crud.get_item(db, item_id=loser_id)
    if loser_item is None:
        raise HTTPException(status_code=404, detail="Items not found")

    E_A = expected_score(winner_item.elo, loser_item.elo)
    E_B = expected_score(loser_item.elo, winner_item.elo)

    winner_new_elo = new_score(winner_item.elo, 1, E_A)
    loser_new_elo = new_score(loser_item.elo, 0, E_B)

    crud.update_elo(db, winner_item.id, winner_new_elo)
    crud.update_elo(db, loser_item.id, loser_new_elo)

    return
