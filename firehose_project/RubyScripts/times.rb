1000.times do |n|
  puts "Display this #{n} times! Iteration Number: #{n}"
end
##############################
x = 0
sum = 0
while x != 100
  x = x+1
  puts "This is the count: #{x}."
  sum = sum + x
end
puts "This is supposed to be the sum: #{sum}."

####
#or#
####

sum = 0
x = 1
100.times do |x|
    puts "This is the count: #{x}."
    sum = sum + x + 1
    puts "Current sum count: #{sum}."
end
puts "This is the total sum: #{sum}."