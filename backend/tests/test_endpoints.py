"""
tests/test_endpoints.py
~~~~~~~~~~~~~~~~~~~~~~~
"""

from server import app


def test_api():
    _request, response = app.test_client.get('/api')
    assert response.status == 200
    assert response.body == b'{"status":"ok","version":"0.1.0"}'


def test_api_music():
    _request, response = app.test_client.get('/api/music')
    assert response.status == 200
    assert b'ok' in response.body
