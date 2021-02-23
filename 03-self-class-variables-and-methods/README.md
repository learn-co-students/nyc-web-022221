# Class & Methods

## Learning Goals:
- [ ] Revise what we did yesterday: create a class and an instance with data (attributes) and instance methods (a behavior)
- [ ] Practice reading existing code base
- [ ] Create class methods
- [ ] Check what `self` is
- [ ] Call methods on the implicit or explicit `self`
- [ ] Explain the difference between `variable`, `@variable` and `@@variable`

## Practice reading existing code base
Read code in `superhero.rb` and answer these questions:
- What is `attr_accessor` doing?
- How many instance variables is every instance holding? 
- How many instance methods can each instance perform?

## Be able to check what `self` is
* What is `self`?
    * "`self` is a special variable that points to the object/class that "owns" the currently executing code."
* Let's check what `self` is in the `initialize` method

## Let's see the difference between the two:
```ruby
def who_am_i
    puts "I am #{self}"
end

def self.who_am_i
    puts "I am #{self}"
end
```
* How do we know what `self` is? Look where it's placed: if it's placed only inside a method body, `self` will be what you call the method on; if it's placed in the class (e.g. in the method name), `self` will denote the class;
    * If you want your method to act on the whole class -- name it beginning with `self` (e.g. `self.all`)
    * If you want your method to act on an instance -- you just need the method name (e.g. `announce_power`)

Now, will any of these work?
```ruby
def who_am_i
    puts "I am #{self.name}" #this is an example of explicit self
    puts "I am #{name}" #implicit self: name is actually a method given in attr_accessor that returns the instance variable @name
    puts "I am #{@name}" #no self is called in this case: it is just an instance variable
    puts "I am #{self.@name}" #this won't work because there's no method called "@name" not can there be as "@" is reserved for instance variables
end
```

## Call methods on the implicit or explicit `self`
* What is explicit self?
    * "Using `self` keyword use class/object properties"
* What is implicit self?
    * "If you call a method in the same object as the context without mentioning `self`, that's implicit self."
* Which one to use? It's your preference! 


## Create instance methods and class methods
* What is an **instance method**?
    * "An instance method provides functionality to one instance of a class. A method that we run on an instance"
* Create methods that display a message about an instance (a superhero)
```ruby
    def announce_power
        puts "I am on the side of good!"
    end
```
We invoke it by chaining it to the Superhero variable: `batman.announce_power`

* What is a **class method**?
    * How can we keep track of all the superheroes we have created? For example:
    ```ruby
        superheroes = []
    ```
    However, this is not efficient -- maybe we can find a better location for the superheroes? 
    * Now, we need to store all our objects in one place. Let's create a class variable (`@@all`) that will become a box in which we can put all instance variables:
    ```ruby
        class Superhero
            @@all = []
        end
    ```
    Let's think about this variable as if it were a big box for the instances.

    * "A class method provides functionality to a class itself. A method that we run on a class and method's name start with self."
    * Let's create a method that when called on the class, will return the variable:
    ```ruby
        def self.all
            @@all
        end
    ```


## Be able to add each instance to a class variable
* Let's add each new superhero to the box of all superheroes:
```ruby
    def initialize(name, power)
        @name = name
        @power = power
        @@all << self
    end
```
Now, after we've run this method a couple of times, we will have a couple of instances in that array:

```ruby
    Superhero.all
# => [#<Superhero:0x00007fad90835500 @name="Batman", @power="Money and Intellect">,#<Superhero:0x00007fad8e27f6f8 @name="Superman", @power="Super Strength">,#<Superhero:0x00007fad8e3963e8 @name="Flash", @power="Super Speed">,#<Superhero:0x00007fad8f11cb70 @name="Green Lantern", @power="Magic Ring", >]
```


## Variable vs instance variable vs class variable
- `variable` -> this is just standard locally-scoped variable that disappears as soon as the method encapsulating it runs; 
- `@variable` -> this is an instance variable containing its individual data; as long as the instance exists, the instance will carry this variable with itself (e.g. if it's a superhero, think about the costume they wear) -- this data is available only to the instance;
- `@@variable` -> this is a class variable; it is used to e.g. store all the instances (think of the box with superheroes); 

Read more about variables [here](https://medium.com/swlh/hitchhikers-guide-to-ruby-variables-1b4cf83d540c)
