function Binding(b) {
    this.elementBindings = [];
    this.value = b.object[b.property];
  
    this.valueGetter = () => {
      return this.value;
    };
  
    this.valueSetter = (val) => {
      this.value = val;
      for (let i = 0; i < this.elementBindings.length; i++) {
        const binding = this.elementBindings[i];
        binding.element[binding.attribute] = val;
      }
    };
  
    this.addBinding = (element, attribute, event) => {
      const binding = {
        element: element,
        attribute: attribute
      };
      if (event) {
        element.addEventListener(event, (event) => {
          this.valueSetter(element[attribute]);
        });
        binding.event = event;
      }
  
      this.elementBindings.push(binding);
      element[attribute] = this.value;
      return this;
    };
  
    Object.defineProperty(b.object, b.property, {
      get: this.valueGetter,
      set: this.valueSetter
    });
  
    b.object[b.property] = this.value;
  }



//////////////////////////////////////////////////////////  1 ///////////////////////  
  var obj = { a: ""};
  var myInputElement1 = document.getElementById("title");
  var myDOMElement1 = document.getElementById("t1")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement1, "value", "keyup")
  .addBinding(myDOMElement1, "innerHTML")

//////////////////////////////////////////////////////////  2 ///////////////////////
  var obj = { a: ""};
  var myInputElement2 = document.getElementById("yearofproduction");
  var myDOMElement2 = document.getElementById("t2")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement2, "value", "keyup")
  .addBinding(myDOMElement2, "innerHTML")

//////////////////////////////////////////////////////////  3 ///////////////////////

    var obj = { a: ""};
  var myInputElement3 = document.getElementById("sammary");
  var myDOMElement3 = document.getElementById("t3")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement3, "value", "keyup")
  .addBinding(myDOMElement3, "innerHTML")

//////////////////////////////////////////////////////////  4 ///////////////////////
  var obj = { a: ""};
  var myInputElement4 = document.getElementById("sammary1");
  var myDOMElement4 = document.getElementById("t4")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement4, "value", "keyup")
  .addBinding(myDOMElement4, "innerHTML")

//////////////////////////////////////////////////////////  5 ///////////////////////
  var obj = { a: ""};
  var myInputElement5 = document.getElementById("datee");
  var myDOMElement5 = document.getElementById("t5")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement5, "value", "keyup")
  .addBinding(myDOMElement5, "innerHTML")

//////////////////////////////////////////////////////////  6 ///////////////////////
  var obj = { a: ""};
  var myInputElement6 = document.getElementById("genree");
  var myDOMElement6 = document.getElementById("t6")

  new Binding({
    object: obj,
    property: "a"
  })


  .addBinding(myInputElement6, "value", "keyup")
  .addBinding(myDOMElement6, "innerHTML")

//////////////////////////////////////////////////////////  7 ///////////////////////
  var obj = { a: ""};
  var myInputElement7 = document.getElementById("exeproduct");
  var myDOMElement7 = document.getElementById("t7")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement7, "value", "keyup")
  .addBinding(myDOMElement7, "innerHTML")

/////////////////////////////////////////////////
  var obj = { a: ""};
  var myInputElement8 = document.getElementById("img");
  var myDOMElement8 = document.getElementById("t8")

  new Binding({
    object: obj,
    property: "a"
  })

  .addBinding(myInputElement8, "value", "keyup")
  .addBinding(myDOMElement8, "innerHTML")
  
    
 
    


    

    
    

  

    
   
  
  
  