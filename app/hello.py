from flask import Flask, render_template, request, session, redirect

app = Flask(__name__)
# conn = psycopg2.connect("host=127.0.0.1 dbname=testdb user=postgres password=postgres")
# cur = conn.cursor()

# login page access
@app.route('/login')
def login():
    return render_template("login.html", 
    titile = "Login",
    err=False,
    message = "IDとpassを入力",
    id="") 
# templatesフォルダからの相対パスを記入sa
# @app.route('/logout')
# def login():
#     return render_template("login.html", 
#     titile = "Login",
#     err=False,
#     message = "IDとpassを入力",
#     id="") # templatesフォルダからの相対パスを記入

# @app.route("/list", methods=["POST", "GET"])
# def display(): #
#     if request.method == "POST":
#         name = request.form["username"]
#         password = request.form["password"]
        
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)