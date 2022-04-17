from flask import Flask, request, json, Response, send_file, jsonify
from werkzeug.utils import secure_filename
import os
from flask import Flask, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
import logging
import pymysql

app = Flask(__name__)
app.secret_key = "hello"

#app.config['UPLOAD_FOLDER'] = '/Users/nmnsh/PycharmProjects/F/uploads'
app.config['UPLOAD_FOLDER'] = '/Users/n/PycharmProjects/medium/uploads'


ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('HELLO WORLD')

CORS(app);
session={}
filenamee=''
#Database Instance


def emptyfilename():
    session.pop("filename")
    filenamee=''


@app.route('/uploadpic', methods=['POST'])
def fileUpload():
    print(session)
    target=os.path.join(app.config['UPLOAD_FOLDER'],'test')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file']
    filename = secure_filename(file.filename)
    session['filename'] = filename
    destination="/".join([target, filename])
    file.save(destination)
    # session['uploadFilePath']=destination
    response="Whatever you wish too return"
    return response

#################################################################
def loginuser(user, pas):
    try:
        connection = pymysql.connect(host='localhost',
                                     user='root',
                                     password='123456',
                                     database='users',
                                     )
        cursor=connection.cursor()
        cursor.execute("SELECT username,password FROM user;")
        list=cursor.fetchall()
        for item in list:
            if user == item[0] and pas == item[1]:
                return True
        cursor.close()
        connection.close()
        return False
    except Exception as e:
        print("Exception in checkUserExist",str(e))


def signup(user, pas):
    try:
        connection = pymysql.connect(host='localhost',
                                     user='root',
                                     password='123456',
                                     database='users',
                                     )
        cursor = connection.cursor()
        cursor.execute("SELECT username,password FROM user;")
        list = cursor.fetchall()
        print(signup)
        for item in list:
            if user == item[0] and pas == item[1]:
                return False
        args = (user, pas)
        cursor.execute("insert into user(username, password) values (%s,%s);", args)
        connection.commit()
        cursor.close()
        connection.close()
        return True
    except Exception as e:
        print("Exception in insertUser", str(e))

def upload(username, title, body, img):
    try:
        connection = pymysql.connect(host='localhost',
                                     user='root',
                                     password='123456',
                                     database='users',
                                     )
        cursor = connection.cursor()
        args = (username, title, body, img)
        cursor.execute("insert into content(username, title, body, img) values (%s,%s,%s,%s);", args)
        connection.commit()
        cursor.close()
        connection.close()
        return True
    except Exception as e:
        print("Exception in uploadpic", str(e))

def pics(user):
    pics=[]
    try:
        connection = pymysql.connect(host='localhost',
                                     user='root',
                                     password='123456',
                                     database='users',
                                     )

        cursor = connection.cursor()
        query = "SELECT * FROM content where username = %s";
        args = (str(user))
        cursor.execute(query,args)
        list = cursor.fetchall()
        print(list)
        for item in list:
            pics.append({"username":item[0], "title": item[1], "body": item[2], "img":"http://localhost:5000/display/"+item[3]})
        cursor.close()
        connection.close()
        return pics
    except Exception as e:
        print("Exception in pics", str(e))


@app.route('/login', methods=['POST','GET'])
def login():
    req_data = json.loads(request.data)
    print(req_data["username"],req_data["password"])
    if loginuser(req_data["username"],req_data["password"]):
        user = req_data["username"]
        session["user"] = user;
        return {'status': '200',
                'isUser': 'true',
                'user': req_data["username"] }
    else:
        return {'isUser': 'false'}



@app.route('/uploadcontent', methods=['POST','GET'])
def uploadcontent():
    req_data = json.loads(request.data)
    print(session)
    if upload(session["user"],req_data["title"],req_data["content"],session["filename"]):
        return {'isPublished': 'true' }
    else:
        return {'isPublished': 'false'}



@app.route('/setUser')
def writing():
    if "user" in session:
        return{
            "user": session["user"]
        }
    else:
        return {
            "isLogin": "false"
        }

@app.route('/logout')
def logout():
    session.pop("user")
    session.pop("filename")
    return {"user": "not_Logged_in"}

@app.route('/signup', methods=['POST'])
def signupuser():
    req_data = json.loads(request.data)
    print(req_data["username"],req_data["password"])
    if signup(req_data["username"],req_data["password"]):
        return { 'isCreated': 'true' }
    else:
        return {'isCreated': 'false'}



@app.route('/getimage', methods=['GET'])
def get_image():
    filename='./uploads/test/pexels-pok-rie-132037_1.jpg'
    return send_file(filename, mimetype='image/gif')

@app.route('/display/<filename>')
def display_image(filename):
    file = './uploads/test/' + filename
    return send_file(file, mimetype='image/gif')

@app.route('/cont')
def cont():
    d=pics(session["user"])
    return json.dumps(d, indent = 4)


if __name__ == '__main__':
    app.run(debug=True)
#
#
# @app.route('/see')
# def see():
#     print("b")
#     img = database.getImg()
#     print("a")
#     if not img:
#         return 'Img Not Found!', 404
#
#     return Response(img.img, mimetype=img.mimetype)

# @app.route('/upload', methods=['POST'])
# def upload():
#     print("K")
#     pic = request.files['pic']
#     if not pic:
#         return 'No pic uploaded!', 400
#
#     filename = secure_filename(pic.filename)
#     mimetype = pic.mimetype
#     if not filename or not mimetype:
#         return 'Bad upload!', 400
#
#     database.picupload("ttt", pic.read(), filename, mimetype)
#     return 'Img Uploaded!', 200




