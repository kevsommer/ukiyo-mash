import requests
import pandas as pd
from tqdm import tqdm 

baseApiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/'

# get all artworks with ukiyo in the name
r = requests.get(baseApiUrl + 'search', params={'q': 'ukiyo'})
ukiyo_objects = r.json()['objectIDs']


artwork_keys = ['objectID', 'title', 'isPublicDomain', 'primaryImage', 'objectURL', 'artistAlphaSort', 
    'artistBeginDate', 'artistEndDate', 'objectBeginDate', 'objectEndDate']

rows = []

print('DOWNLOADING')

for idx, objID in enumerate(tqdm(ukiyo_objects)): 
    r = requests.get(baseApiUrl + 'objects/' + str(objID))
    res = r.json()
    rows.append({ k: res[k] for k in artwork_keys})

ukiyo_df = pd.DataFrame(rows)
ukiyo_df.to_csv('ukiyo.csv', index=False, sep=';')
print(ukiyo_df)
print('FINISHED')
