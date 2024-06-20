// import React from 'react';
// import Kivo from '../img/Kivo.png'
// import projectImage2 from '../img/portfolio-2.jpg';
// import projectImage3 from '../img/portfolio-3.jpg';
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';

// export default function App() {
//     return (
//         <div>
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100" src={Kivo}
//                         alt="Image One"
//                         style={{ height: '700px', width: '100%' }}
//                     />
//                     <Carousel.Caption>


//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={projectImage2}
//                         alt="Image Two"
//                         style={{ height: '700px', width: '100%' }}
//                     />
//                 </Carousel.Item>

//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={projectImage3}
//                         alt="Image Two"
//                         style={{ height: '700px', width: '100%' }}
//                     />
//                 </Carousel.Item>
//             </Carousel>
//         </div>
//     );
// }



import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Kivo from '../img/Kivo.png';
import Kivo1 from '../img/kivo1.png';
import Kivo2 from '../img/kivo2.png';
// import Kivo3 from '../img/kivo3.png';
import Chatwoot1 from '../img/Chatwoot1.png';
import Chatwoot2 from '../img/Chatwoot2.png';
import Chatwoot3 from '../img/Chatwoot3.png';
import PPRTRL1 from '../img/pprtrl1.png';
import PPRTRL2 from '../img/pprtrl2.png';
import PPRTRL3 from '../img/pprtrl3.png';
import Ribago1 from '../img/Ribago1.png';
import Ribago2 from '../img/Ribago1.png';
import Ribago3 from '../img/Ribago3.png';
import DocSign1 from '../img/DocSign1.png';
import DocSign2 from '../img/DocSign2.png';
import DocSign3 from '../img/DocSign3.png';

const images = [
    {
        id: 1,
        project_id: 1,
        src: Kivo,
        title: 'Image One',
        desc: 'Description for Image One'
    },
    {
        id: 2,
        project_id: 1,
        src: Kivo1,
        title: 'Image Two',
        desc: 'Description for Image Two'
    },

    {
        id: 3,
        project_id: 1,
        src: Kivo2,
        title: 'Image Three',
        desc: 'Description for Image Three'
    },
    {
        id: 4,
        src: Chatwoot1,
        project_id: 2,
        title: 'Image Three',
        desc: 'Description for Image Three'
    },
    {
        id: 5,
        src: Chatwoot2,
        project_id: 2,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 6,
        src: Chatwoot3,
        project_id: 2,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 7,
        src: PPRTRL1,
        project_id: 3,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 8,
        src: PPRTRL2,
        project_id: 3,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 9,
        src: PPRTRL3,
        project_id: 3,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 10,
        src: Ribago1,
        project_id: 4,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 11,
        src: Ribago2,
        project_id: 4,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 12,
        src: Ribago3,
        project_id: 4,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 13,
        src: DocSign1,
        project_id: 5,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 14,
        src: DocSign2,
        project_id: 5,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
    {
        id: 15,
        src: DocSign3,
        project_id: 5,
        title: 'Image Four',
        desc: 'Description for Image Four'
    },
];

export default function App() {
    const objectId = 2; // Example ID to filter by
    const filteredImages = images.filter(image => image.project_id === objectId);

    return (
        <div>
            <Carousel>
                {filteredImages.map(image => (
                    <Carousel.Item key={image.id}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.title}
                            style={{ height: '700px', width: '100%' }}
                        />
                        <Carousel.Caption>
                            <h3>{image.title}</h3>
                            <p>{image.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
