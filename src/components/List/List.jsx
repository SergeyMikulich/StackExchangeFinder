import React from 'react';
import ListItem from '../ListItem/ListItem';
import { useState } from 'react';
import './List.scss';
import Pagination from '../Pagination/Pagination';
import NotFound from '../NotFound/NotFound';

const ITEMS_PER_PAGE = 7;
function List({ results }) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const getCurrentItems = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return results.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <>
            {results && results.length > 0 && (
                <div className="list">
                    <div className="w-full">
                        <div className="lg:flex items-center flex-wrap justify-center w-full list_items">
                            {getCurrentItems().map((result) => (
                                <ListItem key={result.id} result={result} />
                            ))}
                        </div>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}

            {(!results || results.length === 0) && <NotFound />}
        </>
    );
}

export default List;
