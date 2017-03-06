from backend.server import app


def test_index():
    request, response = app.test_client.get("/api")
    assert response.status == 200
    assert response.body == b'{"version":"0.1.0","status":"ok"}'
