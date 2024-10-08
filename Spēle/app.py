from flask import Flask, render_template

app = Flask('app')


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/game')
def game():
    return render_template("game.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/score')
def score():
    return render_template("score.html")

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=80)