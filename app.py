import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')


@app.route('/params', methods=["POST", "GET"])
def params():
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')
    return 'projectID: ' + str(projectID)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))