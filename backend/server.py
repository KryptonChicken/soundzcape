"""
backend/server.py
~~~~~~~~~~~~~~~~~

Main entry point to the backend server for dynamic content. All operation
should be asynchronous, blocking call should be called in a separate process.

Any HTTP traffic to /api is routed here from NGINX.
"""

import os

from sanic import Sanic
from sanic.response import json

app = Sanic(__name__)
app.config.LOGO = None

CURRENT_PATH = os.path.dirname(os.path.realpath(__file__))
MUSIC_PATH = os.path.join(CURRENT_PATH, 'music')


@app.route("/api")
async def index(requests):
    return json({
        "version": "0.1.0",
        "status": "ok"
    })


@app.route("/api/music")
async def music(requests):
    try:
        result = os.listdir(MUSIC_PATH)
        status = "ok"
    except Exception as e:
        result = e
        status = "error"

    return json(dict(
        status=status,
        result=result
    ))


if __name__ == "__main__":
    # Sanic is not exposed to the internet directly, all traffic to /api
    # should be routed here by NGINX.
    app.run(host="0.0.0.0", port=8001, debug=True)
