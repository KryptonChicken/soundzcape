"""
backend/rest_response.py
~~~~~~~~~~~~~~~~~~~~~~~~

Helper functions for REST endpoints.
"""

from sanic.response import json


def ok(**key_values):
    """ Construct a JSON response with keyword arguments. """

    return json({'status': 'ok', **key_values})


def error(reason='An error occured, please try again later.'):
    """ Construct a JSON error response with reason. """

    return json(dict(
        status='error',
        reason=reason
    ))
