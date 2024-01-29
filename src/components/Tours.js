import Tour from './Tour';
import { tours } from '../data'
import Title from './Title'

const Tours=() => {
  return (
    <section className='section tour' id='tour'>
    <Title title='our' subTitle='tours' />

    <div className='section-center tour-center'>
      {tours.map((tour) => {
        return <Tour {...tour} key={tour.id} />
      })}
    </div>
  </section>
  );
};

      
export default Tours;
