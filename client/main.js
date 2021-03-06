import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    web3.eth.getBalance("0x130744aBb08b11697d332406e6e3Eb223258F933",
    function(err, res){
      alert(res)
    });
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
     web3.eth.getBalance("0x130744aBb08b11697d332406e6e3Eb223258F933",
    function(err, res){
      alert(res)
    });
  },
});
