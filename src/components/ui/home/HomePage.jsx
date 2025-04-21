import Header from './header'
import CardContainer from './cardContainer'

import { useGetProductsQuery } from '../../../services/marketShellApi'
import ErrorPage from '../Error'
import { randomValue } from '../../../GenerateCartCode';
import { useEffect } from 'react'


function HomePage() {

  const { data, error, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if(localStorage.getItem('cart_code') === null) {
      localStorage.setItem('cart_code', randomValue);
    }}
  , [])

  if (error) {
    return(
      <ErrorPage/>
    )
  }



  return (
    <>
    <Header/>
    <CardContainer data={data} isLoading={isLoading}/>
    </>
  )
}

export default HomePage
