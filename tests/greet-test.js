describe('The Greeting Function', function() {
  it('should return Greeting in English and the name of the person greeted', function() {
    var greeter = GreetmeFunction();
    assert.equal(greeter.greet("Luvuyo", 'English'), 'Good day, Luvuyo');
  });
  it('should return Greeting in Xhosa and the name of the person greeted', function() {
    var greeter = GreetmeFunction();
    assert.equal(greeter.greet("Luvuyo", 'Xhosa'), 'Molo, Luvuyo');
  });
  it('should return Greeting in Afrikaans and the name of the person greeted', function() {
    var greeter = GreetmeFunction();
    assert.equal(greeter.greet("Luvuyo", 'Afrikaans'), 'Goeie dag, Luvuyo');
  });
  it('should return Greeting undefined if name is not defined', function() {
    var greeter = GreetmeFunction();
    assert.equal(greeter.greet("", 'English'), undefined);
  });
  it('should be able to count different names of people greeted in the same language', function(){
      var greeting = GreetmeFunction();

      greeting.greet("Phindi", 'Xhosa');
      greeting.greet("Shaun", 'Xhosa');
      greeting.greet("Banele", 'Xhosa');
      greeting.greet("lwando", 'iXhosa');

      assert.equal(greeting.counter(), 4)
    });

    it('should count once for the same name entered despite the language entered', function(){
      var greeting = GreetmeFunction();

      greeting.greet("siya", 'Afrikaans')
      greeting.greet("siya", 'English')
      greeting.greet("siya", 'IsiXhosa')

      assert.equal(greeting.counter(), 1);
    });


});
