#this is a comment
puts "This is excellent, maybe easier than css even. For now."
puts "mIRC-like I didn't make as much money from that yet."
text = "There's more text here in variable."
text = "Replaces instead of adds?"
puts text

puts "Enter Your Name:"
name = gets.chomp
#chomped_name = name.chomp

#greetings = "Hello #{name}, are you programming this code?!"
greeting = "Hello #{name}, are you programming this code?!"
puts greeting
puts "So, are you?:"
greetingAnswer = gets
text = "#{greetingAnswer}"

puts "Enter something you own:"
item = gets.chomp
greeting ="#{name}, #{item} is an excellent item, no?"
puts greeting
greetingAnswer = gets.chomp
#puts greetingAnswer

puts "Hello #{name}, are you invited?" #greeting
greetingAnswer = gets
#puts "#{greetingAnswer}"
puts "I am inviting your girlfriend for free, are you okay with that?"
greetingAnswer = gets.chomp
text = "#{greetingAnswer}"
