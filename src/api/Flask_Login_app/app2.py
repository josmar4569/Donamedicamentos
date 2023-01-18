from flask import Flask
from flas_mysqldb import MySQL

app = Flask(__name__)
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'jesus'
# app.config['MYSQL_PASSWORD'] = '2609'
# app.config['MYSQL_DB'] = ''
# Mysql = MySQL()

@app.route('/')
def Index():
    return "Hello World"

@app.route('/add_contact')
def add_contact():
    return "Agregar contacto"

@app.route('/edit')
def edit_contact():
    return "Editar Contacto"

@app.route('/Delete')
def delete_contact():
    return "Eliminar Contacto"

if __name__ == '__main__':
    app.run(port = 3000, debug = True)