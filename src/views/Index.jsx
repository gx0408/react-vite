// Index/index.jsx
import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { get } from '@/utils'
import './index.less'
export default function Index() {
  const [b, setB] = useState(2)
  const [name, setName] = useState(null)
  // useEffect(() => {//生命周期副作用钩子
  //   get('/index-infos').then(() => {
  //   })
  // }, [])
  // console.log('import.meta.env', import.meta.env)//获取环境变量：
  /**
   * 
    BASE_URL: "/"
    DEV: true
    MODE: "development"
    PROD: false
    SSR: false
   */
  {/* <Input style={{ width: '233px', marginRight: '10px' }} placeholder="default size" onChange={(event) => setName(event.target.value)} allowClear={true} prefix={<UserOutlined />} />
    <Button type='primary' onClick={() => setA((a) => a += 1)} >{a}</Button>
    <Button type='primary' onClick={handleClick} >电话号码：{a}</Button>
    <Button type='primary' onClick={() => handleClickAdd(2)} >{b}</Button> */}
  {/* <div className="">
      {name}
      </div>
      <div className="btn" onClick={() => data[0](0)} >
      点击事件
      {data[0].productId}
    </div> */}
  // function handleClick() {
  //   setA((a) => a += 1)
  //   console.log(a);
  // }
  // function handleClickAdd(value) {
  //   setB((b) => b += value)
  //   console.log(b);
  // }
  const [number, setNumber] = useState('')//初始化的数据
  const [arrFn, setData] = useState(//方法集合
    [
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 1) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 2) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 3) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 4) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 5) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 6) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 7) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 8) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 9) },
      (value) => { value.length === 11 ? '' : setNumber((number) => number += 0) },
      (value) => setNumber((number) => number = '')
    ]
  )
  function zeroNumber(value) {
    (value) => setNumber((number) => number = '')
  }
  return <div className='flex-box'>
    <div className='number'>电话号码：{number}</div>
    {arrFn.map((itemFn, index) => {
      return <div className={index === 10 ? 'clear':index + 1 === 10 ? `zero` : `btn`} key={index} onClick={() => itemFn(number)}>
        <p>{index === 10 ? '清空' : index + 1 === 10 ? 0 : index + 1}</p>
      </div>
    })}

    <div className="del" onClick={() => setNumber((number) => number = number.substr(0, number.length - 1))}>
      删除
    </div>

  </div >
}


