"""Run the backend."""
from flask import Flask
from werkzeug.serving import run_simple
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from api.app import app


if __name__ == '__main__':
    application = DispatcherMiddleware(Flask('dummy_app'), {
        "/api": app
    })
    run_simple('localhost', 5000, application, use_reloader=True)
