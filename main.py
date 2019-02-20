from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index() -> 'html':
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=6060,debug=True)
