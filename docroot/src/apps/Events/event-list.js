import React from 'react';
import Event from './event';
import {useSelector} from 'react-redux';
import ConditionalView from '../../component/ConditionalView';


export default function(props) {
  const {list} = props;
  const searchText = useSelector((state) => state.searchText);
  return (
      <div className="row">
        {list
          .filter((item) => searchText.length > 0 ? item.title.indexOf(searchText) > -1 : true)
          .map((item) => {
          return (
            <Event data={item} key={item.id}/>
          );
        })}
        <ConditionalView condition={list.filter((item) => searchText.length > 0 ? item.title.indexOf(searchText) > -1 : true).length === 0}>
          <p className="lead  pt-5 ml-auto mr-auto"> No results!</p>
        </ConditionalView>
      </div>
    )
}
