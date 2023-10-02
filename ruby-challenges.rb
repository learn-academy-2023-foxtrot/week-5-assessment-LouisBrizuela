# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# name : filter_array
# input : array and string
# output : array
# process : take an array and a string as parameters and use select to only return the values with the setected letter

def filter_array array, string # takes an array and a string as a parameter
    array.select { |element| element.include?(string)} # use select to retun the values with only the selected letter
end
p filter_array(beverages_array,filter_letter_o)
p filter_array(beverages_array,filter_letter_t)
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# name : alphabetical_order
# input : hash
# output : array
# process : grab all the values from the hash, flatten it then use sort

def alphabetical_order hash # method will take a hash as a parameter
    p sorted_array = hash.values.flatten.sort # this gathers all the values in the array and removes all nested arrays and sorts them in alphabetical order
end
alphabetical_order(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike # name of the class will be bike
    attr_reader :model, :wheels, :current_speed 
  
    def initialize(model, wheels = 2) # i initalize every bike to have 2 wheels and needs to be given a model
      @model = model
      @wheels = wheels
      @current_speed = 0 # i set the starting speed to 0
    end
  
    def bike_info # this method will display the bikes info
      "The #{@model} has #{@wheels} and is going #{@current_speed} mph" #use string interpilation to display info
    end

    def pedal_faster(pedal_faster) # this method will add speed to the current speed
        @current_speed += pedal_faster # will set the speed to what the user inputs + the current speed
    end
    
    def brake(brake) # method will subract the speed 
        @current_speed -= brake # will set the speed to what the user inputs - the current speed
        @current_speed = [0, @current_speed].max # this will make sure the speed will not be a negative
    end

  end
  my_bike = Bike.new("Trek bike")
  p my_bike.bike_info
  p my_bike.pedal_faster(10)
  p my_bike.pedal_faster(18)
  p my_bike.brake(5)
  p my_bike.brake(25)

# Pseudo code:
# name : Bike
# input : string
# output : string
# process : create a class that initalizes a bike to have a model, 2 wheels and a current speed. create a method that displays all the info and a method for adding speed and decreasing speed

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
