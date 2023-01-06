import React from 'react';

const SkillCard = ({ icon,title }) => {
    return (
        <div>
            <span className='skills-icons'>{icon}</span>
            <p>{title}</p>
        </div>
    );
};

export default SkillCard;