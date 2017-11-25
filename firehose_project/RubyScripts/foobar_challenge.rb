puts "How many items do you want to see?"

n = gets.to_i
#fbar_array = ['1','2', 'Foo', '4', 'Bar','Foo','7','8','9'] #if array already had items
fbar_array = [0]
dbl_array = fbar_array #doubles original array for security

#################################
## Matching 'n' for Foobar ######
#################################
def divisible(n)
  if n != nil
  # divisibles
  bythree = (n % 3)
  byfive = (n % 5)
  byboth = bythree + byfive
  #

    if byboth == 0
#      puts "Foobar"
      text = "Foobar"
      
    elsif byfive == 0
#      puts "Bar"
      text = "Bar"

    elsif bythree == 0
#      puts "Foo"
      text = "Foo"
      
    return text
    end

  end

end
#puts "Your input matches #{divisible(n)}!"

##########################################
## Makes array as long as user desires ###
## & inserts strings accordingly.#########
##########################################

while (fbar_array.length < n)
  x = (n - dbl_array.length)
  countup = dbl_array.length

    x.times do
    n = countup
    y = divisible(n)      
    dbl_array << "#{countup}" unless (y == "Foobar") || (y == "Bar") || (y == "Foo")
    countup = countup + 1
      if (y == "Foobar") || (y == "Bar") || (y == "Foo")
        dbl_array << "#{y}"
        y = nil #resets y afer this push for next loop, just in case
      end
    end

end
##########################################

puts dbl_array.to_s #to string for user readability
puts "Item Count: #{dbl_array.length}"