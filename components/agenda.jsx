import ImageCard from "./imageCard"

const Agenda=()=>{
    return(
        <section className="section has-background-light">
            <div className="container">
                <div className="columns">
                    <div className="column is-3">
                        <p className="has-text-black has-font-weight-bold is-size-3">AfHEA 2022 Agenda</p>
                        <p className="is-size-6 has-font-weight-medium">Click any image to preview, download, or share the message using the tweet button. Click here to Download PDF Version</p>    
                    </div>
                    <div className="column is-4">
                        <ImageCard/>
                    </div>
                    <div className="column is-4">
                        <ImageCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agenda