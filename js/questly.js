function questly() {
  var myForm, nameField, questField, colorField, userData;
    myForm = document.querySelector('form');
    nameField = myForm.elements.name;
    questField = myForm.elements.quest;
    colorField = myForm.elements.color;

  function getValues(ev) {
    ev.preventDefault();
    userData = {
      name: nameField.value,
      quest: questField.value,
      color: colorField.value,
      friend: this.elements.friend.checked
    }
    writeData ();
  }

  function writeData() {
    var storyDiv = document.getElementById('story');
    var friendStory = '';
    if (userData.friend) {
        friendStory = 'Hey, I see you brought a friend!';
    }
    storyDiv.innerHTML = userData.name + ' is on a quest to ' + userData.quest +
    ' with a ring that is ' + userData.color + friendStory;
  }

  myForm.onsubmit = getValues;
}
questly();
