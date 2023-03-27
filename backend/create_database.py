import sqlite3
import pandas as pd

conn = sqlite3.connect('sql.db')
c = conn.cursor()

c.execute('''CREATE TABLE ukiyo(id integer NOT NULL, title text NOT NULL, artist_name text NOT NULL, elo integer NOT NULL,
    object_begin_date integer NOT NULL, object_end_date integer NOT NULL, object_url text NOT NULL, object_img text NOT NULL, 
    object_img_small text NOT NULL, medium text NOT NULL)''')

# load the data into a Pandas DataFrame
items_df = pd.read_csv('ukiyo.csv', sep=';')
items_df['elo'] = 1000
items_df = items_df.dropna()
items_df = items_df.rename(columns={'objectID': 'id', 'artistAlphaSort': 'artist_name', 'objectBeginDate': 'object_begin_date', 
                              'objectEndDate': 'object_end_date', 'objectURL': 'object_url', 'primaryImage': 'object_img',  
                              'primaryImageSmall': 'object_img_small'})

# write the data to a sqlite table
items_df.to_sql('ukiyo', conn, if_exists='append', index = False)