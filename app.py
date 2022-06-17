from flask import Flask, request, render_template, g
from dbConnection import DbConnection

import json

app = Flask(__name__)

db = DbConnection()

@app.route('/', methods=["GET"]) #delete GET/POST if it doesn't break stuff
def getBooks():
    if request.method == "GET":
        books = db.getBooks()
    books2 = json.dumps(books)
    g.jdump = books2.replace("'","\\'")
    return render_template("index.html")
