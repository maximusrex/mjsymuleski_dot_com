/*Make that background image show up nice */
document.addEventListener('DOMContentLoaded', imageLoad);

function imageLoad(event) {
    var bodyArray = document.getElementsByTagName('body');
    var body = bodyArray[0];
    body.setAttribute('style', 'background: url(images/eigen_bckgrnd.png) no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;'); 
}

/*Complete dropdown Code - */       
        var activeDropdown = {};//create an object for the active dropdown
        
        //add an event listener to the element with the ID dropdown menu, and when we click on it, run this function showDropdown
        document.getElementById('dropdown-menu').addEventListener('click',showDropdown);
        
        
        //the showDropdown function
        function showDropdown(event){
            
          if (activeDropdown.id && activeDropdown.id !== event.target.id) {
            activeDropdown.element.classList.remove('active');    
          }
        
            if (event.target.tagName === 'LI') {
   
                //take out #mainTitle Panel when we choose a menu item, this will only come back if we reload the page, and is the first content that "appears" on page
                document.getElementById('mainTitle').style.display = 'none';
                
                //functionality to add innerHTML to button removed, but we still need that event.target.innerHTML to match the panels[i].id
                //activeDropdown.button.innerHTML = event.target.innerHTML;
                
                //add/remove visiblePanel class to change pannel.
                var panels = document.getElementsByClassName("panel");
                for(var i=0;i<panels.length;i++) {
                    if(panels[i].id == event.target.innerHTML) {
                        panels[i].classList.add('visiblePanel');
                    } else {
                        panels[i].classList.remove('visiblePanel');
                    }
                }//end panels for loop
                
              
                //now loop through the List Items, and see if each contains "check" class, and if it does, remove that class
                for (var i=0;i<event.target.parentNode.children.length;i++){
                    if (event.target.parentNode.children[i].classList.contains('check')) {
                    event.target.parentNode.children[i].classList.remove('check');
                    }
                }//end check for loop
                
                //timeout here so the check is only visible after opening the dropdown again.  The check just shows us which panel we have picked
                    window.setTimeout(function(){
                  event.target.classList.add('check');
                     },500)
                }//end timeout
            
            //the code below actually applies the active class
            //now loop through the children of 'dropdown-menu' again
            for (var i = 0;i<this.children.length;i++){
                //and if it's our dropdown-selection ul
            if (this.children[i].classList.contains('dropdown-selection')){
                //get the ID and store it in the active dropdown object
                activeDropdown.id = this.id;
                console.log(activeDropdown.id);
                //get each child and store it in the dropdown object
                activeDropdown.element = this.children[i];
                //and finally, add the 'active' class
                this.children[i].classList.add('active');
             }
                //otherwise we're just clicking on the button
            else if (this.children[i].classList.contains('dropdown-button')){
              activeDropdown.button = this.children[i];
            }
          }
        }//end of the showDropdown function
        
        //finally we want to make sure that dropdown closes if we click anywhere else on the page, so bind an event to the window
        window.onclick = function(event) {
            //if we're just clicking anywhere, and not on the menu, target class list doesn't contain the 'dropdown-button' class
          if (!event.target.classList.contains('dropdown-button')) {
              //take away that active class, menu goes away
            activeDropdown.element.classList.remove('active');
          }
        }
        
        
        