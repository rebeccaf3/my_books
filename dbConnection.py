from re import I
import sqlite3

class DbConnection:
    def __init__(self):
        self.database = "books.db"

    def createConnection(self):
        conn = None
        try:
            conn = sqlite3.connect(self.database)
            conn.execute("PRAGMA foreign_keys = ON")
        except:
            print("Connection failed")
        return conn

    def getBooks(self):
        conn = self.createConnection()
        selectString = "SELECT * FROM Books;"
        books = []
        if conn is not None:
            for row in conn.execute(selectString):
                #books.append(list(row)[1:])
                books.append(list(row))
        conn.close()
        return books
