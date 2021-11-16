import { useState } from 'react';
import request from '../../services/ajax';
import Card from '../../components/parts/Card';

import styles from './Gallery.module.scss';

export default function Gallery() {
    const [gallery, setGallery] = useState([]);
    
    request('/classes/Gallery', 'GET')
        .then(response => {
            setGallery({gallery: response.results});
        });
    
    return (
        <main className="AppMain">
            <section className="AppMain-Gallery"> 
                {/* <GalleryContext.Provider value={contextValue}> */}
                    {gallery.map((card) => 
                        <Card 
                            gallery={gallery}
                            key={card.objectId}
                            {...card} 
                        /> 
                    )}
                {/* </GalleryContext.Provider> */}
            </section>                    
        </main>
    );
}