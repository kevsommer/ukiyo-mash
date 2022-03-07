from typing import List, Optional

from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    artist_name: str
    object_begin_date: int
    object_end_date: int
    object_url: str
    object_img: str
    elo: int


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True


