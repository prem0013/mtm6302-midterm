// Array of an object to store the data 
const stories = [
    {
      title: 'Mission Statement',
      words: [
        'Adjective',
        'Verb 1',
        'Verb 2',
        'Plural Noun 1',
        'Plural Noun 2',
        'Plural Noun 3'
      ],
      output: function (words) {
        return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
      }
    },
    {
      title: 'Lunch Room!',
      words: [
        'Animal',
        'Adjective 1',
        'Adjective 2',
        'Vegetable 1',
        'Vegetable 2',
        'Noun',
        'Container'
      ],
      output: function (words) {
        return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
      }
    },
  
    {
      title: 'Weather Report',
      words: [
        'Adjective 1',
        'Adjective 2',
        'Article of Clothing',
        'Number 1',
        'Number 2',
        'Plural Noun 1',
        'Plural Noun 2'
      ],
      output: function (words) {
        return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
      }
    }
  ]

  // Function for pushing the input form into the HTML

  function inputFunction (e) {
    document.getElementById('input-class').style.display = 'flex';
    document.getElementById('bottom-btn').style.display = 'flex';
    document.getElementById('btn').style.display = "none";
    const heading = 'Provide the following words :';
    document.getElementById('para').textContent = heading;


    const data = e.target.dataset.num;
    
    const arr = stories[data].words;
    let inputForm = "";
    for(let elements in arr){
         inputForm = inputForm +  ` <input class= "input-class-${elements} input-class-1" type = "text" name="${arr[elements]}" placeholder="${arr[elements]}" data-id="${data}"/> `;
    }
    
    document.getElementById('input-class').innerHTML = inputForm;
    
    // document.getElementById("main-container").style.height = "90vh";

    const button = `<button class='btn ripple' id="btm-btn" >Read Story</button>`;
    document.getElementById("bottom-btn").innerHTML = button;

  }
  // Adding even Listener on buttons
  const btn1 = document.getElementById('btn-1');
  btn1.addEventListener('click', inputFunction, false);
  const btn2 = document.getElementById('btn-2');
  btn2.addEventListener('click', inputFunction, false);
  const btn3 = document.getElementById('btn-3');
  btn3.addEventListener('click', inputFunction, false);


const story = [

    {
        'Adjective': '',
        'Verb 1': '',
        'Verb 2': '',
        'Plural Noun 1': '',
        'Plural Noun 2': '',
        'Plural Noun 3': ''
        
    },
    
    {
        'Animal' : "sdd",
        'Adjective 1' : "",
        'Adjective 2' : "",
        'Vegetable 1' : "",
        'Vegetable 2' : "",
        'Noun' : "",
        'Container' : "",
        
    
     },
    {
        'Adjective 1' : "",
        'Adjective 2' : "",
        'Article of Clothing' : "",
        'Number 1' : "",
        'Number 2' : "",
        'Plural Noun 1' : "",
        'Plural Noun 2' : "",
    
      
    }
]

function createButton(){
    const btn = `<button class="btn ripple" id="asb-btn">Create another story</button>`
    document.getElementById("another-story").innerHTML = btn;
}

function onClicked() {

    document.getElementById('another-story').style.display = 'flex';
    document.getElementById('bottom-btn').style.display = 'flex';
    document.getElementById('story').style.display = 'flex';

    let input_fields = document.querySelectorAll("input");
    const data = input_fields[0].dataset.id;
    for(let i=0; i < input_fields.length; i++){
        const name = input_fields[i].name;
        const text = input_fields[i].value;
        story[data][name] = text;
    }
    
   const heading = `<h2>${stories[data].title}</h2>`;
   const returnedValue = stories[data].output(story[data]);
   const para = `<div class='result' id=result'> ${heading} ${returnedValue} </div>`;
   document.getElementById('story').innerHTML = para;
   document.getElementById('input-class').style.display = 'none';
   document.getElementById('para').innerText = 'Your Story :';
   document.getElementById('bottom-btn').style.display ='none';
   createButton();
    

}

function homePage() {
    document.getElementById('btn').style.display = "flex";
    document.getElementById('another-story').style.display = 'none';
    document.getElementById('para').innerText = "Choose a Story :";
    document.getElementById('story').style.display = 'none';
}
  // Read story button
const storyBtn = document.getElementById('bottom-btn');
storyBtn.addEventListener("click", onClicked, false);

const anotherStoryBtn = document.getElementById("another-story");
anotherStoryBtn.addEventListener("click", homePage, false);




  