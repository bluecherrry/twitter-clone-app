import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import React, {useState} from 'react'
import {storage} from '../../../firebase/firebase'
export function UploadImage()  {
    const [image, setImage] = useState(null)
    
        const fileList = e => {
          if(e.target.picture[0]){
            setImage(e.target.picture[0])
          }
        }
            const handleUpload = () => {
              const uploadTask = storage.ref(`images/${image.name}`).put(image);
              uploadTask.on(
              "state_changed",
              snapshot => {},
              error => {
                console.log(error);
              },
              () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                  console.log(url);
                });
              }
              );
    }
        return (
           
              
              
                <>
                  <Upload
                    
                    listType="picture"
                    defaultFileList={[...fileList]}
                  >
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                 
                
                </>
                
              
        )
    
}

export default UploadImage
