import React from 'react'
import './Widgets.css'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
function Widgets() {
    const { Search } = Input;
    const onSearch = value => console.log(value);

    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search placeholder="search Twitter" allowClear onSearch={onSearch}  />
            </div>
        </div>
    )
}

export default Widgets
