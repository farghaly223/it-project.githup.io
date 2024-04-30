
function
  switchdark(){
            var theme = document.getElementsByTagName('link')[0];

            if (theme.getAttribute('href') == 'css/project.css') { 
                theme.setAttribute('href', 'css/dark.css');
                 
            } else { 
                theme.setAttribute('href', 'css/project.css');
                

            } 
        } 
function alertbox() {
            alert("Hello\nHow are you?");
          }
