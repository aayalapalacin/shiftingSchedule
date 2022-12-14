"""empty message

Revision ID: e4d7c3cb9c83
Revises: c5dab15a8a42
Create Date: 2022-09-30 02:37:01.856599

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e4d7c3cb9c83'
down_revision = 'c5dab15a8a42'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('programs', sa.Column('sat_end_time', sa.String(length=10), nullable=True))
    op.add_column('programs', sa.Column('sat_start_time', sa.String(length=10), nullable=True))
    op.add_column('programs', sa.Column('thur_end_time', sa.String(length=10), nullable=True))
    op.add_column('programs', sa.Column('thur_start_time', sa.String(length=10), nullable=True))
    op.alter_column('programs', 'friday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('programs', 'monday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('programs', 'saturday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('programs', 'sunday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('programs', 'thursday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('programs', 'tuesday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('programs', 'wednesday',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('programs', 'wednesday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('programs', 'tuesday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('programs', 'thursday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('programs', 'sunday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('programs', 'saturday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('programs', 'monday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('programs', 'friday',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.drop_column('programs', 'thur_start_time')
    op.drop_column('programs', 'thur_end_time')
    op.drop_column('programs', 'sat_start_time')
    op.drop_column('programs', 'sat_end_time')
    # ### end Alembic commands ###
