#Comparison

a1= ["1","2","5","7"]
a2 = ["1","2","3"]
a2 << a1
v = a1 <=> a2
puts v

#array push and targeting test
a3 = a1 + a2
a3 << 10
a4 = []
a5 = []
a6 = []

100.times do
    x = rand(10..109)
    y = rand(10..109)
    a4 << x
    a5 << "#{x}!"
    if x % 2 == 0 # || y % 3 == 0
        a6 << "#{y}" << "#{x}!"
    else
        a6 << "#{x}!" << "#{y}"
    end
end

#a6 = a4 + a5

puts "#{a3.to_s} a3 array"
puts a6.to_s
print a6.length

#for i in 0..100
#    if a4[i] != nil && (a4[i] % 2) === 0
#        a4 << "#{i}! "
#    end
#end