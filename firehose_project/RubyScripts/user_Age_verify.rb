puts "Enter your age:"
input_Age = gets.to_i
def ageVerifi(input_Age)
  if input_Age < 21
    text = "You are not legally allowed to buy alcohol in the US."
  else
    text = "You are legally allowed to buy alcohol in the US."
  end
  return text
end

puts ageVerifi(input_Age)