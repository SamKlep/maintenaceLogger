import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

 const Header = () => {
    // const text = useRefm('');

    // const onChange = e => {
    //     M.searchLogs(text.current.value);
    // };
 
    return (
      <nav>
      <div class="nav-wrapper orange">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="index.html"><i className='material-icons large black-text'>build</i></a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="phone.html"><i className='material-icons black-text'>phone</i></a></li>
          <li><a href="message.html"><i className='material-icons black-text'>message</i></a></li>
        </ul>
      </div>
    </nav>
    );
};

// SearchBar.propTypes = {
//     searchLogs: PropTypes.func.isRequired,
// }

export default Header;




