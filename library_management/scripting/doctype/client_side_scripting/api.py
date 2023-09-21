from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get_data', methods=['GET'])
def get_data():
    # Create a dictionary with name and age data
    data = {
        'name': 'Deepo',
        'age': 22
    }
    
    # Return the data as JSON
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)