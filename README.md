# ciq-stats

This is a Serverless Function for Garmin Connect IQ app download,reviews,ratings statistics query.

## Get Started

```
curl http://localhost:3000/api/stats?appid=b4337e65-9333-49e4-9e7b-27e4f68922a1&domain=all&mode=downloads
curl https://connect-iq-spam-reviews.vercel.app/api/stats?appid=b4337e65-9333-49e4-9e7b-27e4f68922a1&domain=all&mode=downloads
```

## Params

| param  | must | type | default   | values                                                                                                          | note                                                                           |
| ------ | ---- | ---- | --------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| appid  | Y    | str  |           | b4337e65-9333-49e4-9e7b-27e4f68922a1 in https://apps.garmin.com/en-US/apps/b4337e65-9333-49e4-9e7b-27e4f68922a1 | The last part of the app url                                                   |
| domain | N    | str  | all       | all,cn,com                                                                                                      | The top doamin of app, Rest of the world(com), China mainland(cn), All(com+cn) |
| mode   | N    | str  | downloads | downloads,reviews,ratings                                                                                       | The data you wanna fetch, downloads,reviews,ratings                            |
