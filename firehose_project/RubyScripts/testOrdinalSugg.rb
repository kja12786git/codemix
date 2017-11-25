n = gets.to_i

#more concise syntax used
def ordinal(n)
  ending = case n % 100
           when 11, 12, 13 then 'th'
           else
             case n % 10
             when 1 then 'st'
             when 2 then 'nd'
             when 3 then 'rd'
             else 'th'
             end
           end

  puts "This is #{n}#{ending} item"
end
puts ordinal(n)