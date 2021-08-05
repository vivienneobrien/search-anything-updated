import { useState } from "react";
import styles from "../css/index.module.css";
import Search from "./Search";
import Filters from "./Filters";

import { Tabs, Tab } from './Tabs';
import { useFetch } from "../hooks/useFetch";

import TextTesults from "./TextTesults";
import VideosResults from "./VideosResults";
import ImagesResults from "./ImagesResults";
import { buildQuery } from "../utils/buildQuery";

const Main = () => {
  const { isLoading, error, data, fetchData } = useFetch();

  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    age: '',
    gender: '',
    prof: '',
    country: ''
  });

  const handleSearch = () => {
    const queryWithFilters = buildQuery(query, filters);
    fetchData(queryWithFilters);
  }

  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters
    })
  }

  return (
    <div className={styles.search}>
      <h1 className="text-center p-3">Inspire Infocus</h1>
      {/* Search bar */}
      <div className="row">
        <div className="col-lg-10 col-sm-9">
          <Search
            query={query}
            onQueryChange={setQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
        </div>

        <div className={`col-sm-3 col-lg-2 ${styles.filter}`}>
          <div className={`dropdown ${styles.dropdown}`}>
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>

      <div id="searchResult" className={styles.searchResult}>
        Current Query: {buildQuery(query, filters)}
      </div>
      <div className={styles.content}>
        <Tabs>
          <Tab title={'Text'}>
            <TextTesults 
              textSearch={data.textSearch}
              isLoading={isLoading}
              error={error}
            />
          </Tab>
          <Tab title={'Video'}>
            <VideosResults
              videoSearch={data.videoSearch}
              isLoading={isLoading}
              error={error}
            />
          </Tab>
          <Tab title={'Image'}>
            <ImagesResults
              imageSearch={data.imageSearch}
              isLoading={isLoading}
              error={error}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Main;
