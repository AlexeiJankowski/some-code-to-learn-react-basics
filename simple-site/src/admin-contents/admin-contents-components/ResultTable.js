import React, { useState, useEffect } from 'react';
import TableButtons from './TableButtons';

import './ResultTable.css';

const ResultTable = ({getItems, head, type}) => {
  const [items, setItems] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let isMounted = true;
    getItems().then(item => {
      if (isMounted) {
        setItems(item.data);
        setIsLoading(true);
      }      
    })
    return () => {
      isMounted = false;
    }
  }, [refreshTable])

  if (items && items.length > 0 && head) {
    return (
      <div className="container container__result-table">
        <table className="table table__result-table" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>  
              {head.map((title, index) => {
                return (
                  <th className="table-header table-header__result-table">{title}</th>
                )
              })}  
              <th className="table-header table-header__result-table"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr className="table-row table-row-posts">        
                  {type === "post" && <td className="table-description table-description__result-table">{item.title}</td>}    
                  {type === "user" && 
                    <>
                      <td className="table-description table-description__result-table">{item.name}</td>
                      <td className="table-description table-description__result-table">{item.email}</td>
                    </>
                  }  
                  <td className="table-description table-description__result-table--button-container">
                    <TableButtons 
                      itemId={item.id}
                      setRefreshTable={setRefreshTable}
                      type={type}
                    />
                  </td>
                </tr>
              )
            })}   
          </tbody>
        </table>
      </div>
    )
  } 
  else if(isLoading) {
    return (
      <div className="container">
        <div className="empty-table__wrapper">
          <h2 className="empty-table__heading">Loading...</h2>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container">
        <div className="empty-table__wrapper">
          <h2 className="empty-table__heading">There's no articles yet</h2>
        </div>
      </div>
    )
  } 
}

export default ResultTable;