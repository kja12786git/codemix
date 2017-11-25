number = 10.0
puts number

val1 = number
val2 = "10"
val3 = 10

#class types displaying
puts "#{val1.inspect} is the type #{val1.class}"
puts "#{val2.inspect} is the type #{val2.class}"
puts "#{val3.inspect} is the type #{val3.class}"

#PEMDAS math
val4 = 10+10
puts val4

val5 = 10 + 5 * 3
puts "Ten + five x three is equal to #{val5}."

val6 = (3 +10) * 5
puts "(3+10)*5 is #{val6}"

#value type conversions
val7 = 2.5
val8 = val7.to_i
puts val8

val9 = 5.5
val10 = val9.to_f
puts "#{val10} as #{val10.class}."

val11 = val9.to_s
puts "#{val11.inspect} is a string."

#division
val1 = 11/2
puts "#{val1} is an integer."

val1 = val1.to_f #converted to float
puts "#{val1} is in #{val1.class} format."

