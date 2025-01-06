function foo1() {
 //   console.log('foo1', this)
  }
  function foo2() {
    name :'ru'
    console.log('foo2', this)
    foo1()
  }
var obj={ 
    foo:function foo3() {
    console.log('foo3', this)
    foo2()
  }
}
obj.foo();