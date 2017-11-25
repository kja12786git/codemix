# Initially, to increase count and post only alternate pairs.
x = 0
y = 100
b = 2 % 2
y.times do
    x+= 1
    if (x % 2) != b
      puts x
    else puts "#{b} & #{x}"
    end
end

puts "Restored revision..."
#
x = 0
y = 100
b = 2 % 2
y.times do
    x+= 1 
    if (x % 2) != b
      puts x
    else puts x
    end
end

puts "Revision to array..."
#
x = 0
y = 1000
b = 2 % 2
z = []
y.times do
    x+= 1
    if (x % 2) != b
      z << x
    else z << x
    end
end
puts z.to_s

puts "Revision to array..."
#
x = 0
y = 1000
b = 2 % 2
z = []
y.times do
    x+= 1
    if (x % 2) != b
      z << x
    else z << x
    end
end
puts z.to_s

puts "Revision to numbers within divs..."
#
x = 0
y = 400
b = 2 % 2
z = []
y.times do
    x+= 1
    if (x % 2) != b
      z << "<div>#{x}</div>"
    else z << "<div>#{x}</div>"
    end
end
puts z.to_s

#
puts "A version using a for loop."
x = 0
y = 79
b = 2 % 2
z = []
for x in 0..y
    x+= 1 unless (x > (y-1))
    if (x % 2) != b
      z << "<div>#{x}</div>"
    else z << "<div>#{x}</div>"
    end
end
puts z.to_s