import React from 'react';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol,
  IonGrid, IonLabel,
  IonRow
} from '@ionic/react';
import "./style.scss";

interface RmTileListProps {
  data?: any[],
  limitTo?: number,
};

const RmTileList: React.FC<RmTileListProps> = ({data, limitTo}) => {
  return (<>
    <IonCard className="rm-tile-list">
      <IonCardContent className="">
        <h5 className="font-weight-bold mb-2">Card Title</h5>
        <div className="images-container">
          {
            data && data.slice(0, limitTo ? limitTo : data.length)
              .map(
                (data, ind) =>
                  <div className="cropped-image" key={'cropped-image'+ind}>
                    <img src={data}/>
                    <IonLabel>Product Name</IonLabel>
                  </div>
              )
          }
        </div>
        <button className="btn btn-link">View All</button>
      </IonCardContent>
    </IonCard>
  </>)
}

export default RmTileList;
