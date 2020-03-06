import React from 'react';


 const Header = () => {
    // const text = useRef('');

    // const onChange = e => {
    //     searchLogs(text.current.value);
    // };
 
    return (
      <nav>
      <div class="nav-wrapper green accent-3">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
    );
};

// SearchBar.propTypes = {
//     searchLogs: PropTypes.func.isRequired,
// }

export default Header;




