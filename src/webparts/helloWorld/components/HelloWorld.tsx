import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';
import { escape } from '@microsoft/sp-lodash-subset';
import api from '../api/api';
export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {

  private Api:any = new api();
  constructor(props){
    super(props);


    this.state = {
      loading: true,
      images: []
    }
  }

  async componentDidMount(){
    const images = await this.Api.getImages();

    this.setState({
      loading:false,
      images
    })
  }


   render() {
    return (
     <section name="main">
       {this.state.loading && (
              <h2>Loading posts...</h2>
            )}

            {this.state.images
              .map(image => 
                <img src={image.thumbnailUrl}/>
              )}

      </section> 

    )}
}
