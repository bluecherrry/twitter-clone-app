import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react'
export function UploadImage()  {
   // const [image, setImage] = useState(null)
        // const fileList = e => {
        //   if(e.target.picture[0]){
        //     setImage(e.target.picture[0])
        //   }
        // }
            const handleUpload = () => {
              ///  console.log("uploaad");
     }
        return (
                <>
                  <Upload
                    listType="picture"
                    
                  >
                    <Button
                    onClick={handleUpload}
                    icon={<UploadOutlined />}>Upload Image</Button>
                  </Upload>
                </>
                
              
        )
    
}

export default UploadImage
