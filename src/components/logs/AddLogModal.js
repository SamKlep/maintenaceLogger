import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');


    const onsubmit =() => {
        if(message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            console.log(message, tech, attention);
        }
    };


    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)}
                    />
                    <label htmlFor='message' className='active'>
                        Log Message
                    </label>
                </div>
            </div>

            <div className='row'>
                <div className='input-field'>
                    <select name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                        <option value='' disabled>Select Technician
                        </option>
                        <option value='John Doe'>John Doe</option>
                        <option value='Sampson Willam<'>Sampson Willam</option>
                        <option value='Henry Henderson'>Henry Henderson</option>
                    </select>
                </div>
            </div>

            <div className='row'>
                <div className='input-field'>
                    <p>
                        <label>
                            <input type='checkbox' 
                            className='filled-in' 
                            checked={attention} 
                            value={attention} 
                            onChange={e => setAttention(!attention)} 
                            />
                                <span>Needs Attention</span>
                        </label>
                    </p>

                </div>
                    <div className='modal-footer'>
                        <a href='#!' onClick={onsubmit} className='modal-close blue waves-effect waves-light btn'>Enter</a>
                    </div>

            </div>
        </div>
    );
};


const modalStyle = {
    width: '75%',
    height: '75%',
    padding: '15px'
};

export default AddLogModal;