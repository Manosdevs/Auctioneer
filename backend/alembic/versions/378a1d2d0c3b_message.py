"""message

Revision ID: 378a1d2d0c3b
Revises: 
Create Date: 2022-10-01 16:54:17.578410

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '378a1d2d0c3b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_Categories_id'), 'Categories', ['id'], unique=False)
    op.create_table('Locations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('latitude', sa.Float(), nullable=False),
    sa.Column('longtitude', sa.Float(), nullable=False),
    sa.Column('Address', sa.String(), nullable=False),
    sa.Column('Country', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_Locations_id'), 'Locations', ['id'], unique=False)
    op.create_table('Users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('surname', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('phone', sa.String(), nullable=False),
    sa.Column('afm', sa.String(), nullable=False),
    sa.Column('validated', sa.Boolean(), nullable=False),
    sa.Column('role', sa.String(), nullable=False),
    sa.Column('seller_rating', sa.Float(), nullable=True),
    sa.Column('bidder_rating', sa.Float(), nullable=True),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('country', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_index(op.f('ix_Users_id'), 'Users', ['id'], unique=False)
    op.create_table('Auctions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('currently', sa.Float(), nullable=False),
    sa.Column('buy_price', sa.Float(), nullable=False),
    sa.Column('first_bid', sa.Float(), nullable=False),
    sa.Column('number_of_bids', sa.Float(), nullable=False),
    sa.Column('start', sa.DateTime(timezone=True), nullable=False),
    sa.Column('ends', sa.DateTime(timezone=True), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('seller_id', sa.Integer(), nullable=False),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('country', sa.String(), nullable=True),
    sa.Column('longtitude', sa.String(), nullable=False),
    sa.Column('latitude', sa.String(), nullable=False),
    sa.Column('normalised_description', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['seller_id'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_Auctions_id'), 'Auctions', ['id'], unique=False)
    op.create_table('Messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('sender_id', sa.Integer(), nullable=False),
    sa.Column('receiver_id', sa.Integer(), nullable=False),
    sa.Column('message', sa.String(), nullable=False),
    sa.Column('read', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['receiver_id'], ['Users.id'], ),
    sa.ForeignKeyConstraint(['sender_id'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_Messages_id'), 'Messages', ['id'], unique=False)
    op.create_table('TokenSessions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('token', sa.String(), nullable=False),
    sa.Column('active', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_TokenSessions_id'), 'TokenSessions', ['id'], unique=False)
    op.create_index(op.f('ix_TokenSessions_token'), 'TokenSessions', ['token'], unique=True)
    op.create_table('Bids',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('auction_id', sa.Integer(), nullable=False),
    sa.Column('bidder_id', sa.Integer(), nullable=False),
    sa.Column('time', sa.DateTime(timezone=True), nullable=False),
    sa.Column('amount', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['auction_id'], ['Auctions.id'], ),
    sa.ForeignKeyConstraint(['bidder_id'], ['Users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_Bids_id'), 'Bids', ['id'], unique=False)
    op.create_table('Photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('URL', sa.String(), nullable=False),
    sa.Column('auction_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['auction_id'], ['Auctions.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_Photos_id'), 'Photos', ['id'], unique=False)
    op.create_table('auction_category',
    sa.Column('auction_id', sa.Integer(), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['auction_id'], ['Auctions.id'], ),
    sa.ForeignKeyConstraint(['category_id'], ['Categories.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('auction_category')
    op.drop_index(op.f('ix_Photos_id'), table_name='Photos')
    op.drop_table('Photos')
    op.drop_index(op.f('ix_Bids_id'), table_name='Bids')
    op.drop_table('Bids')
    op.drop_index(op.f('ix_TokenSessions_token'), table_name='TokenSessions')
    op.drop_index(op.f('ix_TokenSessions_id'), table_name='TokenSessions')
    op.drop_table('TokenSessions')
    op.drop_index(op.f('ix_Messages_id'), table_name='Messages')
    op.drop_table('Messages')
    op.drop_index(op.f('ix_Auctions_id'), table_name='Auctions')
    op.drop_table('Auctions')
    op.drop_index(op.f('ix_Users_id'), table_name='Users')
    op.drop_table('Users')
    op.drop_index(op.f('ix_Locations_id'), table_name='Locations')
    op.drop_table('Locations')
    op.drop_index(op.f('ix_Categories_id'), table_name='Categories')
    op.drop_table('Categories')
    # ### end Alembic commands ###
