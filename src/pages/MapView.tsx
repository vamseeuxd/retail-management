import React from 'react';
import RmTileList from '../rm-components/rm-tile-list';

interface OwnProps { }

interface StateProps {
}

interface DispatchProps { }

interface MapViewProps extends OwnProps, StateProps, DispatchProps { };

const MapView: React.FC<MapViewProps> = ({ }) => {
  return (<RmTileList/>);
};

export default MapView
