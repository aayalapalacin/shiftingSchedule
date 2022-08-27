"""empty message

Revision ID: 1fb3cb0bf0ec
Revises: a2a37034d327
Create Date: 2022-08-27 18:29:24.240874

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1fb3cb0bf0ec'
down_revision = 'a2a37034d327'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('programs', sa.Column('prog_bar_txt', sa.String(length=50), nullable=False))
    op.drop_column('programs', 'prog_tar_txt')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('programs', sa.Column('prog_tar_txt', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    op.drop_column('programs', 'prog_bar_txt')
    # ### end Alembic commands ###
