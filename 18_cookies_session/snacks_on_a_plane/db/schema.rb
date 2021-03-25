# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_25_043834) do

  create_table "friendships", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "snacks", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "flavor_profile"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
  end

  create_table "user_snacks", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "snack_id", null: false
    t.string "review"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["snack_id"], name: "index_user_snacks_on_snack_id"
    t.index ["user_id"], name: "index_user_snacks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.string "motto"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_snacks", "snacks"
  add_foreign_key "user_snacks", "users"
end
