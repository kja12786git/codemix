food_string = ["Food One","Food Two","Food Three","Food Four","Food Five","Food Six","Food Seven"]
veggie_string = ["Food One","Food Three","Food Six"]
fruits_string = ["Food Four","Food Seven"]
puts food_string
############################
puts "modifying..."
############################
### All food same love #####
############################
food_string.each do |fitem|
  puts "Om nom nom #{fitem}" #remember no = in puts syntax
end
############################
### Like this or not?  #####
############################
food_string.each do |this|
  if veggie_string.include?(this)
    4.times do
    puts "Yuck! It's #{this}!"
    end
  else
    puts "Great! It's #{this}!"
  end
end
############################
## selective responses #####
############################
food_string.each do |this|
  if veggie_string.include?(this)
    4.times do
      puts "Yuck, it's #{this}!"
    end
  elsif fruits_string.include?(this)
      puts "Why not! Let's make a smoothie with #{this}."
  else
      puts "Great! It's #{this}!"
  end
end
#############################
### User Suggestions ########
#############################
puts "Fine, you don't like #{veggie_string[0]}, #{veggie_string[1]} or #{veggie_string[2]}?! Enter a food item you like that is not on the list:"
user_sugg = gets.to_s.chomp
puts "Om nom nom... I love #{user_sugg}!"

###########################
### kideats method ########
###########################
def kideats(food)
  vegetables = ["Lettuce", "Broccoli", "Carrot", "Onion"]
  fruits = ["Apple", "Orange", "Mango", "Pineapple"]
  if vegetables.include?(food)
    4.times do 
      puts "Gross, I hate #{food}"
    end
  elsif fruits.include?(food)
    puts "How about we a make a smoothie with #{food}"
  else
    puts "Om nom nom... I love #{food}"
  end
end

foods = ["Candy", "Soda", "Lettuce", "McDonalds", "KFC", "Mango", "Carrot"]

foods.each do |food|
  kideats(food)
end

puts "Enter a food to feed kid:"
user_kidfood = gets.chomp
kideats(user_kidfood)