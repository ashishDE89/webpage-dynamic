// Function to fetch the yoga content from the provided URL
function fetchYogaContent() {
    fetch('https://www.markgiubarelli.com/yoga-teacher-training/the-history-of-yoga/')
      .then(response => response.text())
      .then(data => {
        // Extract the required content from the fetched data
        var startIndex = data.indexOf('<h2>The History of Yoga</h2>');
        var endIndex = data.indexOf('<h3>About the Author</h3>');
        var yogaContent = data.substring(startIndex, endIndex);
        
        // Update the content element with the fetched yoga content
        var contentElement = document.getElementById('yoga-content');
        contentElement.innerHTML = yogaContent;
      })
      .catch
    }