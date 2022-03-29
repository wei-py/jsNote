### mock 模拟 get 请求
mock 是拦截网络请求 不是真的发网络请求
```js
//index.js  总路由
import admin from './admin';
const Mock = require('mockjs');
Mock.setup({timeout:'10-200'});
const routeList = [
  ...admin
]

routeList.forEach(route => {
  Mock.mock(route.url, route.method === undefined ? 'get' : route.method)
})

export default Mock

// admin.js 分路由和数据格式
const Mock = require('mockjs');
const Random = Mock.Random;
const admin = [
  {
    url: new RegExp('/admin/list'),
    method: 'get',
    tpl: {
      code: 0,
      msg: 'success',
      data: {
        'adminList|1-10': [  // 模拟 1 - 10 条数据
          {
            'id|+1': 1, // 每次 + 1
            'name': '@cname', // 中文名
            'email': '@email(163.com)', // @ -> random
            // 'county': Random.county(true) // true 显示省市县 false 是县
            'county': '@county(true)'
          }
        ]
      }
    }
  },
  {
    url: '/admin',
    method: 'post',
    tpl: () => {
      if (new Date().getSeconds() % 2 === 0) {
        return {
          code: 0,
          msg: 'success',
        }
      }
      return {
        code: 1,
        msg: 'error',
      }
    }
  }
]
export default admin

//  admin.ts  接口
import request from '../utils/request';
export const getAdminList = (page: number = 1) => {
  return request({
    url: '/admin/list',
    method: 'get',
    params: {page: page}
  })
}

export const addAdmin = (admin: any) => {
  return request({
    url: '/admin',
    method: 'post',
    data: admin
  })
}

// admin.tsx
import React, {Component} from 'react';
import {getAdminList} from './api/admin';

class Admin extends Component {
  componentDidMount() {
    getAdminList().then(resp => {
      console.log(resp) // 只能 console
    })
  }

  addAdmin = () => { // post 请求
    addAdmin({name: 'admin'}).then(resp => {
      console.log(resp)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addAdmin}>add admin</button>
      </div>
    );
  }
}
```