# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

RoomBooking.destroy_all
Booking.destroy_all
Room.destroy_all
User.destroy_all
Company.destroy_all

categories = []

company_0 = Company.new(name: 'admin company')
company_1 = Company.new(name: 'big money corp')
company_2 = Company.new(name: 'another company')
company_0.save
company_1.save
company_2.save

User.create!(
  email: 'test@test.com',
  password: 'password',
  company: company_0,
  admin: true
)

User.create!(email: 'test1@test.com',
  password: 'password',
  company: company_1,
  admin: false
  )

User.create!(email: 'test2@test.com',
  password: 'password',
  company: company_2,
  admin: false
  )

5.times do
  room = Room.new(
    name: Faker::Name.name,
    base_price: rand(20..100)*100,
    headline: Faker::Quote.famous_last_words,
    description: Faker::Lorem.paragraph(sentence_count: 4),
    capacity: rand(1..4),
    published: true,
    category: categories.sample,
    company: company_1
  )
  room.save!
end

5.times do
  room = Room.new(
    name: Faker::Name.name,
    base_price: rand(20..100)*100,
    headline: Faker::Quote.famous_last_words,
    description: Faker::Lorem.paragraph(sentence_count: 4),
    capacity: rand(1..4),
    published: true,
    category: categories.sample,
    company: company_2
  )
  room.save!
end

3.times do
  booking = Booking.new(
    start_date: Date.today,
    end_date: Date.today,
    customer_name: 'John',
    total_price: 15
  )
  booking.save

  RoomBooking.create(
    booking: booking,
    room: Room.first
  )
end


