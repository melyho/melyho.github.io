function openTab(tabName) {

  var divToShow = document.getElementById('rv');
  if (divToShow.style.display === 'block') {
    return;
  } 

  var divToShow = document.getElementById('cg');
  if (divToShow.style.display === 'block') {
    return;
  } 
  
  var i, tabContent;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
  }
  
  
  var i = 0;
  var txt = "Hi, I'm Melissa!";
  var speed = 50;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("hi").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  document.getElementById('homeButton').click();
  
  function goHome() {
    window.location.href = "index.html";
  }



  document.getElementById('keepintouch').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

function showProjectCard(cardId) {
  var div = document.getElementById(cardId);
  div.style.display = 'block';
}

function closeCard(cardId) {
  var div = document.getElementById(cardId);
  var desktop = document.getElementById('about');

  div.style.display = 'none';
  desktop.style.display = "in-block";
}

function openLinkInNewTab(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('my-modal');
  const modalImage = document.getElementById('modalImage');
  const span = document.getElementsByClassName('close')[0];

  window.openModal = function(div) {
      const imageSrc = div.getAttribute('data-image');
      modalImage.src = imageSrc;
      modal.style.display = 'block';
  }

  span.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});
