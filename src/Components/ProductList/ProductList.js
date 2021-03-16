import mockdata from '../MOCK_DATA.json'
import ProductStructure from './ProductStructure';
import './ProductList.css'
import { useState } from 'react';
const ProdcutList = () => {

    const [offset, setOffset] = useState(0)
    const [contentPerPage, setContentPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)

    const handleClickNext = () =>{
        setCurrentPage(currentPage + 1)
        setOffset(offset + contentPerPage)
        console.log(currentPage)
    }
    const handleClickPrev = () =>{
        setCurrentPage(currentPage - 1)
        setOffset(offset - contentPerPage)
        console.log(currentPage)
    }
        return (
            <>
            <div className='product-list-container'>
                {mockdata.filter(data => (data.id <=  (currentPage*contentPerPage)+contentPerPage) && (data.id > offset)).map(data => 
                    <ProductStructure 
                        id={data.id}
                        name={data.name}
                        details={data.details}
                        image={data.image}
                        price={data.price}
                    /> )}

            </div>
            <button onClick={handleClickPrev}>Prev Page</button>
            <button onClick={handleClickNext}>Next Page</button>
            </>
        )
    }

export default ProdcutList
