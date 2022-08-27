from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Programs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    start_time = db.Column(db.String(10), unique=False, nullable=False)
    end_time = db.Column(db.String(10), unique=False, nullable=False)
    prog_tar_txt = db.Column(db.String(50), unique=False, nullable=False)
    prog_bar_thur_txt = db.Column(db.String(50), unique=False, nullable=True)
    prog_bar_sat_txt = db.Column(db.String(50), unique=False, nullable=True)

    def __repr__(self):
        return f'<Programs {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "start_time": self.startTime,
            "end_time": self.endTime,
            "prog_bar_txt": self.progBarTxt,
            "prog_bar_thur_txt": self.progBarThurTxt,
            "prog_bar_sat_txt": self.progBarSatTxt,
            # do not serialize the password, its a security breach
        }