## Classes, Instances, Attributes

## Learning Goals:
- [ ] Pass arguments to `new` by defining an `initialize` method in class
- [ ] Define instance variable
- [ ] Define attribute readers and writers
- [ ] Use `attr_` macros instead of reader and writer methods

<!-- In this Phase we will be talking about:
- local_vars
- @instance_var
- @@class_vars
- CONSTS
- $global_vars -->

## Analogy time 
We no longer create a hash every single time we want to create a superhero object. Instead, we created a blueprint (the `Superhero class`) for Ruby to do the job for us. For this lecture imagine Ruby as an elf who assembles together gifts for kids:

<img src="buddy-the-elf.jpg" height="200px" width="auto" style="display:inline"  alt="a still from the Elf movie picturing Will Ferrel as an assembly line elf preparing toys for kids">

Our elf needs to assemble thousands of different objects and each time checks the manual attached to them. For instance, when we tell Ruby to create a superhero:

```ruby
    batman = Superhero.new
```

## Pass arguments to `new` by defining an `initialize` method in class
* Every superhero needs some info:
    * name 
    * power

    ```ruby
    def initialize(name_argument, power_argument)
        @name = name_argument
        @power = power_argument
    end
    ```

    How we assign those values?

    * What is `@power`? //instance variable
    * Define instance variable
    * `batman.power = Money and Intellect"`
    * `batman.power`

    Now, try getting only the name:
    ```ruby
        batman = Superhero.new("Batman", "Money and Intellect")
        puts batman
        puts batman.name
    ```

## Define attribute readers and writers
* How do we access these values?
    * Getter method allows us to only read the value
    ```ruby
    def power
        @power
    end
    ```

    * Setter/writer method allows us to overwrite the value;
    ```ruby
    def power=(new_power)
        @power = new_power
    end
    ```

    * Confused what method to write?
        * if you want to have an access to an attribute but don't want to change its value later -> getter/reader method
        * if you want to have an opportunity to change the attribute's value -> setter/writer method
        * if you want to have both an access and an ability to change its value -> both


## Use `attr_` macros instead of reader and writer methods
* To read attributes: `attr_reader`
* To write attributes: `attr_writer`
* For reading & writing: `attr_accessor`
