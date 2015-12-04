var socket = io();

var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

socket.on('connect', function(){
	console.log ('Connected to the sever');
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});


var $roomTitle = jQuery('.room-title');
$roomTitle.text(room)

socket.on('message', function(message){
	var currentTime = moment.utc(message.timestamp);
	var $messageDisplay=jQuery('.messages');
	console.log('New message');
	console.log(message.text);
	
	
	$messageDisplay.append('<p>'+'<strong>'+ message.name + ' ' + currentTime.local().format('h:mma')+ ':</strong> ');
	$messageDisplay.append('<p>' + message.text +'</p>');
});
	
// Handles submitting of new message
var $form = jQuery('#message-form');
var $message = $form.find('input[name=message]');
$message.focus();

$form.on('submit', function(event){
	event.preventDefault();

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('').focus();
});