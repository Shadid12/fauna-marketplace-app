import { useState } from 'react';
import Image from 'next/image';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import marketIcon from "../public/market.svg";
import filterIcon from "../public/filter.svg";
import styles from "../styles/Nav.module.css";
import Link from "next/link";


const animatedComponents = makeAnimated();

const categoryOptions = [
  { value: 'clothing', label: 'Clothing' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'jewelry', label: 'Jewelry' },
];

const countryOptions = [
  { value: 'usa', label: 'USA' },
  { value: 'canada', label: 'Canada' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'germany', label: 'Germany' },
  { value: 'france', label: 'France' },
  { value: 'spain', label: 'Spain' },
  { value: 'italy', label: 'Italy' },
  { value: 'uk', label: 'UK' },
  { value: 'finland', label: 'Finland' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'norway', label: 'Norway' },
];

export default function Navbar() {
  const [showFilter, setShowFilter] = useState(false);
  

  return (
    <div className="container mx-auto">
      <nav className={styles.navStyle}>
        <div className="flex w-3/4 max-sm:w-full">
          <Link className={styles.logo} href="/">
            <Image
              priority
              src={marketIcon}
              height={46}
              width={46}
              alt="market Icon"
              className={styles.img}
            />
            <h1 className="text-lg">Market Place</h1>
          </Link>
          <input 
            className={styles.search}
            placeholder="Search..."
          />
          <button className={styles.searchBtn}>🔍</button>
        </div>
        <div className={styles.btnWraps}>
          <button 
            className="border border-gray-800 rounded-md p-2 mr-3 hover:bg-gray-200"
            onClick={() => setShowFilter(!showFilter)}
          >
            <Image
              priority
              src={filterIcon}
              height={20}
              width={20}
              alt="market Icon"
            />
          </button>
          <button className="border border-gray-800 rounded-md p-2 hover:bg-gray-200">Login</button>
        </div>
      </nav>

      {/* Search Filters */}
      {showFilter && (
        <>
        <div className={styles.filterContainer}>
          <div>
            <h3>Price $</h3>
            <input 
              type="number" 
              placeholder="Min $" 
              className="p-1 border border-gray-800 rounded-md mb-1 mr-1"
            />
            <input 
              type="number" 
              placeholder="Max $" 
              className="p-1 border border-gray-800 rounded-md mb-1"
            />
          </div>
          <div className="mr-2 mb-2 w-full">
            <h3>Category</h3>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={categoryOptions}
            />
          </div>
          <div className="mr-2 mb-2 w-full">
            <h3>Deliver to</h3>
            <Select
              closeMenuOnSelect={true}
              isSearchable={true}
              components={animatedComponents}
              options={countryOptions}
            />
          </div>
          <div className="flex flex-col w-2/4 justify-center pb-2">
            <div>
              <input type="checkbox" className="p-1"/>
              <span className="ml-1">Free Delivery</span>
            </div>
            <div>
              <input type="checkbox" className="p-1"/>
              <span className="ml-1">On Sale</span>
            </div>
          </div>
        </div>
        <button 
          className="ml-2 mb-1 border border-gray-800 rounded-md p-2 hover:bg-gray-200"
          onClick={() => setShowFilter(!showFilter)}
        >
            Clear Filters
        </button>
        </>
      )}
    </div>
  )
}