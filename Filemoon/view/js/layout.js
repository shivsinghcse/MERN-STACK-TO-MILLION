const sidebar = document.querySelector('#sidebar');
const section = document.querySelector('#section');

const toggleSidebar = () => {
    const defaultWidth = sidebar.style.width;
    if(defaultWidth === '250px')
    {
        sidebar.style.width = "0px";
        sidebar.style.transition = '0.3s';
        section.style.marginLeft = "0px";
        section.style.transition = '0.3s';
    }
    else
    {
        sidebar.style.width = '250px';
        sidebar.style.transition = '0.3s';
        section.style.marginLeft = '250px';
        section.style.transition = '0.3s';
    }
       
}

