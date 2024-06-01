class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :hashed_password, null: false
      t.string :status, null: false
      t.string :role, null: false

      t.timestamps
    end
  end
end
