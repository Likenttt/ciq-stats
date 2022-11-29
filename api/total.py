import os
import io
from flask import Flask, Response
from flask import request
import json
import ciqreviews as ciq
from datetime import datetime


app = Flask(__name__)

cache = {}  # developerid_domain info
# ciqstats.li2niu.com/api/total?developerid=876cfd5e-4e42-48ca-8869-cd7c59235573&domain=all


@app.route('/')
@app.route('/<path:path>')
def home(path):
    # 876cfd5e-4e42-48ca-8869-cd7c59235573 in https://apps.garmin.com/en-US/developer/876cfd5e-4e42-48ca-8869-cd7c59235573/apps
    id = request.args.get('developerid')
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
            developer_name, total_download, app_dict = ciq.get_user_app_download_info(
                id, domain)
            cache_info = {
                'date': today_date,
                'developer_name': developer_name,
                'downloads': total_download
            }
            cache[query_key] = cache_info
        return cache_info, 200
    else:
        developer_name, total_download, app_dict = ciq.get_user_app_download_info(
            id, domain)
        cache_info = {
            'date': today_date,
            'developer_name': developer_name,
            'downloads': total_download
        }
        cache[query_key] = cache_info
        return cache_info, 200
