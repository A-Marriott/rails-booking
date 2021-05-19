class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :address
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
