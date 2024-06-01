class AddTypeAndStatusToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :type, :string, null: false
    add_column :users, :deactivated_at, :datetime
    add_column :users, :deactivate_reason, :string
    remove_column :users, :role
  end

  def down
    remove_column :users, :type
    remove_column :users, :deactivated_at
    remove_column :users, :deactivate_reason
    add_column :users, :role, :string
  end
end
