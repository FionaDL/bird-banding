class AddUserIdToBird < ActiveRecord::Migration[5.2]
  def change
    add_column :birds, :user_id, :integer
  end
end
