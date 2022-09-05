
import click
from api.models import db, Programs

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-programs") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test programs")
        for x in range(1, int(count) + 1):
            program = Programs()
            program.name = "test_program" + str(x) 
            program.description = "This is a test program"
            program.start_time = "9AM"
            program.end_time = "12PM"
            program.prog_bar_txt = "Text goes in program bar"
            program.prog_bar_thur_txt = null
            program.prog_bar_sat_txt = null
            db.session.add(program)
            db.session.commit()
            print("Program: ", program.name, " created.")

        print("All test programs created")

        ### Insert the code to populate others tables if needed