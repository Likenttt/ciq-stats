import os
import io
from flask import Flask, Response
from flask import request
import json
import ciqreviews as ciq
from datetime import datetime


app = Flask(__name__)

cache = {}  # appid_domain info

# ciq.newrathon.com/query?appid=b4337e65-9333-49e4-9e7b-27e4f68922a1&domain=all&mode=downloads


@app.route('/')
@app.route('/<path:path>')
def home(path):
    # b4337e65-9333-49e4-9e7b-27e4f68922a1 in https://apps.garmin.cn/zh-CN/apps/b4337e65-9333-49e4-9e7b-27e4f68922a1
    id = request.args.get('appid')
    domain = request.args.get('domain')  # all(default)/cn/com
    mode = request.args.get('mode')  # downloads(default)/reviews/ratings

    if id is None or len(id) <= 30:  # need to confirm the length
        return ''
    if domain is None:
        domain = 'all'
    if domain not in ['cn', 'com', 'all']:
        return 'D_E', 200

    if mode is None:
        mode = 'downloads'
    if mode not in ['downloads', 'reviews', 'ratings']:
        return 'M_E', 200

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
        return cache_info[mode], 200
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
        return cache_info[mode], 200
