from flask import Flask

app = Flask(__name__)

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