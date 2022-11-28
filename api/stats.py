import os
import io
from flask import Flask, Response
from flask import request
import json
import ciqreviews as ciq
from datetime import datetime


app = Flask(__name__)

cache = {}  # appid_domain info
# ciq.li2niu.com/stats?appid=dc6ceca8-6ec6-49f2-b711-4ebc0d347177&domain=all


@app.route('/')
@app.route('/<path:path>')
def home(path):
    # dc6ceca8-6ec6-49f2-b711-4ebc0d347177 in https://apps.garmin.cn/zh-CN/apps/dc6ceca8-6ec6-49f2-b711-4ebc0d347177
    id = request.args.get('appid')
    domain = request.args.get('domain')  # all(default)/cn/com

    if id is None or len(id) <= 30:  # need to confirm the length
        return ''
    if domain is None:
        domain = 'all'
    if domain not in ['cn', 'com', 'all']:
        return 'D_E', 200

    query_key = '{}_{}'.format(id, domain)
    today_date = datetime.now().strftime("%Y_%m_%d")
    if query_key in cache.keys():
        cache_info = cache[query_key]
        date = cache_info['date']
        if today_date != date:
            app_name, downloads, reviews_cnt, average_rating = ciq.get_app_download_info(
                id, domain)
            cache_info = {
                'date': today_date,
                'reviews': reviews_cnt,
                'ratings': average_rating,
                'downloads': downloads
            }
            cache[query_key] = cache_info
        return cache_info, 200
    else:
        app_name, downloads, reviews_cnt, average_rating = ciq.get_app_download_info(
            id, domain)
        cache_info = {
            'date': today_date,
            'reviews': reviews_cnt,
            'ratings': average_rating,
            'downloads': downloads
        }
        cache[query_key] = cache_info
        return cache_info, 200
