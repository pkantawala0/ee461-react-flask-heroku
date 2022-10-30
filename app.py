import os
from flask import Flask, send_from_directory, render_template, request

app = Flask(__name__, static_url_path='', static_folder='ui/build/', template_folder = 'ui/templates/')

@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')


@app.route('/<projectID>/<qty>')
def params():
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')

@app.route('/<projectID>/<qty>')
def checkIn_hardware(qty):
    #data = {'projectID': projectID, 'qty': qty}
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')
    return render_template('settings.html', qty=qty)

@app.route('/<projectID>/<qty>', methods=["POST", "GET"])
def checkOut_hardware(projectID, qty):
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')
    return projectID, qty

@app.route('/<projectID>/<qty>', methods=["POST", "GET"])
def joinProject(projectID):
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')
    return projectID

@app.route('/<projectID>/<qty>', methods=["POST", "GET"])
def leaveProject(projectID):
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')
    return projectID

@app.errorhandler(404)
def not_found(e):
    projectID = request.args.get('projectID')
    qty = request.args.get('qty')
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))