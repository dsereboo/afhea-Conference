import Link from "next/link";

const EngageSocials = () => {

    const actions=[
        {id:"dhsdi893", title:"Register Conference ",},
        {id:"d329893", title:"Conference Speakers",},
        {id:"dcu2c93", title:"Partners",},
        {id:"d678sd3", title:"Social Media Graphics",},
        {id:"dh32i893", title:"Key Messages & Tweets",},
    ]

    const twitterAccounts=[
        {id:"shd3iewje", title:"@dummy", link:"/"},
        {id:"shdd89se", title:"@dummy",link:"/"},
        {id:"shd349ewje", title:"@dummy",link:"/"},
        {id:"shd3ie439je", title:"@dummy",link:"/"},
        {id:"shd3232wje", title:"@dummy",link:"/"},
    ]

  return (
    <section className="section">
      <article>
        <p className="is-size-4 has-text-black has-font-weight-bold mb-4">
          Engage on Social Media
        </p>
        <p>
          AHAIC 2021 is an African-led biennial global health convening hosted
          by Amref Health Africa, a leading health development organisation in
          Africa founded in 1957. This year, the virtual conference is
          co-convened by Africa CDC, Roche, Takeda Pharmaceuticals and the
          International Federation of Pharmaceutical Manufacturers and
          Associations (IFPMA).
        </p>
      </article>
      <div className="columns mt-4">
        <div className="column">
            <p className="has-text-black is-size-5  has-font-weight-bold mb-3">Actions</p>
               {
                   actions.map(
                       (item)=>{
                           return(
                               <div key={item.id} className="is-flex is-flex-direction-row">
                                 <p className="has-text-danger is-size-5">{item.title}</p>
                               </div>
                           )
                       }
                   )
               }
        </div>
        <div className="column">
        <p className="has-text-black is-size-5 has-font-weight-bold mb-3">#HashTags</p> 
        <p className="has-text-black is-size-5  has-font-weight-medium">#AfHEA 2021</p> 
        <p className="has-text-black is-size-5  has-font-weight-medium">#AfricanHealthPolicy</p>
        <p className="has-text-black is-size-5  has-font-weight-medium">#UHC</p>
        </div>
        <div className="column">
          <p className="has-text-black is-size-5  has-font-weight-bold mb-3">Twitter Accounts</p>
            {
                twitterAccounts.map(
                    (item)=>{
                        return(<div key={item.index}>
                            <Link href={item.link}><a className="has-text-danger is-size-5">Follow {item.title}</a></Link>
                        </div>)

                    }
                )
            }
        </div>
      </div>
    </section>
  );
};

export default EngageSocials;
