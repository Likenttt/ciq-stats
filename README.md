# ciq-stats

This is a Serverless Function for Garmin Connect IQ app download,reviews,ratings statistics query.

## Get Started

### Local

```
curl http://localhost:3000/api/stats?appid=b4337e65-9333-49e4-9e7b-27e4f68922a1&domain=all

{
    "date": "2022_11_28",
    "downloads": "61",
    "ratings": "5.0",
    "reviews": "1"
}
```

### Online

```
curl https://ciqstats.li2niu.com/api/stats?appid=b4337e65-9333-49e4-9e7b-27e4f68922a1&domain=all

```

## Params

| param  | must | type | default | values                                                                                                          | note                                                                           |
| ------ | ---- | ---- | ------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| appid  | Y    | str  |         | b4337e65-9333-49e4-9e7b-27e4f68922a1 in https://apps.garmin.com/en-US/apps/b4337e65-9333-49e4-9e7b-27e4f68922a1 | The last part of the app url                                                   |
| domain | N    | str  | all     | all,cn,com                                                                                                      | The top doamin of app, Rest of the world(com), China mainland(cn), All(com+cn) |

## Note

[ciqreviews](https://github.com/Likenttt/connect-iq-spam-reviews)
