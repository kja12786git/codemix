#figure out a script to choose which combination of barbell weights a bodybuilder will use at maximum while not exceeding 160% of bodyweight
puts "Benchpress Formula"
puts "Enter bodyweight in lbs:"
w = gets.to_i #bodyweight input
w = w * 1.6 #160% of bodyweight
puts "#{w.to_i}lbs is 160% of body weight."

kg = 2.20462262 #kg for a lb

r = ["2.5","5","10","25","35","45"] #various available barbell weights
rs = 10 #how many sets of weights are available?

r2 = [] #new array for multiple units of weights, listing each weight item available
r.each do |x| #duplicate weight items to r2
  rs.times do
    x.to_f
    r2 << x
  end
end

################################################################################
#pair the weights for a set because bodybuilders will benchpress evenly

r3 = []
r.each do |x|
  x2 = x.to_f
  x2 = x2 * 2
  r3 << x2
end

###############################################################################

puts "Weight items available for lifting: #{r2.length} pieces at these weights #{r2.to_s}"

weight_count = (15 * kg) #include barbell weight first, converting kgs to lbs
puts "Barbell weight: #{weight_count.to_i}lbs"

################################################################################
#add up total amount of available weights

all_wghts = 0

  r2.each do |x|
    xb = x.to_f
    all_wghts = all_wghts + xb
  end
  
################################################################################

all_wghts = all_wghts.to_i
puts "#{all_wghts}lbs is the total weight of all the weights in the rack!"

add_more = ["No", "Yes"]

while weight_count < w && add_more[-1] == "Yes" # && weight_count <= all_wghts
  nx = nx.to_i
  y = weight_count.to_i + nx
  over = w - y

################################################################################
# is there a shorter way for the succeeding code?

    for i in (0..5).to_a.reverse
      if(i==5 && over > r3[i]  || i!=5 && over >= r3[i] || i==0)
          xx = [1,2].include?(i) ? r3[i] : r3[i]
#         puts "Adds #{xx} #testing result."
          break;
      end
    end
    
################################################################################
################################################################################
nx = xx
#    if over > r3[5]
#      nx = r3[5]
#      puts "Adds #{nx}"
#    elsif over >= r3[4] #70lbs
#      nx = r3[4]
#      puts "Adds #{nx}"      
#    elsif over >= r3[3] #50lbs
#      nx = r3[3]
#      puts "Adds #{nx}"
#    elsif over >= r3[2] #20lbs
#      nx = r3[2]
#      puts "Adds #{nx}"
#    elsif over >= r3[1] #10lbs
#      nx =  r3[1]
#      puts "Adds #{nx}"
#    else
#      nx = r3[0] #5lbs
#      puts "Adds #{nx}"
#    end
    
###################
  weight_count = y
###################

    if w >= all_wghts && y <= all_wghts
      puts "You can only lift up to #{all_wghts}lbs in this gym, which is less than your recommended max of #{w.to_i}lbs!"
      puts "Great, so you can lift #{y}lbs!"
      puts "Add #{nx}lbs more? Yes or No"
      add_more << gets.chomp
    elsif y >= all_wghts
      add_more << "No"
      weight_count = all_wghts
      puts "That's more than all #{all_wghts} pounds of available weights! You can't lift any more here!"
    elsif over >= r3[5] || over >= 11
      puts "Great, so you can lift #{y}lbs!"
      puts "Add #{nx}lbs more? Yes or No"
      add_more << gets.chomp
    elsif over <= r3[1] && over > 0
      puts "You lifted near recommended maximum of #{w.to_i}lbs only #{over.to_i}lbs less."
      puts "Add #{nx}lbs more? Yes or No"
      add_more << gets.chomp
    else
      puts "You lifted recommended maximum of #{w.to_i}lbs #{over.to_i}lbs extra."
    end

#while loop ends
end

#puts weight_count
kgs = weight_count * 0.45359237 #convert lbs lifted to kgs
kgs = "#{kgs.to_i}kgs"
puts "Your highest lift was #{weight_count.to_i}lbs or #{kgs}"