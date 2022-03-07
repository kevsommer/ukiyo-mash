from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from database import Base

class Item(Base):
    __tablename__ = "ukiyo"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    artist_name = Column(String)
    object_begin_date = Column(Integer)
    object_end_date = Column(Integer)
    object_url = Column(String)
    object_img = Column(String)
    elo = Column(Integer)
