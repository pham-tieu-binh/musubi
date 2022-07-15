import React from 'react';

function Menu3() {

    return (
        <div className='app-container' >
            <div className='app-container1'>

                <h3>基本料金</h3>
                ・介護保険からの給付サービスを利用する場合は,原則として基本料金（下記料金表）の１割です。ただし、介護保険の給付の範囲を越えたサービス利用は全額自己負担となります。<br></br>


                <h4>▼要介護の方の利用負担額（目安）</h4>
                <table className='empty-hide '>
                    <tr>
                        <th rowspan="4">身体介護</th>
                        <td>～20分</td><td>165円</td>
                    </tr>
                    <tr>
                        <td>20分～30分</td><td>255円</td>
                    </tr>
                    <tr>
                        <td>30分～60分</td><td>404円</td>
                    </tr>
                    <tr>
                        <td>60分～</td><td>564円</td>
                    </tr>
                    <tr>
                        <th rowspan="2">生活援助</th>
                        <td>20～45分</td><td>183円</td>
                    </tr>
                    <tr>
                        <td>45分～</td><td>225円</td>
                    </tr>
                    <tr>
                        <th rowspan="3">20分以上の<br></br>
                            身体介護に引き続き<br></br>
                            生活援助を行う場合</th>
                        <td>20～45分</td><td>67円</td>
                    </tr>
                    <tr>
                        <td>45分～70分</td><td>134円</td>
                    </tr>
                    <tr>
                        <td>70分～</td><td>201円</td>
                    </tr>
                </table>
                <h4>▼要支援（予防）の方の利用負担額（目安）</h4>
                <table className='empty-hide'>
                    <tr>
                        <th>週１回程度</th>
                        <td>1,168円/月</td>
                    </tr>
                    <tr>
                        <th>週２回程度</th>
                        <td>2,335円/月</td>
                    </tr>
                    <tr>
                        <th>週３回以上</th>
                        <td>3,704円/月</td>
                    </tr>


                </table>
                <p className='font12'>
                    ※週３回以上のご利用は要支援２の場合のみです。<br></br>
                    ※身体介護・生活援助共に料金は同じです。<br></br>

                    ※&nbsp;表示料金は利用者が負担する料金（介護保険の一割）です。1単位＝10円で算出した概算料金です（※）。<br></br>
                    正確な料金ははえみケアサービスステーションにお問い合わせください。
                </p>
            </div>
        </div>


    );
}

export default Menu3;