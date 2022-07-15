import React from 'react';
import map from './07.png';
function Menu4() {

    return (
        <div className='app-container' >
            <div className='app-container1'>
                <h3>かいごのひとみ</h3>
                <table>
                    <tr>
                        <th>住所</th>
                        <td>
                            <p>〒 532-0006</p>
                            <p>大阪市淀川区西三国三丁目18番6号</p>
                        </td>
                    </tr>
                    <tr>
                        <th>TEL</th>
                        <td>090-3946-2814</td>
                    </tr>
                </table>
                <strong>▼サービス提供地域</strong><br></br>
                大阪市、豊中市、吹田市<br></br>
                <strong>▼営業日及び営業時間</strong><br></br>
                平日（月～金）9：00～17：00
                <ul className='list-persion'>
                    <li>

                        <img src={map} alt={map} height={265} width={400} />

                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Menu4;