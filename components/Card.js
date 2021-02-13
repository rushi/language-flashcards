import React, { useState } from 'react';

const Card = (props) => {
    const [visible, setVisible] = useState(false);
    const visibility = visible ? 'animate__slideInUp' : 'invisible';
    const show = (e) => setVisible(true);

    return (
        <div
            onClick={show}
            className="animate__animated animate__fadeInUpBig bg-white rounded-sm mb-5 border-2 border-blue-200 cursor-pointer"
        >
            <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                        <h3 className="source text-gray-900 text-md font-medium truncate">{props.source}</h3>
                    </div>
                    <p
                        className={`animate__animated ${visibility} whitespace-normal mt-1 text-green-400 text-sm truncate`}
                    >
                        {props.destination}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
