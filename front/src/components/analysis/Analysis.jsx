import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style1 from '../../srcAssets/style/Analysis.module.css'
import * as Api from '../../api'
import RadialChart from "../chart/RadialChart"

// 로그인한 user만 분석 페이지 볼 수 있음!
function Analysis(){
    const {nation} = useParams()
    const [similarCountries, setSimilarCountries] = useState([])

    async function getSimilarData() {
        try {
          const res = await Api.get(`result/${nation}/similar`);
          console.log(res.data)
          console.log(res.data.similarCounrtries)
          setSimilarCountries(res.data.similarCounrtries)
        } catch (err) {
          console.log(err);
        }
      }
    

    useEffect(() => {
        getSimilarData()
    }, [])

    console.log(nation)

    return (
        <Container sx={analysisPage}>
            <div className={style1.title}>
                <h1><span className={style1.coloring}>{nation}</span>형 분석 결과</h1>
            </div>

            <div className={style1.resultBox}>
                <RadialChart nation={nation}></RadialChart>

                <div className={style1.resultInfoBox}>
                    <p className={style1.resultInfo}>
                        상위 <span className={style1.coloring}>20%</span>의 자유 점수를 갖고 있습니다.
                    </p>
                    <p className={style1.resultInfo}>
                        상위 <span className={style1.coloring}>20%</span>의 경제 점수를 갖고 있습니다.
                    </p>
                </div>
            </div>

            <div className={style1.title}>
                <h1><span className={style1.coloring}>{nation}</span> 과(와) 행복도가 비슷한 나라는?</h1>
            </div>

            <div className={style1.similarBox}>
                <div className={style1.nationBox}>
                    {similarCountries.map((item) => (
                        <div className={style1.nations}>
                            <img className={style1.flag} src={`https://countryflagsapi.com/png/${item}`} alt="나라별 국기"/>
                            <h1 className={style1.nation}>{item}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}
export default Analysis

const analysisPage = {
    py: 7, mt: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

