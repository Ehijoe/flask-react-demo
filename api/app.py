"""API application."""
from flask import Flask

app = Flask(__name__)


@app.route('/status')
def status():
    """Return the API status."""
    return {"status": "OK"}


@app.errorhandler(404)
def error_not_found(error):
    """Return an error for invalid paths."""
    return {"error": "Not Found"}
