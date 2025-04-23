
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {


  return (
    <>
      <Header />
      <Entry 
        img={{
          src: "../src/assets/mountFuji.jpg",
          alt: "Mount Fuji"
        }}
        place="Japan"
        google="https://maps.app.goo.gl/fgyJDFi2wSpSzp4i7"
        name="Mount Fuji"
        date="10 Jan, 2025 - 26 Jan, 2025"
        about="Mount Fuji, highest mountain in Japan. It rises to 12,388 feet (3,776 metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken (prefectures) of central Honshu, about 60 miles (100 km) west of the Tokyo-Yokohama metropolitan area."
      />
    </>
  )
}

export default App
