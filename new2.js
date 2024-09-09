
document.addEventListener('DOMContentLoaded', function() {
        // Get references to the image and video elements
        var thumbnail = document.getElementById('thumbnail');
        var video = document.getElementById('video');
    
        // Add a click event listener to the image
        thumbnail.addEventListener('click', function() {
            // Show the video element
            video.style.display = 'block';
    
            // Start playing the video
            video.play();
        });
    });
   // Function to open the video popup
   function openVideoPopup() {
    document.getElementById('overlay').style.display = 'block';
  }

  // Function to close the video popup
  function closeVideoPopup() {
    document.getElementById('overlay').style.display = 'none';
  }

  // Add a click event listener to the image
  document.getElementById('image-popup').addEventListener('click', openVideoPopup);
