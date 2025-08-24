function generateStory () {
    //get the form elements and apply defaults for blanks
    let time = document.getElementById('time').value || '9 am';
    let person = document.getElementById('person').value || 'random student';
    let object = document.getElementById('object').value || 'paper weight';
    let place = document.getElementById('place').value || 'SDGKU Offices';
    let action = document.getElementById('action').value || 'coding in JavaScript';

    //store different stories in an object with title and text
    const stories = {
        1: {
            title: "The Unbelievable Event",
            text: `Everyone in ${place} was shocked when, at ${time}, ${person} decided to ${action} using only a ${object}. Nobody expected it, but it instantly became the most talked-about event in town.`
        },
        2: {
            title: "The Hidden Secret",
            text: `Long before ${time}, rumors spread that ${person} had hidden a ${object} somewhere inside ${place}. When they finally tried to ${action}, the secret was revealed in the most dramatic way possible.`
        },
        3: {
            title: "Echoes in the Hall",
            text: `The quiet halls of ${place} echoed at ${time} as ${person} clutched a ${object}. With a deep breath, they chose to ${action}, setting off a chain of events nobody could stop.`
        },
        4: {
            title: "The Unexpected Arrival",
            text: `At ${time}, the last thing anyone expected was for ${person} to show up at ${place} with a ${object}. But the moment they decided to ${action}, everything changed forever.`
        },
        5: {
            title: "The Legend Comes True",
            text: `Nobody believed the legend until ${person} appeared at ${place} holding a ${object}. When the clock struck ${time}, they boldly chose to ${action}, proving the story true once and for all.`
        }
    };


    //chose random story #
    let storyNum = Math.floor(Math.random()*5)+1;

    //set variable to contain the choosen story from the stories object
    let story = stories[storyNum];

    //send the story content to the browser
    document.querySelector('.story-title').innerHTML = story.title;
    document.querySelector('.story-content').innerHTML = story.text;
}

