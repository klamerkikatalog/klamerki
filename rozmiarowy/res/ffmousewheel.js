if (window.addEventListener) window.addEventListener('click', function(e) {
        if (e.which == 2 && e.target.tagName == 'IMG') e.preventDefault();
    }, false); 
