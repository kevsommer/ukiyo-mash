import requests
import pandas as pd
from tqdm import tqdm 

baseApiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/'

# get all artworks with ukiyo in the name
r = requests.get(baseApiUrl + 'search', params={'q': 'ukiyo'})
ukiyo_objects = r.json()['objectIDs']


artwork_keys = ['objectID', 'title', 'isPublicDomain', 'primaryImage', 'primaryImageSmall', 'medium', 'objectURL', 'artistAlphaSort', 
    'objectBeginDate', 'objectEndDate']

rows = []

print('DOWNLOADING')

for idx, objID in enumerate(tqdm(ukiyo_objects)): 
    r = requests.get(baseApiUrl + 'objects/' + str(objID))
    res = r.json()

    if 'message' in res.keys():
        continue
    rows.append({ k: res[k] for k in artwork_keys})

ukiyo_df = pd.DataFrame(rows)

ukiyo_df[ukiyo_df['medium'].str.contains('Woodblock') | ukiyo_df['medium'].str.contains('Hanging scroll')]
ukiyo_df[ukiyo_df['isPublicDomain'] == True]
ukiyo_df = ukiyo_df.drop(columns=['isPublicDomain'])
ukiyo_df = ukiyo_df.rename({'objectID': 'object_id', 'primaryImage': 'object_img', 'primaryImageSmall': 'object_img_small', 
    'objectURL': 'object_url', 'artistAlphaSort': 'artist_name', 'objectBeginDate': 'object_begin_date', 'objectEndDate': 'object_end_date'})

ukiyo_df['elo'] = 1000

ukiyo_df.to_csv('ukiyo.csv', index=False, sep=';')
print(ukiyo_df)
print('FINISHED')
