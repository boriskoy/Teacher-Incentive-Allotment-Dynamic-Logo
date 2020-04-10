//wrap div around logo image

var action_logo_div;
var container_block;
 
action_logo_div = document.createElement('div');
//action_logo_div.innerHTML = 'This demo DIV block<br /> was inserted <br />nto the page using JavaScript.' ;
action_logo_div.id ="action_logo_div";
container_block = document.getElementById( 'Action_bar' );
container_block.appendChild(action_logo_div);


//insert link with nested in it into #action_logo_div
document.getElementById('action_logo_div').innerHTML = '<a href="http://tia.steelstudios.com.php72-28.phx1-1.websitetestlink.com/" id="action_logo_link"><img src="/wp-content/uploads/2020/03/newer_logo.png" id="action_logo_custom" /></a>';



