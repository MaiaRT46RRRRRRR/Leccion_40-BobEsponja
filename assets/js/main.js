"use strict";
const render =(root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Apend de componentes
    wrapper.append(Header());
    wrapper.append(Todo());

    root.append(wrapper);
};

const state ={
  todos:[]
};

$( _ =>{

  const root =$('.root');
  render(root);
});
