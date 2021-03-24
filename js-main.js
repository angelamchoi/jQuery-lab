// Testing JS to make sure it is working    
// $('button').click(function(event){
//     console.log("I'm alerting you");
// });

//Adding task by pressing enter
$('#newItems').keyup(function(event){
    let code = event.which;
    if(code === 13) { //13 = enter
        $('ul').append("<li><span><i class='fas fa-window-close'></i></span>"+ (" ")+ event.target.value+"</li>");

        //clear task
$('#newItems').val('');
    }
    });        
  

//Adding task by clicking button
$('button').click(function(event){
    let addText = $('#newItems').val();
    if (addText.length > 0 ) {
       $("<li><span><i class='fas fa-window-close'></i></span>" + (" ") +addText + "</li>").appendTo('ul'); 
   
//clear task
$('#newItems').val('');
}
});

//Removing task
$('ul').on('click','span', function(event) {
    $(this).closest('li').fadeOut(1000,function() {
        $(this).remove();
        
    });
});

//Seeing previous skills
