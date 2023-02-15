import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { Divider, List, Typography } from 'antd';
import { QRCode } from 'antd';

const voiwd = (props) =>{
    const [videoSrc,setVideoSrc] = useState([])
      useEffect(()=>{
        Axios.get('/api/durl').then(value =>{
            let arry = []
            let movedata = value.data
            for(let key in movedata){
               const moveUrl=movedata[key]
               arry.push(moveUrl)
               setVideoSrc((prev) =>[...prev,moveUrl])
            }
          })
      },[])
      console.log(videoSrc);
    return (
        <React.Fragment>
            <div className="action">
            {
              videoSrc.map((value,key)=>{
                return(
                  <>
                  <li>
                    <span>{key}</span>
                  <video width="400" controls>
                  <source
                    src={value.url}
                   />
                   Your browser does not support HTML5 video.
                </video>
                <QRCode value={value.url} />
                </li>
              </>
                )
                
              })
            }
            </div>


        </React.Fragment>
    )
}

export default voiwd