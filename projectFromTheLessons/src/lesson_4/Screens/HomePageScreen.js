import PicturesBegin from '../components/homePageComponents/PicturesBegin';
import Card from '../components/homePageComponents/Card';
export default function HomePageScreen() {
return(
<>
<PicturesBegin></PicturesBegin>
<Card 
                image="https://via.placeholder.com/150" 
                description="This is a sample card description." 
            />
     <Card 
                image="https://via.placeholder.com/150" 
                description="This is a sample card description." 
            />
</>
);
}