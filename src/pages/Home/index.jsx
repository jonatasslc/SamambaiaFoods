import '../Home/style.css';
import img01 from './assets/img01.png'
export const Home = () => {
  return (
    <main className='container'>
      <figure className='figure-img-home'>
        <img src={img01} alt="" />

        <div className='container-title'>
          <h1>
            samambaia foods
          </h1>
        </div>
      </figure>
      
    </main>
  )
}