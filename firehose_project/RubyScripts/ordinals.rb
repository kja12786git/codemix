puts "Enter a number:"
input = gets.to_i
ones_place = input % 10 #checks one digit number
tens_ = input % 100 #checks double digit number column
puts ones_place
puts tens_
#############################
## Input a multiple of 10?###
#############################
def ten_multiple(input)
is_even = input % 2
    if (input * 10 >= 10) && (is_even == 0)
      puts "Multiple of ten."
    return true
    end
end
#puts multiple(input)
#############################
## Multiple digits ##########
#############################
# Two digits
def ten_plus(input)
  if input >= 10 && input <20
#    puts "Two digit number."
    return true
  end
end
def twenty_plus(input)
  if input >= 10 && input >20
#    puts "Two digit number."
    return true
  end
end
# Three plus digits
def threed_plus(input)
  if input >= 100
#    puts "Three digit number."
    return true
  end
end

#################################
## designate suffix for #s ######
#################################
if input == 0
  puts 0
  elsif threed_plus(input) == true && ones_place == 1 && (tens_ >= 20 || tens_ <=10)
      puts "#{input}st"
  elsif (threed_plus(input) == true) && (ones_place == 2) && (tens_ >= 20 || tens_ <=10)
      puts "#{input}nd"
  elsif threed_plus(input) == true && (ones_place == 3) && (tens_ >= 20 || tens_ <=10)
      puts "#{input}rd"
  elsif (threed_plus(input) == true) && (ones_place <= 9)  # for (11| 12 || 13) & 20+
      puts "#{input}th"
  elsif twenty_plus(input) == true && ones_place == 1
      puts "#{input}st"
  elsif ones_place <= 9 && (ten_plus(input) == true) # for (11| 12 || 13) & under 20
      puts "#{input}th"  
  elsif input == 1 && input <=9
      puts "#{input}st"
  elsif ones_place == 2
      puts "#{input}nd"  
  elsif ones_place == 3
      puts "#{input}rd"
  elsif ones_place >= 4 || (input % 10 <= ones_place)
      puts "#{input}th"
end