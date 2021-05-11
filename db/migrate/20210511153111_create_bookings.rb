class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.date :start_date
      t.date :end_date
      t.string :customer_name
      t.string :email
      t.string :phone_number
      t.integer :number_of_guests
      t.integer :total_price
      t.integer :price_paid
      t.boolean :checked_in
      t.boolean :cancelled

      t.timestamps
    end
  end
end
