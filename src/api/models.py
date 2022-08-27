from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Programs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    start_time = db.Column(db.String(10), unique=False, nullable=False)
    end_time = db.Column(db.String(10), unique=False, nullable=False)
    prog_bar_txt = db.Column(db.String(50), unique=False, nullable=False)
    prog_bar_thur_txt = db.Column(db.String(50), unique=False, nullable=True)
    prog_bar_sat_txt = db.Column(db.String(50), unique=False, nullable=True)

    def __repr__(self):
        return f'<Programs {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "start_time": self.start_time,
            "end_time": self.end_time,
            "prog_bar_txt": self.prog_bar_txt,
            "prog_bar_thur_txt": self.prog_bar_thur_txt,
            "prog_bar_sat_txt": self.prog_bar_sat_txt,
            # do not serialize the password, its a security breach
        }