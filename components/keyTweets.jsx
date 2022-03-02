import TweetCard from "./tweetCard"

const KeyTweets=()=>{

    const tweets=[
        {id:"sdgavd89dsh", text:"The AHAIC2021 report provides a detailed steps taken by African governments to achieve #UHC in their countries, reflecting on successes, barriers and lessons learned on the journey towards providing equitable access, quality health care and financial protection as envisioned within an African context. #AfricaHealthAgenda"},
        {id:"sda8923", text:"The #AHAIC2021 Commission report will provide a detailed account of steps taken by African governments to achieve #UHC in their countries, reflecting on successes, barriers and lessons learned on the journey towards providing equitable access, quality health care and financial protection as envisioned within an African context. #AfricaHealthAgenda"},
        {id:"sdg431sh", text:"The #AHAIC2021 Commission report will provide a detailed account of steps taken by African governments to achieve #UHC in their countries, reflecting on successes, barriers and lessons learned on the journey towards providing equitable access, quality health care and financial protection as envisioned within an African context. #AfricaHealthAgenda"},
        {id:"sd233dsh", text:"The #AHAIC2021 Commission report will provide a detailed account of steps taken by African governments to achieve #UHC in their countries, reflecting on successes, barriers and lessons learned on the journey towards providing equitable access, quality health care and financial protection as envisioned within an African context. #AfricaHealthAgenda"},
        {id:"sdga232h", text:"The #AHAIC2021 Commission report will provide a detailed account of steps taken by African governments to achieve #UHC in their countries, reflecting on successes, barriers and lessons learned on the journey towards providing equitable access, quality health care and financial protection as envisioned within an African context. #AfricaHealthAgenda"}
    ]
    return(
        <div className="section">
        <div className="columns is-multiline">
            {
                tweets.map(
                    (item)=>{
                        return(
                            <div className="column is-3 " key={item.id}>
                                <TweetCard data={item.text}/>
                            </div>
                        )
                    }
                )
            }
        </div>
        </div>
    )
}

export default KeyTweets