// NavigationCircle.js
import React, { useState } from "react";
import "./style.css";
import circle from '../../images/circle.png';

export default function NavigationCircle({ items, onItemClick }) {
    const [rotate, setRotate] = useState(0);
    const [selectedItem, setSelectedItem] = useState(1);

    const handleItemClick = (index) => {
        setSelectedItem(index);
        const rotationAngle = items.find(item => item.index === index)?.rotationAngle || 0;
        setRotate(rotationAngle);
        onItemClick(index);
    };

    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className="red-circle">
                    <img src={circle} alt="circle" />
                </div>
                <div className="buttons-container">
                    <ul>
                        {items.map((item) => (
                            <li
                                key={item.index}
                                className={`mb-8 w-[90%] text-2xl cursor-pointer ${selectedItem === item.index
                                        ? 'pb-2 text-[#F6393D] border-b-[2px] border-[#EA98F7]'
                                        : 'text-[#343333]'
                                    }`}
                                onClick={() => handleItemClick(item.index)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className="rotating-circle"
                    style={{
                        transform: `rotate(${rotate}deg)`,
                    }}
                ></div>
            </div>
        </div>
    );
}
