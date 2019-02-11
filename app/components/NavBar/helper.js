/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import BreadcrumbConfig from 'auto-breadcrumb';

import './style.css';

const RadiatingLink = Radium(Link);

export const bcRender = (name, path) => {
  if (name !== ' ') {
    return path ? (
      <RadiatingLink
        className="link"
        to={path}
        style={{ color: '#91aed7', ':hover': { color: 'white' } }}
      >
        {'   '}
        {name}
        {'   '}
      </RadiatingLink>
    ) : `   ${name}   `;
  }
  return '';
};

// export const idStringpify = ({ id }) => `${id}`;
export const idStringpify = () => ' ';

export const Breadcrumbs = BreadcrumbConfig({
  staticRoutesMap: {
    '/': 'Home Page',
    // '/homepage': <img src={Background} className="icon" alt="Watch Tower Icon" />,
    '/link1': 'Link 1',
    '/link2': 'Link 2',
  },
  dynamicRoutesMap: {},
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  containerProps: {
    className: 'breadcrumbStyle',
  },
  itemRender: bcRender,
});
