import { Carousel } from '@mantine/carousel';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';


type SpriteViwerProps = {
    sprites: {
        front_default: string | null;
        back_default: string | null;
        back_shiny: string | null;
        front_shiny: string | null;
    } | null
}


export default function SpriteViwer({sprites} : SpriteViwerProps) {
  return (
    <Carousel       
      withIndicators
      height={250}
      emblaOptions={{ dragFree: true, align: 'start' }}
      slideGap="md"
    >
        <Carousel.Slide>
            <img className='w-full h-auto' src={sprites?.front_default ?? ''}  alt="Front Default"  />
        </Carousel.Slide>
        <Carousel.Slide>
            <img className='w-full h-auto' src={sprites?.back_default ?? ''} alt="Back Default"  />
        </Carousel.Slide>
        <Carousel.Slide>
            <img className='w-full h-auto' src={sprites?.front_shiny ?? ''} alt="Front Shiny"  />
        </Carousel.Slide>
        <Carousel.Slide>
            <img className='w-full h-auto' src={sprites?.back_shiny ?? ''} alt="Front Shiny"  />
        </Carousel.Slide>
    </Carousel>
  )
}
