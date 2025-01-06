var user = {
      name: 'user',
      foo: function(){
        console.log(this.name)
      }
    }
    var user1 = {
      name: 'user1hh',
      foo: function(){
        console.log(this.name)
      }
    }
    user.foo.call(user1)//user1