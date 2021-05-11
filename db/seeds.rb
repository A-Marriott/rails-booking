# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Room.destroy_all

categories = []

10.times do
  room = Room.new(name: Faker::Name.name,
              base_price: rand(20..100)*100,
              headline: Faker::Quote.famous_last_words,
              description: Faker::Lorem.paragraph(sentence_count: 4),
              capacity: rand(1..4),
              published: true,
              category: categories.sample
              )
      room.save!
end