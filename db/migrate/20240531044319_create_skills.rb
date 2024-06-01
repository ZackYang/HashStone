class CreateSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :skills, id: :uuid, default: -> { 'gen_random_uuid()' } do |t|
      t.string :name, null: false
      t.string :icon_name
    end
  end
end
