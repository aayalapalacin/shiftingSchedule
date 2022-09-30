from flask_sqlalchemy import SQLAlchemy
from app import app, db
from api.models import Programs

def populate_programs(*programs):
    for program in programs:
        if not Programs.query.filter_by(name=program.name).one_or_none():
            db.session.add(program)
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        populate_programs(
            Programs(name="Food Pantry: Onsite", description="Nutritious staples for individuals & families from 13 towns. Monthly pick-up. Brief intake required.",start_time="12PM", end_time="3PM", thur_start_time="12PM", thur_end_time="7PM",sat_start_time="9AM", sat_end_time="12PM",monday=True, tuesday=True, wednesday=False, thursday= True, friday=True, saturday= True, sunday= False, prog_bar_txt="Food Pantry Onsite: 12pm-3pm",prog_bar_thur_txt="Food Pantry Onsite: 12pm-7pm",prog_bar_sat_txt="Food Pantry Onsite: 9am-12pm"),
            Programs(name="Food Pantry: Curbside", description="Nutritious staples for individuals & families from 13 towns. Monthly pick-up. Brief intake required.",start_time="3PM", end_time="4PM", thur_start_time="5PM", thur_end_time="7:30PM",sat_start_time="9AM", sat_end_time="12PM",monday=True, tuesday=True, wednesday=True, thursday= True, friday=True, saturday= True, sunday= True, prog_bar_txt="Food Pantry Curbside: 3pm-4pm",prog_bar_thur_txt="Food Pantry Curbside: 5pm-7:30pm",prog_bar_sat_txt="Food Pantry Onsite: 9am-12pm"),
            Programs(name="Community Meals", description="To Go Hot Lunch Distributed to all.",start_time="12PM", end_time="3PM", monday=True, tuesday=True, wednesday=False, thursday= True, friday=True, saturday= False, sunday= False, prog_bar_txt="Community Meals: 12pm-3pm"),
            Programs(name="Mobile Food Pantry", description="Located at the Boulders Apartment Homes located at 156 Brittany Drive in Amherst.",start_time="1PM", end_time="2PM", thur_start_time="", thur_end_time="",sat_start_time="", sat_end_time="",monday=False, tuesday=False, wednesday=True, thursday= False, friday=False, saturday= False, sunday= False, prog_bar_txt="Mobile Food Pantry: 1st Wed/month 1pm-2pm"),
            Programs(name="Additional Services", description="Warming center, showers, laundry and lockers. **last load of laundry must be in 1.5 hours before close, last shower is 30 min. before close",start_time="9AM", end_time="3PM",monday=True, tuesday=True, wednesday=False, thursday= True, friday=True, saturday= False, sunday= False, prog_bar_txt="Addional Services: 9am-3pm"),
            Programs(name="Fresh Produce and Baked Goods", description="Distributed to all.",start_time="12PM", end_time="3PM",monday=True, tuesday=True, wednesday=False, thursday= True, friday=True, saturday= False, sunday= False, prog_bar_txt="Fresh Produce + Baked Goods: 12pm-3pm"),
        )
        