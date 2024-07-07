import React from 'react'
import Button from '../components/button/Button'
import RegularCard from '../components/RegularCard'

const Home = () => {
    return (
        <div>
            <div className='text-center mb-[50px]'>
                <h1 className='text-5xl mb-[20px]'>New Arrivals</h1>
                <p className='px[38px] w-1/2 mx-[auto]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            </div>
            <ul className='flex justify-around'>
                <li>
                    <Button isActive={false} text={"Men\’s Fashion"} />
                </li>

                <li>
                    <Button isActive={true} text={"Women’s Fashion"} />
                </li>

                <li>
                    <Button isActive={false} text={"Women Accessories"} />
                </li>

                <li>
                    <Button isActive={false} text={"Men Accessories"} />
                </li>

                <li>
                    <Button isActive={false} text={"Discount Deals"} />
                </li>
            </ul>

            <div className='grid grid-cols-3 gap-4 justify-items-center'>
                <RegularCard />
                <RegularCard />
                <RegularCard />
                <RegularCard />
                <RegularCard />
                <RegularCard />
            </div>
        </div>
    )
}


export default Home
