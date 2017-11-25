array = ["1","2","3","2","2"]

#################################
## remove array dups concisely ##
#################################
def unique(array)
  array.uniq
end
puts array
puts unique(array)

#######################################################
## remove array duplicate for copied array elaborated #
#######################################################
array2 = []
array.each do |this|
    array2 << this unless array2.include?(this)
  end
puts "This is array two... #{array2}"