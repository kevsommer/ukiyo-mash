from sqlalchemy.orm import Session
from sqlalchemy.sql.expression import func

import models, schemas


def get_item(db: Session, item_id: int):
    return db.query(models.Item).filter(models.Item.id == item_id).first()

def get_items(db: Session, skip: int = 0, limit: int = 1000):
    return db.query(models.Item).order_by(models.Item.elo.desc()).offset(skip).limit(limit).all()

def get_random_items(db: Session):
    return db.query(models.Item).order_by(func.random()).limit(2).all()

def update_elo(db: Session, item_id: int, new_elo: int):
    db.query(models.Item).filter(models.Item.id == item_id).\
        update({'elo': new_elo}, synchronize_session='evaluate')

    db.commit()
    return
    