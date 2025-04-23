import React from 'react'
//import MountFuji from "src/assets/mountFuji.jpg"

const Entry = ({img, place, google, name, date, about}) => {
  return (
    <article className='journal-entry'>
      <div>
        <img className='main-image' src={img.src} alt={img.alt} />
      </div>

        <div className='main-container'>
            {/* <img  alt="" /> */}
            <span className='span-country'>{place}</span>
            <a href={google}>View on Google Maps</a>
            <h2 className='h2-title'>{name}</h2>
            <p>{date}</p>
            <p className='p-about'>{about}</p>
        </div>
    </article>
  )
}

export default Entry

{/* <article className='journal-entry'>
<div>
  <img className='main-image' src={MountFuji} alt="Mount Fuji" />
</div>

  <div className='main-container'>
      {/* <img  alt="" /> */}
  //     <span className='span-country'>Japan</span>
  //     <a href="">View on Google Maps</a>
  //     <h2 className='h2-title'>Mount Fuji</h2>
  //     <p>10 Jan, 2025 - 26 Jan, 2025</p>
  //     <p className='p-about'>Mount Fuji, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area.</p>
  // </div>
//  </article> 