class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :base_price
      t.string :name
      t.string :headline
      t.text :description
      t.integer :capacity
      t.boolean :published
      t.string :category

      t.timestamps
    end
  end
end
