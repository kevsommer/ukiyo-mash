import sqlite3
import pandas as pd

conn = sqlite3.connect('sql.db')
c = conn.cursor()

c.execute('''CREATE TABLE ukiyo(id integer NOT NULL, title text NOT NULL, artist_name text NOT NULL, elo integer NOT NULL,
    object_begin_date integer NOT NULL, object_end_date integer NOT NULL, object_url text NOT NULL, object_img text NOT NULL)''')

# load the data into a Pandas DataFrame
items = pd.read_csv('ukiyo_new.csv', sep=';')

# write the data to a sqlite table
items.to_sql('ukiyo', conn, if_exists='append', index = False)