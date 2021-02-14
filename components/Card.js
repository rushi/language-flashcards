import React, { useState } from 'react';

const Card = (props) => {
    const [visible, setVisible] = useState(false);
    const visibility = visible ? 'animate__slideInUp' : 'invisible';
    const show = (e) => setVisible(true);

    // TODO: better animation animate__animated animate__fadeInUpBig
    return (
        <div onClick={show} className="card bg-white rounded-sm mb-0 border border-blue-200 cursor-pointer">
            <div className="w-full flex items-center justify-between space-x-6">
                <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3 bg-blue-100 border-b border-blue-200 px-3 py-1">
                        <p className="source text-gray-900 text-sm">{props.source}</p>
                    </div>
                    <p
                        className={`animate__animated animate__faster ${visibility} whitespace-normal mt-1
                        text-gray-800 text-md px-3 py-1 truncate`}
                    >
                        {props.destination}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
