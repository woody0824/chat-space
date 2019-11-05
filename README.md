# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|
|email|text|null: false, foreign_key: true|
|password|text|null: false, foreign_key: true|

### Association
- has_many :groups, through: :groups_users
- has_many :comments

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|

### Association
- has_many :users, through: :groups_users
- has_many :comments

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|comments|text||
|image|string||

### Association
- belongs_to :group
- belongs_to :user