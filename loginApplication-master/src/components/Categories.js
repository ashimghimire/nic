import React, {useEffect} from 'react'
import {FacebookProvider, Initialize} from 'react-facebook';
import axios from 'axios';

const Categories=(props)=>{
    return ( <div>        
        <FacebookProvider appId="1927845054138333">        
                <Initialize>
                    {(props) => {
                        if(props.isReady){
                        props.api.login({scope:'pages_read_engagement'}).then((response)=>{
                            console.log(response.authResponse.accessToken);
                            // axios.get("https://graph.facebook.com/RojiHira/posts?&access_token="+ response.authResponse.accessToken).then((response)=>{
                            //     console.log(response);
                            // }).catch((e)=>{
                            //     console.log(e);
                            // })
                        });
                        }
                      return <div> Hello</div>
                    }}
                </Initialize>
        </FacebookProvider>
        </div>
    )
}

export default Categories;