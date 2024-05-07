import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBlock = ({ onSearch }) => {

    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    const [selectedCompany, setSelectedCompany] = useState('');

    const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];
    const [selectedCategories, setSelectedCategories] = useState('');

    const [selectedTopValue, setSelectedTopValue] = useState(10);
    const [selectedMinValue, setSelectedMinValue] = useState(0);
    const [selectedMaxValue, setSelectedMaxValue] = useState(10000);

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleCategoriesChange = (e) => {
        setSelectedCategories(e.target.value);
    };

    const handleTopChange = (e) => {
        setSelectedTopValue(e.target.value);
    };

    const handleMinChange = (e) => {
        setSelectedMinValue(e.target.value);
    };

    const handleMaxChange = (e) => {
        setSelectedMaxValue(e.target.value);
    };

 
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
                companyName: selectedCompany,
                categories: selectedCategories,
                rating: selectedTopValue,
                minPrice: selectedMinValue,
                maxPrice: setSelectedMaxValue
        });
      };
    


    return (
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg mx-12 my-6 max-w-[1200px] mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Search</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="text-xl">
                        Companies:
                        <select
                            value={selectedCompany}
                            onChange={handleCompanyChange}
                            className="input input-bordered w-full max-w-xs bg-white"
                        >
                            <option value="">Select a company</option>
                            {companies.map((company, index) => (
                                <option key={index} value={company}>{company}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label className="text-xl">
                        Categories:
                        <select
                            value={selectedCategories}
                            onChange={handleCategoriesChange}
                            className="input input-bordered w-full max-w-xs bg-white"
                        >
                            <option value="">Select a Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label className="text-xl">
                        Top products:
                        <input type="number" value={selectedTopValue} onChange={handleTopChange} className="input input-bordered w-full max-w-xs bg-white" />
                    </label>
                </div>
                <div>
                    <label className="text-xl">
                        Minimum Price:
                        <input type="number" value={selectedMinValue} onChange={handleMinChange} className="input input-bordered w-full max-w-xs bg-white" />
                    </label>
                </div>
                <div>
                    <label className="text-xl">
                        Maximum Price:
                        <input type="number" value={selectedMaxValue} onChange={handleMaxChange} className="input input-bordered w-full max-w-xs bg-white" />
                    </label>
                </div>
                <div className="col-span-full">
                    <button type="submit" className="btn mt-6 px-6 py-3 shadow-md transition duration-300 ease-in-out">Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBlock;
