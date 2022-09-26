"""empty message

Revision ID: a2a37034d327
Revises: 71bcdbd13dd3
Create Date: 2022-08-27 17:24:33.104100

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a2a37034d327'
down_revision = '71bcdbd13dd3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('programs', sa.Column('end_time', sa.String(length=10), nullable=False))
    op.add_column('programs', sa.Column('prog_bar_sat_txt', sa.String(length=50), nullable=True))
    op.add_column('programs', sa.Column('prog_bar_thur_txt', sa.String(length=50), nullable=True))
    op.add_column('programs', sa.Column('prog_tar_txt', sa.String(length=50), nullable=False))
    op.add_column('programs', sa.Column('start_time', sa.String(length=10), nullable=False))
    op.drop_column('programs', 'progBarTxt')
    op.drop_column('programs', 'progBarSatTxt')
    op.drop_column('programs', 'startTime')
    op.drop_column('programs', 'progBarThurTxt')
    op.drop_column('programs', 'endTime')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('programs', sa.Column('endTime', sa.VARCHAR(length=10), autoincrement=False, nullable=False))
    op.add_column('programs', sa.Column('progBarThurTxt', sa.VARCHAR(length=50), autoincrement=False, nullable=True))
    op.add_column('programs', sa.Column('startTime', sa.VARCHAR(length=10), autoincrement=False, nullable=False))
    op.add_column('programs', sa.Column('progBarSatTxt', sa.VARCHAR(length=50), autoincrement=False, nullable=True))
    op.add_column('programs', sa.Column('progBarTxt', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.drop_column('programs', 'start_time')
    op.drop_column('programs', 'prog_tar_txt')
    op.drop_column('programs', 'prog_bar_thur_txt')
    op.drop_column('programs', 'prog_bar_sat_txt')
    op.drop_column('programs', 'end_time')
    # ### end Alembic commands ###
