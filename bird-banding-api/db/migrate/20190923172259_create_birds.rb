class CreateBirds < ActiveRecord::Migration[5.2]
  def change
    create_table :birds do |t|
      t.integer :band_number
      t.string :species
      t.string :sex
      t.string :year
      t.integer :fat
      t.float :wingspan
      t.float :weight

      t.timestamps
    end
  end
end
