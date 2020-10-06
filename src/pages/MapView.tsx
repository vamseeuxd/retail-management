import React from 'react';
import RmTileList from '../rm-components/rm-tile-list';
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
}

interface MapViewProps extends OwnProps, StateProps, DispatchProps {
};

const MapView: React.FC<MapViewProps> = ({}) => {

  const data = [
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200/600',
    'https://picsum.photos/200/400',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200/600',
    'https://picsum.photos/200/400',
  ];

  return (
    <IonPage id="map-view">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Testing Screen 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <RmTileList data={data}/>
      </IonContent>
    </IonPage>
  );
};

export default MapView
