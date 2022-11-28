# ciqstats badge

This is a Serverless Function for Garmin Connect IQ app downloads,reviews,ratings statistics query.

## Showcase

<p align="center">
    <a href="https://apps.garmin.com/en-US/apps/dc6ceca8-6ec6-49f2-b711-4ebc0d347177">Garmin App JumpJump</a> <br>
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=Downloads&query=downloads&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Ddc6ceca8-6ec6-49f2-b711-4ebc0d347177%26domain%3Dall"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=Rating&query=ratings&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Ddc6ceca8-6ec6-49f2-b711-4ebc0d347177%26domain%3Dall"/>
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=Reviews&query=reviews&url=https%3A%2F%2Fciqstats.li2niu.com%2Fapi%2Fstats%3Fappid%3Ddc6ceca8-6ec6-49f2-b711-4ebc0d347177%26domain%3Dall"/>
</p>

## Make Your Own

Make your badges here [Shields.io](https://shields.io/#your-badge)

## Intro

### Local

```
curl http://localhost:3000/api/stats?appid=dc6ceca8-6ec6-49f2-b711-4ebc0d347177&domain=all

{
    "date": "2022_11_28",
    "downloads": "105095",
    "ratings": "4.5",
    "reviews": "306"
}
```

### Online

```
curl https://ciqstats.li2niu.com/api/stats?appid=dc6ceca8-6ec6-49f2-b711-4ebc0d347177&domain=all

```

```
{
    "date": "2022_11_28",
    "downloads": "105095",
    "ratings": "4.5",
    "reviews": "306"
}
```

### Params

| param  | must | type | default | values                                                                                                          | note                                                                           |
| ------ | ---- | ---- | ------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| appid  | Y    | str  |         | dc6ceca8-6ec6-49f2-b711-4ebc0d347177 in https://apps.garmin.com/en-US/apps/dc6ceca8-6ec6-49f2-b711-4ebc0d347177 | The last part of the app url                                                   |
| domain | N    | str  | all     | all,cn,com                                                                                                      | The top doamin of app, Rest of the world(com), China mainland(cn), All(com+cn) |

### Result

| param     | type | note                                                                                                               |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------ |
| date      | str  | The date of the info queried e.g. 2022_11_28                                                                       |
| downloads | str  | The download number of the app                                                                                     |
| ratings   | str  | The rating of the app. If the domain is specified to 'all', the result will be Weighted Average of 'com' and 'cn'. |
| reviews   | str  | The reviews amount of the app                                                                                      |

## Note

[ciqreviews](https://github.com/Likenttt/connect-iq-spam-reviews)
