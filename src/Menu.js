import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function Menu() {
    return (
        <div>

            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Menu4" element={<Menu4 />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div className="menu3">

            <ul >
                <li >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">トップページ</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">法人概要</Link>
                </li>
                <li >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/about">提供サービス</Link>
                </li>
                <li >
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/Menu4">処遇改善加算について</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

function Home() {
    return (
        <article className="main-content">
            <div className="main-container">


                <div className="footer1">ごあいさつ</div>
                <nav className="vanban">
                    <p>理念</p>
                    <p>私たちは、ご家族や地域の人びとと協力し、ご利用の皆様が快適で自立した在宅生活を営むことができるよう支援するとともに、地域に愛され信頼されるサービスを提供します｡</p>

                    <p>基本方針</p>
                    <p>私たちは、かいごのひとみの職員であることを誇りとして、その理念に沿って行動します。</p>
                    <p>私たちは、ご利用の皆様一人ひとりの人権を尊重し、愛情と誠意をもって接し、満足していただけるサービスを</p>
                    <p>提供します。</p>
                    <p>私たちは、常に自己研鑽に励み、専門的知識と技術を身につけ、安全・正確にサービスの提供をします。</p>
                    <p>私たちは、ご家族や地域とのコミュニケーションを大切にし、在宅ケア支援の拠点となることを目指して努力します。</p>

                    <p>ごあいさつ</p>
                    <p>平素より格別のお引き立てを、ありがとうございます。</p>
                    <p>われわれは、安心・安全・高品質なサービスを追求し、ご利用者様はもちろんのこと、</p>
                    <p>ご家族の方々にもご満足いただけるサービスを目指してまいります。</p>

                </nav>
                <div className='footer2'>
                    <p>代表取締役　　上甲　啓治</p>
                </div>
                <div className='page-footer' >
                </div>

            </div >
        </article >
    );
}

function About() {
    return (
        <div className='app-container' >
            <div className='app-container1'>
                <div className="app-container1-img"></div>
                <strong>障害者総合支援</strong><br></br>
                【居宅介護】<br></br>
                【重度訪問介護】<br></br>
                【同行援護】<br></br>
                <strong>地域生活支援事業</strong><br></br>
                【移動支援】<br></br>
                <strong>自費サービス</strong><br></br>
                【くらし応援】<br></br>
            </div>
        </div>
    );
}

function Dashboard() {
    return (
        <article className="main-content">
            <div className="main-container">
                <table className="b1" >
                    <tr>
                        <th >法人種別</th>
                        <td>
                            <span className="c1">
                                <p>営利法人</p>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th >法人名称</th>
                        <td>
                            <span className="c1">
                                <p>株式会社　Musubi<br></br>
                                    資本金：1.000.000円<br></br>
                                    設立：2015年7月10日<br></br>
                                </p>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th >代表者</th>
                        <td>
                            <span className="c1">
                                <p> 代表取締役　  上甲　啓治</p>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th >事業所</th>
                        <td>
                            <span className="c1">
                                <p>
                                    <strong>障害福祉サービス事業</strong><br></br>
                                    <strong>かいごのひとみ "大阪市指定2719102028"</strong><br></br>
                                    〒 532-0006<br></br>
                                    大阪市淀川区西三国三丁目18番6号<br></br>
                                    TEL:090-3946-2814<br></br>
                                    サービス提供地域<br></br>
                                    大阪市、豊中市、吹田市<br></br>
                                    営業日及び営業時間<br></br>
                                    平日（月～金）9：00～17：00
                                </p>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <th >スタッフ数</th>
                        <td>
                            <span className="c1">

                                <p>訪問介護</p>
                                <p>【サービス提供責任者】：　　　１名</p>
                                <p>【訪問介護職員】：　　　　　１５名</p>

                                <p> 【事務員】：　　　　　　　　　１名</p>

                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </article >
    );
}
function Menu4() {
    return (
        <article className='main-content'>
            <div className='main-container'>
                <div className="footer1">処遇改善加算について</div>
                <p className='vanban'>職場環境要件の掲示について<br></br>
                    見える化要件に基き特定加算の取得状況を報告し、賃金以外の処遇改善に関する具体的な取り組み内容を下記に掲示いたします。<br></br>
                    資質の向上<br></br>
                    職場環境要件項目<br></br>
                    &nbsp;&nbsp;&nbsp;働きながら介護福祉士取得を目指す者に対する実務者研修受講支援や、より専門性の高い介護技術を取得しようとする者に対する喀痰吸引、認同行援護講習、有償運送講習、サービス提供責任者研修、中堅職員に対するマネジメント研修の受講支援 受験料や研修費等の補助を行うことにより、職員が研修や講習を受けやすい環境を整えている。<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;受験料や研究受講料等の補助、受験や研究受講の為の休暇取得時の手当、研修.講習及び受験料に配慮した勤務シフトを組むことによって職員が等しく研修や講習を受けやすい環境を整えております。<br></br>

                    労働環境・処遇の改善<br></br>
                    職場環境要件項目<br></br>
                    &nbsp;&nbsp;&nbsp;ＩＣＴ活用（事業所内に加えタブレット端末を活用し訪問先でアクセスを可能にすること等を含む）による業務省力化<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;介護ソフトの活用による情報共有、記録の電子化による業務負担軽減を「令和4年度内に導入予定」。<br></br>

                    職場環境要件項目<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;ミーティング等による職場内コミュニケーションの円滑化による個々の介護職員の気づきを踏まえた勤務環境やケア内容の改善 ミーティングを開き、情報共有を徹底している。<br></br>

                    職場環境要件項目<br></br>
                    &nbsp;&nbsp;&nbsp;事故・トラブルへの対応マニュアル等の作成による責任の所在の明確化<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;事故防止マニュアルの作成を実施<br></br>

                    職場環境要件項目<br></br>
                    &nbsp;&nbsp;&nbsp;健康診断・こころの健康等の健康管理面の強化、職員休憩室・分煙スペース等の整備<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;年次健康診断の実施、職員休憩室や分煙スペースも確保している。<br></br>

                    その他<br></br>
                    職場環境要件項目<br></br>
                    &nbsp;&nbsp;&nbsp;地域の児童・生徒や住民との交流による地域包括ケアの一員としてのモチベーション向上<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;地域の行事へ参加し、児童や生徒、住民との交流を図っている。<br></br>

                    職場環境要件項目<br></br>
                    &nbsp;&nbsp;&nbsp;非正規職員から正規職員への転換 非正規職員から正規職員への転換を奨励している。<br></br>

                    当法人としての取組み<br></br>
                    &nbsp;&nbsp;&nbsp;職員の増員による業務負担の軽減 積極的に職員を採用し、一人一人の業務を分散させ負担を軽減している。
                </p>
            </div>
        </article >
    );
}

function NoMatch() {
    return (
        <div>
        </div>
    );
}
