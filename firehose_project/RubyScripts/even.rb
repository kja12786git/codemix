puts "Enter an even number:"
n = gets.to_i

def is_even?(n)
  
 even_remainder = n % 2
  
  if even_remainder == 0
    return true
  else #even_remainder != 0 
    return false
  end
  
end

puts "Is #{n} an even number? #{is_even?(n)}."

######################################################

puts "Enter another even number also divisible by 5:"
nT = gets.to_i

def is_even?(nT)
  iseven = nT % 2
  divFive = nT % 5
  
  if (iseven == 0) && (divFive == 0)
    puts "#{nT} is even and divisible by five."
  return puts true
  else
    puts "#{nT} is either not even or not divisible by five."
    return puts false
  end
  return puts
end

puts is_even?(nT)

######################################################
puts "Enter an odd number:"
o = gets.to_i
def is_odd?(o)
 even_remainder = o % 2
 if even_remainder != 0
  return true
 else return false
 end
#    if even_remainder != 0
#      return true
#    else
#      return false
#   end
end
puts "Checking if #{o} is an odd number... #{is_odd?(o)}."

########################################
## Execution within if statement #######
## not within a function ###############
########################################
puts "Give me the matching number of 5*5+.5:"
thisNum = gets.to_f
if thisNum == 25.5
  puts "Matching number #{thisNum}."
end

#######################
## Animal Likes Query##
#######################
puts "If you like cats better enter 'yes', but, if you like dogs better enter 'no'!"
input = gets.to_s.chomp
if input == "yes"
        text= "You entered that you prefer cats!"
elsif input == "no"
        text= "You entered that you prefer dogs!"
end
puts "#{text}"

#######################
## random que #########
#######################
puts "A random question with many choices, pick: One, Two, Three or Four"
rC = gets.chomp
def achoice(rC)
  pre = "You picked"
  if rC == "One"
    puts "#{pre} #{rC}, great!"
  else #rC != "One"
    puts "#{pre} #{rC} which is valid, but more than One which will each tax you for time."
  end
end
puts achoice(rC)

#######################
## Animal Likes Query##
#######################
puts "Do you like cats? If so answer: 'yes'"
input = gets.to_s.chomp
if input == "yes"
        text= "You like cats!"
  else input != "yes"
        text= "Dogs are better?"  
end
puts "#{text}"