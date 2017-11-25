quotes = []
quotes.push("Line one.")
quotes.push("Line two.")
quotes.push("Line three.")
quotes.push("Line four.")
quotes.push("Line five.")
quotes.push("Line six.")


quotes << "They're peanut butter and jealous!"
quotes << "Why is this here?"
quotes << "Who's generating the most revenue?"
quotes << "Does that matter?"

quotes.each do |quote|
#  upcase_quote = quote.upcase
#  puts upcase_quote
  puts quote.upcase #one line for the two above
end

####################################
#### diff method of array inputs ###
####################################
quotes2 = ["L1", "L2", "L3", "L4", "LG", "LL"]

quotes2 << "Did everyone in this zipcode pay taxes?"
quotes2 << "How much did Iron Mike get from winning his first fight?"
puts quotes2

quotes2.each do |a|
  puts a.upcase
end

##################################
##arry itms lngth & trgted count##
##################################
number_of_items = quotes.length
puts "#{number_of_items} items in first array."
number_of_items2 = quotes2.length
puts "#{number_of_items2} items in second array."

puts "The 2nd item in the first array is '#{quotes[2]}'."
puts "The 3rd item in the second array is '#{quotes2[3]}'."


######################
## Text Items Array ##
######################
quotes_produce = ["Apples","Oranges","Grapefruit","Peaches","Bannanas","Pumpkins","Watermelons","Melons","Strawberries","Mangos"]
# puts quotes_produce vv

####################################
## Adds string to each array item ##
####################################
quotes_produce.each do |a|
#  quotes_produce.prepend
    puts ("Om nom nom #{a}") #thx coderman for the simple solution suggestion for this
end

que_length = quotes_produce.length
puts "This many items listed: #{que_length}"