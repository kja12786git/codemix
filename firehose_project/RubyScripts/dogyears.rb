##########################
age = 20
def dog_age(age)
  if age == 0
    return 0
  elsif age == 1
    return 10.5
  elsif age == 2
    return 21
  else
    return 21 + (age - 2) * 4
  end
end

puts "The class code calculates #{dog_age(age)} dog years from #{age} earth years."

##########################
### custom code ##########
##########################
puts "EARTH TO DOG YRS CONVERSION"
puts "Enter number of earth years:"
eYrs = gets.to_f
def dogYrs(eYrs)
  ix = (eYrs - 2) #takes out first 2 years
  a = (ix * 4) #for years beyond first 2 dog years
  b = (eYrs * 10.5) #2 or under dog years calculated
  c = (2 * 10.5) #2 exact dog years
  d = (a + c) #sum of dog years
    if ix <= 2
      return b
    elsif ix > 2
        return d
    end
end
puts "The custom code gives #{dogYrs(eYrs)} dog years from #{eYrs} earth years."

################################
puts "Do you like cats? Y or N"
aswr = gets.to_s.chomp
  if aswr == "Y"
        text = "Ken likes cats, too!"
  elsif aswr == "YYYY"
          text = "There is a difference between bravery, persistence and stupidity, I concur."
  elsif aswr == "The animal or the slang?"
          text = "I do not understand?"
  elsif aswr != "N"
          text = "It is hard to decide?"
  else aswr == "N"
          text = "Dogs are better?"    
  end
puts "#{text}"

puts "Does || work in Ruby or what?"

##########################
### custom code 2 ########
##########################
puts "EARTH TO DOG YRS CONVERSION 2"
puts "Enter number of earth years:"
age = gets.to_f
def dog_age(age)
  if age == 0 || age == 1 || age == 2
    return age * 10.5
  else
    return 21 + (age - 2) * 4
  end
end
puts "The custom code gives #{dog_age(age)} dog years from #{age} earth years."