var egg = new Egg();
egg.addCode("up,up,down,down", function() {
    alert('done')
  }).addHook(function(){
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
  }).listen();