
function
  darkmode(){
            var theme = document.getElementsByTagName('link')[0];

            if (theme.getAttribute('href') == 'css/project.css') { 
                theme.setAttribute('href', 'css/girls2.css');
                 
            } else { 
                theme.setAttribute('href', 'css/project.css');
                

            } 
        } 