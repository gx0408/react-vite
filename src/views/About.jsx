// About/index.jsx
import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { get } from '@/utils'
export default function About() {
  // useEffect === mounted（） componentDidMount 
  /**
   *  
   * useEffect(() => {//生命周期副作用钩子
     get('/index-infos').then(() => {
     })
    }, [])
   * 

    const handleClickButton2 = useCallback(() => {//只有在依赖项发生变化的时候才会更新（返回一个新的函数）。
    setCount2(count2 + 1);      //侦听器
    ....
    }, [count2]);


    const userInfo = useMemo(() => { //需要返回一个值，只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值。
    return {     //计算属性
      // ...
      name: "Jace",
      age: count
        };
      }, [count]);
   */
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {//生命周期副作用钩子
    console.log(1);


  }, [])
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
    setCount(count + 1)
    async function apiFn() {
      const res = await get('/index-infos')
      console.log(res);
    }
    apiFn()
  }, [count2]);
  const userInfo = useMemo(() => {
    return {
      // ...
      name: "Jace",
      age: count
    };
  }, [count]);
  // function handleClick() {
  //   setA((a) => a += 1)
  //   console.log(a);
  // }
  return <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <button onClick={handleClickButton2}>
      Click me2
    </button>
    <div className="">
      {userInfo.name}
    </div>
  </div>
}