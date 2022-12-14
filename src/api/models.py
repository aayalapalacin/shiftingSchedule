from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Programs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    prog_bar_txt = db.Column(db.String(50), unique=False, nullable=False)
    monday = db.Column(db.Boolean, unique=False, nullable=True)
    tuesday = db.Column(db.Boolean, unique=False, nullable=True)
    wednesday = db.Column(db.Boolean, unique=False, nullable=True)
    thursday = db.Column(db.Boolean, unique=False, nullable=True)
    friday = db.Column(db.Boolean, unique=False, nullable=True)
    saturday = db.Column(db.Boolean, unique=False, nullable=True)
    sunday = db.Column(db.Boolean, unique=False, nullable=True)
    start_time = db.Column(db.String(10), unique=False, nullable=False)
    end_time = db.Column(db.String(10), unique=False, nullable=False)
    thur_start_time = db.Column(db.String(10), unique=False, nullable=True)
    thur_end_time = db.Column(db.String(10), unique=False, nullable=True)
    prog_bar_thur_txt = db.Column(db.String(50), unique=False, nullable=True)
    sat_start_time = db.Column(db.String(10), unique=False, nullable=True)
    sat_end_time = db.Column(db.String(10), unique=False, nullable=True)
    prog_bar_sat_txt = db.Column(db.String(50), unique=False, nullable=True)

    def __repr__(self):
        return f'<Programs {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "prog_bar_txt": self.prog_bar_txt,
            "monday": self.monday,
            "tuesday": self.tuesday,
            "wednesday": self.wednesday,
            "thursday": self.thursday,
            "friday": self.friday,
            "saturday": self.saturday,
            "sunday": self.sunday,
            "start_time": self.start_time,
            "end_time": self.end_time,
            "thur_start_time": self.thur_start_time,
            "thur_end_time": self.thur_end_time,
            "prog_bar_thur_txt": self.prog_bar_thur_txt,
            "sat_start_time": self.sat_start_time,
            "sat_end_time": self.sat_end_time,
            "prog_bar_sat_txt": self.prog_bar_thur_txt,
            
            # do not serialize the password, its a security breach
        }