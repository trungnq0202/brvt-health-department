/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { leveningStr } from './helper';

export default ({bookmarks}) => {
  const { length } = bookmarks;
  const showPost = length > 0 ? bookmarks.map(({id, title, content}, index) => <div key={id} className="bookmark"><span className="number">{(index + 1)}</span><h5><Link to={`/post/${id}`}>{title}</Link></h5><p>{leveningStr(content, 35)}</p></div>) : <p>No Bookmark Found</p>;
  return <div>{showPost}</div>
}
