import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
     <Title text1={'About'} text2={'Us'}/>
      </div>

     <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px] rounded' src={assets.about} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Welcome to Clothing we are passionate about bringing you the latest and highest-quality fashion pieces. Our goal is to provide a diverse collection that enhances your style while ensuring comfort and elegance.</p>
      <p>Our carefully curated collections are designed to keep up with the latest fashion trends while maintaining timeless elegance. Whether you’re looking for everyday essentials, statement pieces, or something in between, we have something for everyone.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission is to inspire confidence through fashion. We aim to provide trendy, high-quality, and affordable clothing that empowers individuals to express their personal style effortlessly. By focusing on sustainability, ethical sourcing, and exceptional customer service, we strive to create a shopping experience that is not only enjoyable but also responsible.</p>
      </div>
      </div> 
      <div className='text-xl py-4'>
      <Title text1={'Why'} text2={'Choose Us?'}/>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
   <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
  <b>Quality Assurance:</b>
  <p className='text-gray-800'>We offer premium fabrics and well-crafted designs to ensure you look and feel your best.</p>
   </div>


   <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
  <b>Trendy Collection:</b>
  <p className='text-gray-800'>Our collections are a perfect mix of the latest trends and classic pieces, so you’ll always have something stylish to wear. </p>
   </div>

   <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
  <b>Affordable Luxury:</b>
  <p className='text-gray-800'>We believe great fashion shouldn’t break the bank. That’s why we offer stylish, high-quality clothing at competitive prices.</p>
   </div>
  </div>
  
</div>
</div>
  )
}

export default About
