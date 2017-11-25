def double(num)
  num * 1
  return num * 2
  num * 3
#  num * 10
end

val = double(10)
puts val
################
halfVal = val/2
puts "Half of that is #{halfVal}."
################

def pythagorean_theorem(a, b)
  a_squard = a * a
  b_squard = b * b
  c_squard = a_squard + b_squard
  return Math.sqrt(c_squard)
end

puts "#{pythagorean_theorem(5, 12)} is the length of side c of this triangle."

#####################
##square root math ##
#####################
c = 100000
x = Math.sqrt(c)
puts "The square root of #{c.to_s} is #{x}."

#########################
## pounds to kilograms ##
#########################
puts "Number of pounds:"
num = gets.to_i

def lbsToKgs(num)
  kgTolb = 0.4535
  xLbs = (kgTolb * num).to_f
  return xLbs
end
val = lbsToKgs(num)
puts "#{num}lbs is #{val}KGs"

##########################
## celsius 2 fahrenheit ##
##########################
puts "Enter temperature in Celsius:"
degCels = gets.to_f

def getFahrenheit(degCels)
  sum = (degCels * 1.8) + 32
  return sum
end
valsum = getFahrenheit(degCels)
puts "#{degCels} degrees celsuis or #{valsum}F."