/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

 $(document).on('mouseover mouseout', '.draggable', function(){
     // what you want to happen when mouseover and mouseout
     // occurs on elements that match '.dosomething'
     var $draggable = $('.draggable').draggabilly();
 });
