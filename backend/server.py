"""
backend/server.py
~~~~~~~~~~~~~~~~~

Main entry point to the backend server for dynamic content. All operation
should be asynchronous, blocking call should be called in a separate process.

Any HTTP traffic to /api is routed here from NGINX.
"""

from sanic import Sanic
from sanic.response import json

app = Sanic(__name__)
app.config.LOGO = None


@app.route("/api")
async def index(requests):
    return json({
        "version": "0.1.0",
        "status": "ok"
    })


if __name__ == '__main__':
    # Sanic is not exposed to the internet directly, all traffic to /api
    # should be routed here by NGINX.
    app.run(host="0.0.0.0", port=8001, debug=True)
