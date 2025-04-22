import React from 'react'

const Entry = () => {
  return (
    <article className='journal-entry'>
      <div>
        <img className='main-image' src="src/assets/mountFuji.jpg" alt="Mount Fuji" />
      </div>

        <div className='main-container'>
            {/* <img  alt="" /> */}
            <span className='span-country'>Japan</span>
            <a href="">View on Google Maps</a>
            <h2 className='h2-title'>Mount Fuji</h2>
            <p>10 Jan, 2025 - 26 Jan, 2025</p>
            <p className='p-about'>Mount Fuji, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area.</p>
        </div>
    </article>
  )
}

export default Entry