items = ['tree','leaf','flower','rain']

guess = items[rand(3)]
guess.to_s

puts "What is your bet between 'tree', 'leaf', 'flower' and 'rain'."
userg = gets.to_s.chomp

if guess == userg
    puts "You win!"
else
    puts "You lost! It's really #{guess}"
end