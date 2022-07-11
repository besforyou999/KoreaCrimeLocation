import React, {useState} from 'react';
import SortBy from './SortBy.js';
import ListTitle from './ListTitle';
import '../css/styles.css';

function CrimeList() {

  const [sortType , setSortType] = useState(2); // 1 -> kor, 2 -> crime sum

  return ( 
    <div>
      <ListTitle/>
      <div>
        <button onClick={() => {
          setSortType(1);
        }}>가나다순</button>
        <button onClick={() => {
          setSortType(2);
        }}>범죄건순</button>
      </div>
      <SortBy type={sortType}/>
    </div>
  );
  
}


export default CrimeList;
