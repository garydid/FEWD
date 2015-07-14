Element.prototype.Search = function(term){
  var gallery = document.getElementById('gallery');
  var search = this;
  var input = this.children[0];
  //when the user focuses on the input, clear its contents

  this.init = function(){
    input.addEventListener('focus',function(){
      this.value ='';
    });
    input.addEventListener('keyup',function(ev){

      if(ev.keyCode===13){

        var query = input.value;
        gallery.filter(query);

      }


    });

    //if the
  };
  //tag name li, get elements

 this.init();
  //after the user presses 'Enter/Return' , filter the gallery <li> using tags


}
