import PropTypes from "prop-types";
import React from 'react'

function Profile(props) {
    console.log(props)
    return (
        <div>
           
           <h1>{props.name}</h1> 
           <h1>{props.bio}</h1> 
           <h1>{props.profession}</h1> 
           <p>{props.children}</p>

        </div>
    )
}
Profile.defaultProps={
    name:"molka benothmen",
    bio:"Studing as a developer in GoMyCode",
    profession :"Developer"
};
Profile.propTypes={
    name: PropTypes.string ,
    bio: PropTypes.string ,
    profession :PropTypes.string,



}

export default Profile;
