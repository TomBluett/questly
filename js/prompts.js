var name = prompt('What is your name?');

if (name && (name !== 'null')) {
  document.writeln('<p>Hi there, ' + name  +'!</p>');
}
else {
  var name = 'Fred'
  document.writeln('<p>Now your name is ' + name + '.</p>');
}

var quest = prompt('What is your quest?');

if (quest && (quest !== 'null')) {
  document.writeln('<p>'+ quest + ' sounds super cool.</p>');
}
else {
  var quest = 'be the class clown'
  document.writeln("<p>You're so boring, " + name +
  '.  Your designated quest is ' + quest + '.</p>');
}

var color = prompt('What is your favorite color?');

if (!color || (color === 'null')) {
  color = 'magenta';
}
document.writeln('<p>I love ' + color + '!</p>');

document.writeln('<p>There once was a warrior named ' + name +
  ' on a mighty quest indeed: ' + quest + '. ' + 'Luckily, ' + name +
   ' was wearing lucky socks colored ' +color + '.</p>')
