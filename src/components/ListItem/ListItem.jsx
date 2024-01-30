import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.scss'
export default function ListItem({ result }) {
    const handleItemClick = () => {
        window.open(result.link, '_blank');
    };
    return (
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded list_item">
            <div className="flex items-center border-b border-gray-200 pb-6">
                <img src={result.owner.profile_image} alt={result.owner.display_name} className="w-12 h-12 rounded-full" />
                <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full">
                        <p onClick={()=> {window.open(result.owner.link, '_blank')}} className="text-xl font-medium leading-5 text-gray-800 owner_name">{result.owner.display_name}</p>
                        <p className="text-sm leading-normal pt-2 text-gray-500">{result.owner.reputation} reputation</p>
                    </div>
                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="px-2 item_title" onClick={handleItemClick}>
                <p className="text-m leading-5 py-3 text-gray-600">{result.title}</p>
                <p className="text-sm leading-4 py-2 text-gray-600">{result.answer_count} answers</p>
                <div className="flex">
                    {result.tags.map((tag) => (
                        <div className="py-2 px-4 me-2 text-xs leading-4 text-indigo-700 rounded-full bg-indigo-100">{tag}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
